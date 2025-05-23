import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        paten: "#3B82F6", // Ganti dengan nilai hex jika ingin menetapkan warna pasti

        // Custom themes
        primary: {
          DEFAULT: "#1E40AF",   // biru tua
          light: "#3B82F6",     // biru sedang
          dark: "#1E3A8A",      // biru lebih gelap
        },
        secondary: {
          DEFAULT: "#F59E0B",   // amber
          light: "#FBBF24",
          dark: "#B45309",
        },
        accent: {
          DEFAULT: "#10B981",   // emerald
          light: "#6EE7B7",
          dark: "#047857",
        },
        neutral: {
          50: "#F9FAFB",
          100: "#F3F4F6",
          200: "#E5E7EB",
          300: "#D1D5DB",
          400: "#9CA3AF",
          500: "#6B7280",
          600: "#4B5563",
          700: "#374151",
          800: "#1F2937",
          900: "#111827",
        },
        danger: "#EF4444",
        success: "#22C55E",
        warning: "#F97316",
        info: "#3B82F6",
      },
    },
  },
  plugins: [],
} satisfies Config;
