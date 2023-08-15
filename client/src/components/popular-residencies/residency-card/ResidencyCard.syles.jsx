import { styled } from "@mui/material/styles";

export const CardWrapper = styled("div")(({ theme }) => ({
  cursor: "pointer",
  borderRadius: "18px",
  transition: ".3s all ease-in-out",
  padding: ".5rem",
  position: "relative",

  "&:hover": {
    background: theme.palette.primary.lightBlue,
    scale: "1.01",
  },

  "& img": {
    width: "100%",
    height: "12rem",
    borderRadius: "15px",
  },

  "& p:nth-of-type(1)": {
    fontWeight: "600",
    color: theme.palette.primary.lightGray,
    display: "flex",
    alignItems: "center",
    gap: "2px",

    "& span": {
      color: theme.palette.primary.orange,
    },
  },

  "& h1": {
    fontSize: "1.4rem",
    color: theme.palette.primary.main,
  },

  "& p:nth-of-type(2)": {
    fontSize: ".8rem",
    color: theme.palette.primary.lightGray,
    fontWeight: "500",
  },
}));

export const FavouriteIcon = styled("span")(({ theme }) => ({
  position: "absolute",
  right: "15px",
  top: "15px",
  color: "white",
  cursor: "pointer",
}));
