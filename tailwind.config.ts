import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";
import aspectRatio from "@tailwindcss/aspect-ratio";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: ["var(--font-geist-sans)", "ui-sans-serif", "system-ui"],
      mono: ["var(--font-geist-mono)", "ui-monospace", "SFMono-Regular"],
      caption: ["var(--font-caption)", "ui-sans-serif", "system-ui"],
    },
    extend: {
      animation: {
        "ping-once": "pingOnce 1s ease-out forwards",
      },
      keyframes: {
        pingOnce: {
          "0%": {
            transform: "scale(1)",
            opacity: "1",
          },
          "75%": {
            transform: "scale(1.5)",
            opacity: "0",
          },
          "100%": {
            transform: "scale(2)",
            opacity: "0",
          },
        },
      },
      backgroundImage: {
        "radial-gradient": "radial-gradient(var(--tw-gradient-stops))",
        "radial-to-t": "radial-gradient(at top, var(--tw-gradient-stops))",
        "radial-to-b": "radial-gradient(at bottom, var(--tw-gradient-stops))",
        "radial-to-l": "radial-gradient(at left, var(--tw-gradient-stops))",
        "radial-to-r": "radial-gradient(at right, var(--tw-gradient-stops))",
        "radial-to-tl": "radial-gradient(at top left, var(--tw-gradient-stops))",
        "radial-to-tr": "radial-gradient(at top right, var(--tw-gradient-stops))",
        "radial-to-bl": "radial-gradient(at bottom left, var(--tw-gradient-stops))",
        "radial-to-br": "radial-gradient(at bottom right, var(--tw-gradient-stops))",
      },
      backgroundSize: {
        "grid-size": "32px 32px",
      },
      rotate: {
        "-45": "-45deg",
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [tailwindcssAnimate, aspectRatio],
};
export default config;
