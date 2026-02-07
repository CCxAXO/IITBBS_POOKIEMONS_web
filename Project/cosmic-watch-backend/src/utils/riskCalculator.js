export const calculateRisk = (asteroid) => {
  const hazardous = asteroid.is_potentially_hazardous_asteroid;
  const missDistance =
    asteroid.close_approach_data[0].miss_distance.kilometers;

  if (hazardous && missDistance < 1000000) return "HIGH";
  if (missDistance < 3000000) return "MEDIUM";
  return "LOW";
};
