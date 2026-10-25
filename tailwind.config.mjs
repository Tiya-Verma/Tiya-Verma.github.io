/** @type {import('tailwindcss').Config} */

// SF Pro on Apple platforms, Inter everywhere else.
const systemStack = [
  "-apple-system",
  "BlinkMacSystemFont",
  '"SF Pro Text"',
  '"Inter"',
  '"Helvetica Neue"',
  "Helvetica",
  "Arial",
  "sans-serif",
];

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        canvas: "#ffffff",
        heading: "#1f2937",
        ink: "#4b5563",
        body: "#374151",
        muted: "#6b7280",
        soft: "#8b929c",
        ghost: "#a3a9b2",
        rule: "#eef0f3",
        fill: "#f2f3f5",
        accent: "#10b981",
        hover: "#0071e3",
      },
      fontFamily: {
        sans: systemStack,
        display: [
          "-apple-system",
          "BlinkMacSystemFont",
          '"SF Pro Display"',
          ...systemStack.slice(3),
        ],
      },
      // Type scale modelled on Apple's HIG text styles, with tracking
      // tightening as size grows (SF Pro's optical behaviour).
      fontSize: {
        caption: ["12px", { lineHeight: "1.35", letterSpacing: "0" }],
        footnote: ["13px", { lineHeight: "1.4", letterSpacing: "-0.003em" }],
        subhead: ["15px", { lineHeight: "1.45", letterSpacing: "-0.009em" }],
        callout: ["16px", { lineHeight: "1.5", letterSpacing: "-0.012em" }],
        reading: ["17px", { lineHeight: "1.65", letterSpacing: "-0.016em" }],
        title3: ["20px", { lineHeight: "1.35", letterSpacing: "-0.018em" }],
        title2: ["22px", { lineHeight: "1.4", letterSpacing: "-0.02em" }],
        title1: ["28px", { lineHeight: "1.2", letterSpacing: "-0.022em" }],
        "large-title": ["34px", { lineHeight: "1.15", letterSpacing: "-0.024em" }],
        hero: ["56px", { lineHeight: "1.05", letterSpacing: "-0.028em" }],
        "hero-sm": ["44px", { lineHeight: "1.08", letterSpacing: "-0.026em" }],
      },
      letterSpacing: {
        whisper: "0.005em",
        tightish: "-0.015em",
      },
      transitionTimingFunction: {
        apple: "cubic-bezier(0.25, 0.1, 0.25, 1)",
      },
    },
  },
  plugins: [],
};
