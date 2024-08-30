/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        // Define a custom glow effect
        glow: "0 0 15px rgba(0, 255, 255, 0.7), 0 0 25px rgba(0, 255, 255, 0.5)",
        glowInput: "0 0 10px rgba(0, 255, 255, 0.5)",
        // Define hover glow effects
        glowHover:
          "0 0 20px rgba(0, 255, 255, 0.9), 0 0 30px rgba(0, 255, 255, 0.7)",
        glowInputHover: "0 0 15px rgba(0, 255, 255, 0.7)",
      },
    },
  },
  plugins: [],
};
