import { useState, useEffect, useCallback } from 'react';
import { Asteroid, AsteroidStats } from '@/types/asteroid';

const API_BASE_URL = 'https://iitbbs-pookiemons-web.onrender.com';

export const useAsteroids = () => {
  const [asteroids, setAsteroids] = useState<Asteroid[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);

  const fetchAsteroids = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(`${API_BASE_URL}/api/asteroids/feed`);
      
      if (!response.ok) {
        throw new Error(`Server error: ${response.status}`);
      }

      const data = await response.json();
      
      // Parse string values to numbers
      const parsedData: Asteroid[] = data.map((item: any) => ({
        ...item,
        distance_km: parseFloat(item.distance_km) || 0,
        velocity_kmph: parseFloat(item.velocity_kmph) || 0,
      }));
      
      setAsteroids(parsedData);
      setLastUpdated(new Date());
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Failed to fetch asteroid data';
      setError(message);
      console.error('Failed to fetch asteroids:', err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchAsteroids();
  }, [fetchAsteroids]);

  const stats: AsteroidStats = {
    total: asteroids.length,
    hazardous: asteroids.filter(a => a.hazardous).length,
    highRisk: asteroids.filter(a => a.risk === 'HIGH').length,
    mediumRisk: asteroids.filter(a => a.risk === 'MEDIUM').length,
    lowRisk: asteroids.filter(a => a.risk === 'LOW').length,
    avgDistance: asteroids.length > 0 
      ? asteroids.reduce((sum, a) => sum + a.distance_km, 0) / asteroids.length 
      : 0,
    avgVelocity: asteroids.length > 0 
      ? asteroids.reduce((sum, a) => sum + a.velocity_kmph, 0) / asteroids.length 
      : 0,
  };

  return {
    asteroids,
    stats,
    isLoading,
    error,
    lastUpdated,
    refetch: fetchAsteroids,
  };
};
