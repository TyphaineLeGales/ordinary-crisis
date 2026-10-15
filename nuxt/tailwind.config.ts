import type { Config } from 'tailwindcss'

export default {
  content: [ "./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}" ],
  theme: {
    extend: {
        screens: {
            "xs": "375px",
            "sm": "640px",
            "md": "768px",
            "lg": "1024px",
            "xl": "1440px",
            "2xl": "1920px",
        },
        colors: {
            black: {
                full: "#121223",
            },
            grey: {
                light: "#F1F3FD",
            },
            white: {
                full: "#FFFFFF",
            },
            blue: {
                dark: "#121223",
                electric: "#1D4EFF",
                light: "#CDD2E7",
            },
            yellow: "#FEF783",
            transparent: "transparent",
        },

    },
  },
  plugins: [],
} satisfies Config