# Elite Learning Academy - Vite + React App

This is a Vite + React application for Elite Learning Academy, optimized for Vercel deployment with proper SPA routing, environment-based API handling, and best practices for production deployment.

## Features

- React 19 with Vite 7
- React Router DOM for client-side routing
- Responsive design with Tailwind CSS
- Optimized for Vercel deployment
- Environment-based API configuration
- Proper SPA routing with fallback for refresh

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Copy the environment variables file:
   ```bash
   cp .env.example .env
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

## Deployment to Vercel

This project is configured for seamless deployment to Vercel:

1. The `vercel.json` file handles SPA routing by redirecting all routes to `/`
2. Environment variables are properly configured for different environments
3. The application is optimized for production builds

## Vercel Configuration

The `vercel.json` file contains:

```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/"
    }
  ],
  "cleanUrls": true,
  "trailingSlash": false
}
```

This ensures that all routes are handled by the React Router, preventing 404 errors on page refresh.

## Environment Variables

Environment variables are handled using Vite's built-in environment variable support:

- Variables prefixed with `VITE_` are exposed to the client-side application
- Use `.env` files for local development
- Set environment variables in the Vercel dashboard for production

## API Configuration

The application includes an API utility module (`src/utils/api.js`) that handles:

- Environment-based API base URLs
- Consistent request/response handling
- Error handling and logging
- Standardized HTTP methods

## Production Optimizations

- Chunk splitting for vendor libraries
- Optimized bundle sizes
- SPA routing fallback handling
- Clean URLs configuration

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build locally
