import { Router, type Request, type Response } from "express";
import fs from "fs";
import path from "path";

const router = Router();
const DB_PATH = path.join(__dirname, "..", "data.json");

// Ensure the data file exists
if (!fs.existsSync(DB_PATH)) {
  fs.writeFileSync(DB_PATH, JSON.stringify([]), "utf-8");
}

// Get all reservations
router.get("/reservations", (req: Request, res: Response) => {
  try {
    const data = fs.readFileSync(DB_PATH, "utf-8");
    res.json(JSON.parse(data));
  } catch (error) {
    res.status(500).json({ error: "Failed to read reservations" });
  }
});

// Create a new reservation
router.post("/reservations", (req: Request, res: Response) => {
  try {
    const newReservation = {
      id: Date.now().toString(),
      ...req.body,
      createdAt: new Date().toISOString()
    };
    
    const data = fs.readFileSync(DB_PATH, "utf-8");
    const reservations = JSON.parse(data);
    
    reservations.push(newReservation);
    
    fs.writeFileSync(DB_PATH, JSON.stringify(reservations, null, 2), "utf-8");
    res.status(201).json(newReservation);
  } catch (error) {
    res.status(500).json({ error: "Failed to save reservation" });
  }
});

export default router;
