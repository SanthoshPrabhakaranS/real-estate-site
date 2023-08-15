import { createTheme } from "@mui/material/styles";

export const customTheme = createTheme({
  palette: {
    primary: {
      main: "#1f3e72",
      black: "#131110",
      blueLinerGradient:
        "linear-gradient(97.05deg, #4066ff 3.76%, #2949c6 100%)",
      orangeLinearGradient: "linear-gradient(270deg, #ffb978 0%, #ff922d 100%)",
      blue: "#4066ff",
      lightBlue: "#eeeeff",
      shadow: "0px 23px 21px -8px rgba(136, 160, 255, 0.25)",
      gray: "#CBCBCB",
      lightGray: "#737373",
      orange: "#f59a45",
    },
  },
  breakpoints: {
    md: "678px",
    lg: "1200px",
  },
  typography: {
    xl: "1.7rem",
    lg: "1.3rem",
    md: ".9rem",
  },
});
