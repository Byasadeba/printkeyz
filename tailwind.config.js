/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,jsx}",
    "./src/components/**/*.{js,jsx}",
    "./src/features/**/*.{js,jsx}",
  ],

  theme: {
    /* ------------------------------
       RESPONSIVE BREAKPOINTS
    --------------------------------*/
    screens: {
      xs: "360px",     // small mobiles
      sm: "640px",     // mobiles
      md: "768px",     // tablets
      lg: "1024px",    // laptops
      xl: "1280px",    // desktops
      "2xl": "1536px", // large desktops
      "3xl": "1920px", // full HD
      "4xl": "2560px", // 2K
      "5xl": "3840px", // 4K+
    },

    extend: {
      /* ------------------------------
         WOOD / BROWN COLOR PALETTE
      --------------------------------*/
      colors: {
        wood: {
          light: "#E6D3B1",   // light wood / paper
          DEFAULT: "#B08968", // primary wood
          dark: "#7F5539",    // dark wood
          deeper: "#5A3E2B",  // deep brown
          accent: "#9C6644",  // accent brown
        },

        page: {
          bg: "#F3E9DC",      // page background
          section: "#EADBC8", // section bg
        },

        text: {
          primary: "#3E2723",
          secondary: "#5D4037",
          muted: "#7B5E57",
          inverse: "#FFF8F1",
        },
      },

      /* ------------------------------
         TYPOGRAPHY
      --------------------------------*/
      fontFamily: {
        sans: ["ui-sans-serif", "system-ui", "sans-serif"],
        serif: ["Georgia", "Cambria", "serif"],
      },

      fontSize: {
        xs: "0.75rem",
        sm: "0.875rem",
        base: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "1.875rem",
        "4xl": "2.25rem",
        "5xl": "3rem",
        "6xl": "3.75rem",
        "7xl": "4.5rem",
      },

      /* ------------------------------
         SPACING & LAYOUT
      --------------------------------*/
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
        26: "6.5rem",
        30: "7.5rem",
      },

      borderRadius: {
        xl: "0.75rem",
        "2xl": "1rem",
        "3xl": "1.5rem",
      },

      boxShadow: {
        wood: "0 10px 25px rgba(90, 62, 43, 0.25)",
        soft: "0 4px 12px rgba(0,0,0,0.08)",
      },

      /* ------------------------------
         CONTAINER (VERY IMPORTANT)
      --------------------------------*/
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "1.5rem",
          lg: "2rem",
          xl: "3rem",
          "2xl": "4rem",
        },
        screens: {
          xl: "1280px",
          "2xl": "1440px",
          "3xl": "1600px",
        },
      },
    },
  },

  plugins: [],
};
