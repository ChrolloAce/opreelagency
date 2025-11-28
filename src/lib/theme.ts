// theme.ts - Creator Marketing Landing Page Theme

export const theme = {
  colors: {
    // Backgrounds
    bg: {
      base: "#ffffff", // Clean white for tech look
      skyTop: "#f0f7ff", // Very light blue
      skyMid: "#e0efff", 
      skyBottom: "#ffffff",
    },
    // Brand - Switched to Blue
    brand: {
      primary: "#2563eb", // Vibrant Tech Blue (Royal Blue/Inter Blue)
      primarySoft: "#dbeafe", // Light blue background
      accent: "#3b82f6", // Slightly lighter accent
    },
    // Text
    text: {
      primary: "#0f172a", // Slate 900
      secondary: "#475569", // Slate 600
      subtle: "#94a3b8", // Slate 400
      highlight: "#2563eb", // Blue highlight
    },
    // Surfaces
    surface: {
      card: "#ffffff",
      cardSoft: "rgba(255,255,255,0.95)",
      dark: "#0f172a",
    },
    // Borders / shadows
    border: {
      soft: "rgba(0,0,0,0.06)",
    },
  },
  fonts: {
    // Switched to clean sans-serif (Inter) for everything
    display: "var(--font-inter), system-ui, -apple-system, sans-serif",
    script: "var(--font-inter), system-ui, -apple-system, sans-serif",
    body: "var(--font-inter), system-ui, -apple-system, sans-serif",
  },
  radii: {
    button: "9999px",
    card: "24px",
    video: "28px",
  },
  shadows: {
    soft: "0 18px 45px rgba(37, 99, 235, 0.15)", // Blue-tinted shadow
    subtle: "0 8px 20px rgba(37, 99, 235, 0.08)",
  },
  effects: {
    heroGradient:
      "radial-gradient(circle at top left, #dbeafe 0, transparent 50%)," +
      "radial-gradient(circle at top right, #e0efff 0, transparent 55%)," +
      "linear-gradient(to bottom, #ffffff 0%, #f8fafc 60%, #ffffff 100%)",
    heroNoiseOpacity: 0.15,
  },
} as const;

export type Theme = typeof theme;
