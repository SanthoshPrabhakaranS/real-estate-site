import { styled } from "@mui/material/styles";

export const OurValueWrapper = styled("div")(({ theme }) => ({
  width: "100%",
  maxWidth: "65rem",
  padding: "1.5rem",
  margin: "0 auto",
}));

export const OurValueLayout = styled("div")(({ theme }) => ({
  width: "100%",
  maxWidth: "65rem",
  margin: "0 auto",
  display: "flex",
  flexDirection: "row",
  gap: "2rem",

  //Media queries
  [theme.breakpoints.down("lg")]: {
    flexDirection: "column",
    maxWidth: "35rem",
  },
}));

//Left Side
export const ImgContainer = styled("div")(({ theme }) => ({
  width: "50%",
  height: "35rem",
  display: "flex",
  justifyContent: "center",

  "& img": {
    width: "100%",
    height: "100%",
    borderRadius: "15rem 15rem 0 0",
    border: "6px solid",
    borderColor: theme.palette.primary.gray,
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
}));

// Right Side
export const RightContainer = styled("div")(({ theme }) => ({
  width: "50%",
  display: "flex",
  flexDirection: "column",
  gap: "3rem",

  //Media queries
  [theme.breakpoints.down("lg")]: {
    width: "100%",
  },

  "& h1": {
    color: theme.palette.primary.orange,
    fontSize: theme.typography.lg,
  },
}));

export const Header = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: ".3rem",

  "& h1": {
    color: theme.palette.primary.orange,
    fontSize: theme.typography.lg,
  },

  "& p:nth-of-type(1)": {
    fontSize: theme.typography.xl,
    color: theme.palette.primary.main,
    fontWeight: "700",
  },

  "& p:nth-of-type(2)": {
    color: theme.palette.primary.lightGray,
  },
}));
