/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx,mdx}", "./utils/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: "var(--paper)",
        "paper-2": "var(--paper-2)",
        "paper-3": "var(--paper-3)",
        ink: "var(--ink)",
        "ink-2": "var(--ink-2)",
        "ink-3": "var(--ink-3)",
        blue: "var(--blue)",
        "blue-soft": "var(--blue-soft)",
        orange: "var(--orange)",
        "orange-soft": "var(--orange-soft)",
        coral: "var(--coral)",
        "coral-soft": "var(--coral-soft)",
        lavender: "var(--lavender)",
        "lavender-soft": "var(--lavender-soft)",
        mint: "var(--mint)",
        "mint-soft": "var(--mint-soft)",
        yellow: "var(--yellow)",
        "yellow-soft": "var(--yellow-soft)",
        line: "var(--line)",
        "line-2": "var(--line-2)",
        "line-cool": "var(--line-cool)",
        night: "var(--night)",
        "night-2": "var(--night-2)",
        "night-line": "var(--night-line)",
        "night-ink": "var(--night-ink)",
        "night-muted": "var(--night-muted)",
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
        float: "float 7s ease-in-out infinite",
      },
      keyframes: {
        pulseDot: {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.4", transform: "scale(0.8)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
    },
  },
  plugins: [],
};
