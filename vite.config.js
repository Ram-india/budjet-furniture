import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  base: "/demo/", //  IMPORTANT for subfolder deployment

  plugins: [
    react(),
    tailwindcss(),
  ],

  build: {
    chunkSizeWarningLimit: 800, // optional – suppress big chunk warnings
    rollupOptions: {
      output: {
        manualChunks: {
          react: ["react", "react-dom"],
          swiper: ["swiper"],
          icons: ["react-icons"],
          recaptcha: ["react-google-recaptcha"],
        },
      },
    },
  },
});