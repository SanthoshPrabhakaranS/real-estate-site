import { styled } from "@mui/material/styles";

export const HeroWrapper = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.primary.black,
}));

export const HeroLayout = styled("div")(({ theme }) => ({
  width: "100%",
  maxWidth: "65rem",
  margin: "0 auto",
  color: "white",
  padding: "7rem 1.5rem 3rem 1.5rem",
  display: "flex",
  flexDirection: "row",
  gap: "2rem",

  //Media queries
  [theme.breakpoints.down("lg")]: {
    flexDirection: "column",
    maxWidth: "35rem",
  },
}));

// Left Side
export const LeftContainer = styled("div")(({ theme }) => ({
  width: "50%",
  display: "flex",
  flexDirection: "column",
  gap: "3rem",

  //Media queries
  [theme.breakpoints.down("lg")]: {
    width: "100%",
  },
}));

export const Header = styled("div")(({ theme }) => ({
  "& h1": {
    fontSize: "4rem",
    lineHeight: "4rem",
    fontWeight: "600",
    zIndex: "5",
    marginTop: "1rem",
    position: "relative",

    "& span": {
      position: "absolute",
      height: "4rem",
      width: "4rem",
      background: theme.palette.primary.orangeLinearGradient,
      borderRadius: "50%",
      right: "35%",
      top: "-10%",
      zIndex: "-10",
    },

    //Media queries
    [theme.breakpoints.down("md")]: {
      fontSize: "3rem",
      lineHeight: "3.5rem",

      "& span": {
        right: "53%",
      },
    },
  },
}));

export const Description = styled("div")(({ theme }) => ({
  "& p": {
    color: theme.palette.primary.lightGray,
  },
}));

export const Footer = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "2rem",

  "& div": {
    display: "flex",
    flexDirection: "column",

    "& p": {
      color: theme.palette.primary.lightGray,
    },
  },

  "& span": {
    fontSize: "2rem",
  },

  "& span:nth-of-type(2)": {
    color: theme.palette.primary.orange,
  },

  //Media query
  [theme.breakpoints.down("md")]: {
    flexWrap: "wrap",
    textAlign: "center",
    justifyContent: "center",
  },
}));

//Right Side
export const ImgContainer = styled("div")(({ theme }) => ({
  width: "50%",
  height: "35rem",

  "& img": {
    width: "100%",
    height: "100%",
    borderRadius: "15rem 15rem 0 0",
    border: "6px solid",
    borderColor: theme.palette.primary.lightGray,
    objectFit: "cover",
  },

  //Media queries
  [theme.breakpoints.down("lg")]: {
    width: "100%",

    "& img": {
      width: "100%",
      maxWidth: "30rem",
    },
  },

  [theme.breakpoints.down("md")]: {
    "& img": {
      maxHeight: "28rem",
    },
  },
}));
