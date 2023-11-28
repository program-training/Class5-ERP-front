import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import checker from "vite-plugin-checker";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), checker({ typescript: true })],
});

// export default defineConfig({
// plugins: [react()],
// test: {
// globals: true,
// environment: "jsdom",
// setupFiles: "./src/tests/setup.ts",
// },
// server: {
// watch: {
// usePolling: true,
// },
// host: true, // needed for the Docker Container port mapping to work
// strictPort: true,
// port: 5173, // you can replace this port with any port
// },
// });
