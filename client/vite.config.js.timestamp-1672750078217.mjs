// vite.config.js
import { defineConfig } from "file:///C:/Users/mikae/OneDrive/%C3%81rea%20de%20Trabalho/Projetos/website/client/node_modules/vite/dist/node/index.js";
import react from "file:///C:/Users/mikae/OneDrive/%C3%81rea%20de%20Trabalho/Projetos/website/client/node_modules/@vitejs/plugin-react/dist/index.mjs";
var vite_config_default = defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": "http://localhost:3000",
      "/admin/auth": "http://localhost:3000",
      "/admin/auth/token": "http://localhost:3000",
      "/admin/add": "http://localhost:3000",
      "/admin/edit": "http://localhost:3000",
      "/admin/delete": "http://localhost:3000"
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxtaWthZVxcXFxPbmVEcml2ZVxcXFxcdTAwQzFyZWEgZGUgVHJhYmFsaG9cXFxcUHJvamV0b3NcXFxcd2Vic2l0ZVxcXFxjbGllbnRcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXG1pa2FlXFxcXE9uZURyaXZlXFxcXFx1MDBDMXJlYSBkZSBUcmFiYWxob1xcXFxQcm9qZXRvc1xcXFx3ZWJzaXRlXFxcXGNsaWVudFxcXFx2aXRlLmNvbmZpZy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvbWlrYWUvT25lRHJpdmUvJUMzJTgxcmVhJTIwZGUlMjBUcmFiYWxoby9Qcm9qZXRvcy93ZWJzaXRlL2NsaWVudC92aXRlLmNvbmZpZy5qc1wiO2ltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gXCJ2aXRlXCI7XG5pbXBvcnQgcmVhY3QgZnJvbSBcIkB2aXRlanMvcGx1Z2luLXJlYWN0XCI7XG5cbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBwbHVnaW5zOiBbcmVhY3QoKV0sXG4gIHNlcnZlcjoge1xuICAgIHByb3h5OiB7XG4gICAgICBcIi9hcGlcIjogXCJodHRwOi8vbG9jYWxob3N0OjMwMDBcIixcbiAgICAgIFwiL2FkbWluL2F1dGhcIjogXCJodHRwOi8vbG9jYWxob3N0OjMwMDBcIixcbiAgICAgIFwiL2FkbWluL2F1dGgvdG9rZW5cIjogXCJodHRwOi8vbG9jYWxob3N0OjMwMDBcIixcbiAgICAgIFwiL2FkbWluL2FkZFwiOiBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMFwiLFxuICAgICAgXCIvYWRtaW4vZWRpdFwiOiBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMFwiLFxuICAgICAgXCIvYWRtaW4vZGVsZXRlXCI6IFwiaHR0cDovL2xvY2FsaG9zdDozMDAwXCIsXG4gICAgfSxcbiAgfSxcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUEyWSxTQUFTLG9CQUFvQjtBQUN4YSxPQUFPLFdBQVc7QUFHbEIsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUyxDQUFDLE1BQU0sQ0FBQztBQUFBLEVBQ2pCLFFBQVE7QUFBQSxJQUNOLE9BQU87QUFBQSxNQUNMLFFBQVE7QUFBQSxNQUNSLGVBQWU7QUFBQSxNQUNmLHFCQUFxQjtBQUFBLE1BQ3JCLGNBQWM7QUFBQSxNQUNkLGVBQWU7QUFBQSxNQUNmLGlCQUFpQjtBQUFBLElBQ25CO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
