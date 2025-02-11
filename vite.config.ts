import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/weather-application",
  define: {
    "import.meta.env.VITE_WEATHER_API_KEY": JSON.stringify(
      process.env.VITE_WEATHER_API_KEY,
    ),
  },
});
