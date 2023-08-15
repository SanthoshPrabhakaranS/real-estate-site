import { styled } from "@mui/material/styles";

export const GetStartedWrapper = styled("div")(({ theme }) => ({
  width: "100%",
  maxWidth: "65rem",
  padding: "1.5rem",
  margin: "0 auto",

  "& div": {
    backgroundColor: theme.palette.primary.blue,
    color: "white",
    borderRadius: "10px",
    padding: "1.5rem",
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    justifyContent: "center",
    alignItems: "center",
  },

  "& h1": {
    fontSize: theme.typography.xl,
  },

  "& button": {
    padding: "15px 30px",
    background: "#669cda",
    border: "none",
    color: "white",
    fontWeight: "500",
    borderRadius: "5px",
    cursor: "pointer",
    transition: ".4s all ease-in-out",

    "&:hover": {
      scale: "1.05",
    },
  },
}));
