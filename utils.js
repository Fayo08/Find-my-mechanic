// Set VITE_API_URL at build time to point at the deployed API
export const api_URL = (import.meta.env.VITE_API_URL || "http://localhost:8080").replace(/\/$/, "");
