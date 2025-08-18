import type { Config } from 'tailwindcss';

export default {
  content: [
    './client/public/index.html',
    './client/**/*.{ts,tsx,js,jsx,html}',
  ],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config;


