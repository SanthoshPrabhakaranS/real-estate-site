import { styled } from "@mui/material/styles";

export const SinglePropertyWrapper = styled("div")(({ theme }) => ({
  width: "100%",
  maxWidth: "65rem",
  padding: "5rem 1.5rem 1.5rem",
  margin: "0 auto",

  "& img": {
    width: "100%",
    maxHeight: "30rem",
    objectFit: "cover",
    borderRadius: "18px",
  },
}));

export const SectionWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: "1rem",

  //Media queries
  [theme.breakpoints.down("lg")]: {
    flexDirection: "column",
  },
}));

export const ImageWrapper = styled("div")(({ theme, inFav }) => ({
  position: "relative",

  "& svg": {
    position: "absolute",
    right: "10px",
    top: "10px",
    fontSize: "1.7rem",
    color: inFav ? "red" : "white",
    cursor: "pointer",
    transition: ".3s all ease-in-out",

    //Media queries
    [theme.breakpoints.down("md")]: {
      fontSize: "1.5rem",
    },

    "&:hover": {
      scale: "1.1",
    },
  },
}));

//Left Side
export const LeftContainer = styled("div")(({ theme }) => ({
  width: "50%",
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  marginTop: ".5rem",

  //Media queries
  [theme.breakpoints.down("lg")]: {
    width: "100%",
  },
}));

export const LeftContainerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",

  "& h1": {
    fontSize: theme.typography.xl,
    color: theme.palette.primary.main,
  },

  "& p": {
    fontSize: theme.typography.lg,
    color: theme.palette.primary.orange,
    fontWeight: "500",
  },
}));

export const FacilitiesContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: "2rem",

  //Media queries
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    alignItems: "start",
    gap: "1rem",
  },

  "& div": {
    display: "flex",
    alignItems: "center",
    gap: ".5rem",
    fontSize: theme.typography.md,
    fontWeight: "500",

    "& span": {
      color: theme.palette.primary.main,
      fontSize: "1rem",
      display: "flex",
      alignItems: "center",
    },
  },
}));

export const Description = styled("p")(({ theme }) => ({
  color: theme.palette.primary.lightGray,
}));

export const LeftSideFooter = styled("div")(({ theme }) => ({
  color: theme.palette.primary.lightGray,
}));

export const BookingButton = styled("button")(({ theme }) => ({
  padding: "15px 25px",
  background: theme.palette.primary.blueLinerGradient,
  border: "none",
  color: "white",
  fontWeight: "500",
  borderRadius: "5px",
  cursor: "pointer",
  transition: ".4s all ease-in-out",

  "&:hover": {
    scale: "1.05",
  },
}));

export const BookingCancelButton = styled("button")(({ theme }) => ({
  padding: "15px 25px",
  background: "white",
  border: "1px solid red",
  color: "red",
  fontWeight: "500",
  borderRadius: "5px",
  cursor: "pointer",
  transition: ".4s all ease-in-out",

  "&:hover": {
    scale: "1.05",
  },
}));

//Right Side
export const RightContainer = styled("div")(({ theme }) => ({
  width: "50%",

  //Media queries
  [theme.breakpoints.down("lg")]: {
    width: "100%",
  },

  "& img": {
    width: "100%",
    height: "100%",
  },
}));
