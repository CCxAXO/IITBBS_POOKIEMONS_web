export interface Asteroid {
  id: string;
  name: string;
  hazardous: boolean;
  distance_km: number;
  velocity_kmph: number;
  risk: 'HIGH' | 'MEDIUM' | 'LOW';
}

export interface AsteroidStats {
  total: number;
  hazardous: number;
  highRisk: number;
  mediumRisk: number;
  lowRisk: number;
  avgDistance: number;
  avgVelocity: number;
}
