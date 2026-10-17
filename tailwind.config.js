/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: "var(--brand)",
        "brand-hover": "var(--brand-hover)",
        "brand-subtle": "var(--brand-subtle)",
        "bg-base": "var(--bg-base)",
        "bg-surface": "var(--bg-surface)",
        "bg-subtle": "var(--bg-subtle)",
        "text-primary": "var(--text-primary)",
        "text-secondary": "var(--text-secondary)",
        "text-muted": "var(--text-muted)",
        "border-default": "var(--border-default)",
      },
      fontFamily: {
        sans: ["var(--font-plus-jakarta-sans)", "sans-serif"],
      },
      boxShadow: {
        soft: "0 8px 28px rgb(24 24 32 / 0.06)",
      },
    },
  },
  plugins: [],
};
