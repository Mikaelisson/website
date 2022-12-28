import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": "http://localhost:3000",
      "/admin/auth": "http://localhost:3000",
      "/admin/auth/token": "http://localhost:3000",
      "/admin/add": "http://localhost:3000",
      "/admin/edit": "http://localhost:3000",
      "/admin/delete": "http://localhost:3000",
    },
  },
});
