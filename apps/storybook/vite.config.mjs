import react from "@vitejs/plugin-react";
import flowbiteReact from "@herob191/flowbite-react/plugin/vite";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react(), flowbiteReact()],
});
