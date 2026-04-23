export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        delagothicone: ['DelaGothicOne', 'sans-serif'],
        dmsans: ['DM Sans', 'sans-serif'],
      },
      colors: {
        primary: "#8F5CFB",
        accent: "#96F21B",
        dark: "#403E3E",
        light: "#EEEEEE",
        text: {
          DEFAULT: "#EEEEEE",
          secondary: "#6F6B6B",
          accent: "#B7FF56",
        },
        background: {
          DEFAULT: "#201F1F",
        },
      },
    },
  },
  plugins: [],
}