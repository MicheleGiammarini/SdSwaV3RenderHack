import express, { Request, Response, NextFunction } from "express";
import path from "path";
import dotenv from "dotenv";
import axios from "axios";
import { registerRoutes } from "./routes";
import { setupVite, log } from "./vite";

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

// Serve static files in production (after build)
function serveStatic(app: express.Application) {
  const staticDir = path.join(__dirname, "dist");
  app.use(express.static(staticDir));

  // Fallback for SPA routing
  app.get("*", (req, res) => {
    res.sendFile(path.join(staticDir, "index.html"));
  });
}

// Periodic ping to keep server alive
const url = "https://sdswav3renderhack.onrender.com";
const interval = 30000;

function reloadWebsite() {
  axios
    .get(url)
    .then((response) => {
      console.log(`Ricaricato alle ${new Date().toISOString()} : Codice di stato ${response.status}`);
    })
    .catch((error) => {
      console.error(`Errore di ricaricamento alle ${new Date().toISOString()} :`, error.message);
    });
}

setInterval(reloadWebsite, interval);

// Main setup function
(async () => {
  const server = await registerRoutes(app);

  // Error handling middleware
  app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";

    res.status(status).json({ message });
    log(`Error: ${message}, Status Code: ${status}`);
  });

  // Dev or Prod setup
  if (app.get("env") === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }

  // Start server
  const port = process.env.PORT || 8080;
  server.listen({ port, host: "0.0.0.0" }, () => {
    log(`Server running at http://localhost:${port}`);
  });
})();
