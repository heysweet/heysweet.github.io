import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        green: '#dcf29d',
        black: '#1b1233',
      },
    },
  },
  plugins: [],
};
export default config;