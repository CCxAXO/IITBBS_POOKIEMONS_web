# project:
  name: Cosmic Watch
  description: Real time asteroid monitoring and risk analysis platform using NASA data
  purpose: Show near earth objects in a simple and visual way
  type: Full stack hackathon project

# features:
  - Live asteroid data from NASA NeoWs API
  - Risk classification into HIGH MEDIUM and LOW
  - Distance and velocity tracking
  - Hazardous asteroid identification
  - Interactive dashboard with stats and cards
  - Space themed dark user interface

# risk logic:
  high: Hazardous asteroid and distance less than 1000000 km
  medium: Distance less than 3000000 km
  low: All other asteroids

# tech stack:
   frontend:
    framework: React
    language: TypeScript
    build_tool: Vite
    styling:
      - Tailwind CSS
      - shadcn/ui
    data_fetching: TanStack React Query
    routing: React Router
  backend:
    runtime: Node.js
    framework: Express.js
    external_api: NASA NeoWs API
  tools:
    - Git
    - GitHub
    - Postman

# api:
  base_url: http://localhost:5000
  endpoint: /api/asteroids/feed
  method: GET
  response_fields:
    - id
    - name
    - distance_km
    - velocity_kmph
    - hazardous
    - risk

# project structure:
  backend:
    - src/index.js
    - src/routes/asteroids.js
    - src/services/nasaService.js
    - src/utils/riskCalculator.js
    - .env
    - package.json
  frontend:
    - src/components
    - src/pages
    - src/hooks
    - src/types

setup:
  backend:
    - cd backend
    - npm install
    - create .env with NASA_API_KEY
    - node src/index.js
  frontend:
    - cd frontend
    - npm install
    - npm run dev

  purpose:
    - Guidance
    - Debugging help
    - UI scaffolding
    - Documentation support

# author:
  name: Pookiemons
  field: Computer Science AI and ML
  year: 2026 .
