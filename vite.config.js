import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/goit-react-hw-05-movies/",
  build: {
    outDir: "./dist",
  },
  server: {
    port: 5173, // upewnij się, że jest to poprawny port
  },
});
