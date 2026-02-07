import express from "express";
import { fetchAsteroids } from "../services/nasaService.js";
import { calculateRisk } from "../utils/riskCalculator.js";

const router = express.Router();

router.get("/feed", async (req, res) => {
  try {
    const rawData = await fetchAsteroids();

    const flattened = Object.values(rawData).flat();

    const processed = flattened.map((asteroid) => ({
      id: asteroid.id,
      name: asteroid.name,
      hazardous: asteroid.is_potentially_hazardous_asteroid,
      distance_km:
        asteroid.close_approach_data[0].miss_distance.kilometers,
      velocity_kmph:
        asteroid.close_approach_data[0].relative_velocity
          .kilometers_per_hour,
      risk: calculateRisk(asteroid),
    }));

    res.json(processed);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch asteroid data" });
  }
});

export default router;
