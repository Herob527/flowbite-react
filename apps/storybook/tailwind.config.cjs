const flowbiteReact = require("@herob191/flowbite-react/plugin/tailwindcss");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{ts,tsx}", ".flowbite-react/class-list.json"],
  theme: {
    extend: {},
  },
  plugins: [flowbiteReact],
};
