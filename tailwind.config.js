/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx,mdx}", "./utils/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        "bg-2": "var(--bg-2)",
        "bg-3": "var(--bg-3)",
        "bg-4": "var(--bg-4)",
        ink: "var(--ink)",
        "ink-2": "var(--ink-2)",
        "ink-3": "var(--ink-3)",
        amber: "var(--amber)",
        "amber-2": "var(--amber-2)",
        coral: "var(--coral)",
        mint: "var(--mint)",
        lavender: "var(--lavender)",
        sky: "var(--sky)",
        line: "var(--line)",
        "line-2": "var(--line-2)",
        "line-3": "var(--line-3)",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        sans: ["var(--font-sans)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      maxWidth: { shell: "var(--shell)" },
      transitionTimingFunction: { editorial: "cubic-bezier(0.22, 1, 0.36, 1)" },
      animation: {
        "pulse-dot": "pulseDot 2.6s ease-in-out infinite",
      },
      keyframes: {
        pulseDot: {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.4", transform: "scale(0.8)" },
        },
      },
    },
  },
  plugins: [],
};
