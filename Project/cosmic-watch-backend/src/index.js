import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import asteroidRoutes from "./routes/asteroids.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/asteroids", asteroidRoutes);

app.get("/", (req, res) => {
  res.send("🚀 Cosmic Watch Backend is running!");
});

app.listen(5000, () => {
  console.log("🚀 Server running on http://localhost:5000");
});
