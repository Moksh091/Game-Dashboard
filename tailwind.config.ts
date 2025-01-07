import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        'custom-radial': 'radial-gradient(circle at 10% 10%, rgba(0, 0, 0, 0.7), transparent 20%), radial-gradient(circle at 90% 10%, rgba(0, 0, 0, 0.3), transparent 20%), radial-gradient(circle at 10% 90%, rgba(0, 0, 0, 0.3), transparent 20%), radial-gradient(circle at 90% 90%, rgba(0, 0, 0, 0.3), transparent 20%), #361518s',
      },
    },
  },
  plugins: [],
} satisfies Config;
