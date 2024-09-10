import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Proxy API requests starting with /api to the backend server
      "/api": {
        target: import.meta.env.VITE_BACKEND_URL, // Replace with your backend's local development URL
        changeOrigin: true,
        // rewrite: (path) => path.replace(/^\/api/, ""), // Optionally remove the /api prefix
      },
    },
  },
});
