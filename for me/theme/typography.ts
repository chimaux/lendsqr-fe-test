export const typography = {
  fontFamily: {
    primary: "var(--font-avenir-next), var(--font-work-sans), sans-serif",
    secondary: "var(--font-work-sans), sans-serif",
  },

  fontWeight: {
    thin: 100,
    ultraLight: 200,
    light: 300,
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    heavy: 800,
  },

  fontSize: {
    xs: 10,

    sm: 12,

    md: 14,

    base: 16,

    lg: 18,

    xl: 20,

    "2xl": 24,

    "3xl": 32,

    "4xl": 40,
  },

  lineHeight: {
    sm: "16px",

    md: "20px",

    lg: "24px",

    xl: "32px",

    xxl: "48px",
  },
} as const;