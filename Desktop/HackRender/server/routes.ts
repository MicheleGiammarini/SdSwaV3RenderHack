import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactMessageSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes
  app.post("/api/contact", async (req: Request, res: Response) => {
    try {
      const validatedData = insertContactMessageSchema.parse(req.body);
      const message = await storage.createContactMessage(validatedData);
      res.status(201).json({ message: "Message sent successfully", data: message });
    } catch (error) {
      console.error("Error submitting contact form:", error);
      res.status(400).json({ message: "Invalid message data", error: String(error) });
    }
  });

  app.get("/api/contact", async (_req: Request, res: Response) => {
    try {
      const messages = await storage.getContactMessages();
      res.status(200).json(messages);
    } catch (error) {
      console.error("Error getting contact messages:", error);
      res.status(500).json({ message: "Error retrieving messages", error: String(error) });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
