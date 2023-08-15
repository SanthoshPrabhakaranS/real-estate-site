import { styled } from "@mui/material/styles";

export const FooterLayout = styled("div")(({ theme }) => ({
  width: "100%",
  maxWidth: "65rem",
  margin: "0 auto",
  padding: "2rem 1.5rem",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  gap: "2rem",
  borderTop: "1px solid",
  borderColor: theme.palette.primary.gray,

  //Media queries
  [theme.breakpoints.down("lg")]: {
    flexDirection: "column",
    maxWidth: "35rem",
  },
}));

//Left Side
export const LeftContainer = styled("div")(({ theme }) => ({
  "& img": {
    width: "6.5rem",
  },

  "& p": {
    color: theme.palette.primary.lightGray,
  },
}));

//Right Side
export const RightContainer = styled("div")(({ theme }) => ({
  "& h1": {
    fontSize: theme.typography.xl,
    color: theme.palette.primary.main,
  },

  "& p": {
    color: theme.palette.primary.lightGray,
  },
}));
