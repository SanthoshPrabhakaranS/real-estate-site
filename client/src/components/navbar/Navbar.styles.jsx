import { styled } from "@mui/material/styles";

export const NavbarWrapper = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.primary.black,
  height: "8vh",
  position: "fixed",
  width: "100%",
  zIndex: "200",
}));

export const NavbarLayout = styled("div")(({ theme }) => ({
  width: "100%",
  maxWidth: "65rem",
  margin: "0 auto",
  color: "white",
  padding: ".8rem",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  overflow: "hidden",
}));

export const LogoImg = styled("img")(({ theme }) => ({
  width: "5rem",
  height: "2rem",
  cursor: "pointer",
}));

export const NavItems = styled("div")(({ theme, menuOpened }) => ({
  display: "flex",
  gap: "1.8rem",
  alignItems: "center",
  color: theme.palette.primary.gray,
  fontWeight: "500",
  transition: ".3s all ease-in-out",
  zIndex: "999",

  "& a": {
    textDecoration: "none",
    color: theme.palette.primary.gray,

    "&:hover": {
      color: "#8a8a8a",
    },

    //Media queries
    [theme.breakpoints.down("md")]: {
      color: theme.palette.primary.black,
    },
  },

  "& p": {
    cursor: "pointer",

    "&:hover": {
      color: "#8a8a8a",
    },
  },

  //Media queries
  [theme.breakpoints.down("md")]: {
    zIndex: "200",
    backgroundColor: "white",
    color: theme.palette.primary.black,
    position: "fixed",
    right: menuOpened ? "2%" : "-100%",
    top: "7%",
    flexDirection: "column",
    padding: "2.5rem",
    borderRadius: "12px",
  },
}));

export const MenuIcon = styled("div")(({ theme }) => ({
  display: "none",

  //Media queries
  [theme.breakpoints.down("md")]: {
    display: "block",
  },
}));

export const LoginButton = styled("button")(({ theme }) => ({
  padding: "11px 25px",
  background: theme.palette.primary.blueLinerGradient,
  border: "none",
  color: "white",
  fontWeight: "500",
  borderRadius: "5px",
  cursor: "pointer",
  transition: ".4s all ease-in-out",

  "&:hover": {
    scale: "1.1",
  },
}));
