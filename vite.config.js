
/* Import Vite's configuration helper. */
import { defineConfig } from "vite";

/* Enable React and Tailwind CSS v4. */
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// Configure the plugins used by the project.
export default defineConfig({
  plugins: [react(), tailwindcss()],
});
