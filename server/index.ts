import express, { Request, Response, NextFunction } from "express";
import path from "path";
import { registerRoutes } from "./routes";
import { setupVite, log } from "./vite"; 
import dotenv from "dotenv";
dotenv.config();


const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Logging middleware to track API calls
app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse: Record<string, any> | undefined = undefined;

  const originalResJson = res.json;
  res.json = function (bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }

      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "…";
      }

      log(logLine);
    }
  });

  next();
});

// Register routes (e.g., API routes) here
(async () => {
  const server = await registerRoutes(app);

  // Error handling middleware
  app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";

    res.status(status).json({ message });

    // Log the error (adjust this to your logging system)
    log(`Error: ${message}, Status Code: ${status}`);
  });

  // Conditionally use Vite in development, otherwise serve static files in production
  if (app.get("env") === "development") {
    await setupVite(app, server);
  } else {
    //serveStatic(app);
    await setupVite(app, server);
  }

  // Dynamic port assignment (Azure or fallback)
  const port = process.env.PORT || 8080; // Default to 8080 if no port is provided
  server.listen({ port, host: "0.0.0.0" }, () => {
    log(`Server running at http://localhost:${port}`);
  });
})();

const url = "https://sdswav3renderhack.onrender.com"; 
const interval = 30000 ; 

function  reloadWebsite ( ) { 
  axios. get (url) 
    . then ( response => { 
      console . log ( `Ricaricato alle ${ new  Date ().toISOString()} : Codice di stato ${response.status} ` ); 
    }) 
    . catch ( error => { 
      console . error ( `Errore di ricaricamento alle ${ new  Date ().toISOString()} :` , error. message ); 
    }); 



setInterval (reloadWebsite, interval);


// Serve static files in production (after build)
function serveStatic(app: express.Application) {
  const staticDir = path.join(__dirname, "dist"); // Adjust path to Vite's build output
  app.use(express.static(staticDir));

  // Handle other routes (e.g., fallback to index.html for SPAs)
  app.get("*", (req, res) => {
    res.sendFile(path.join(staticDir, "index.html"));
  });
}
