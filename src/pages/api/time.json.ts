import type { APIRoute } from 'astro';

// API Endpoint concept: Astro can expose backend-like routes from src/pages/api/*
export const GET: APIRoute = () => {
  return new Response(
    JSON.stringify({
      now: new Date().toISOString(),
      message: 'Hello from an Astro API endpoint'
    }),
    {
      headers: { 'Content-Type': 'application/json' }
    }
  );
};
