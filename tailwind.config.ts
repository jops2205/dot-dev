import type { Config } from "tailwindcss";

const config = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    colors: {
      white: "#fafafa",
      slate: "#070f22",
      lime: "#affe3e",
      silver: "#bdc0c6",
    },
  },
} satisfies Config;

export { config as default };
