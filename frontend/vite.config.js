import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const backendUrl = import.meta.env.VITE_BACKEND_URL || "http://localhost:5000";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
});
