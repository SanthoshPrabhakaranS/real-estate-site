import { styled } from "@mui/material/styles";

export const SearchWrapper = styled("div")(({ theme }) => ({
  padding: ".5rem",
  backgroundColor: "white",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  borderRadius: "5px",
  border: "1px solid",
  borderColor: "#cacaca",

  "& div": {
    display: "flex",
    alignItems: "center",
    width: "90%",
  },

  "& input": {
    padding: ".5rem",
    border: "none",
    width: "100%",

    "&:focus": {
      outline: "none",
    },
  },

  "& button": {
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
  },
}));
