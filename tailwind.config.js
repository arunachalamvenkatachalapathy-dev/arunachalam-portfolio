/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Enable class-based dark mode
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        display: ['Inter', '-apple-system', 'sans-serif'], // Keep it all unified in a stark sans-serif
      },
      colors: {
        // Apple-style Minimalist Palette
        background: 'var(--bg-color)',
        foreground: 'var(--text-primary)',
        surface: 'var(--surface-color)',
        'surface-border': 'var(--border-color)',
        text: {
          primary: 'var(--text-primary)',
          secondary: 'var(--text-secondary)',
          muted: 'var(--text-muted)',
        },
        accent: {
          DEFAULT: 'var(--accent-color)',
          hover: 'var(--accent-hover)',
        }
      },
    },
  },
  plugins: [],
}
