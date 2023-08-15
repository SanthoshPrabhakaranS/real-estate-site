import { styled } from "@mui/material/styles";

export const ResidenciesWrapper = styled("div")(({ theme }) => ({
  width: "100%",
  maxWidth: "65rem",
  padding: "1.5rem",
  margin: "0 auto",
}));

export const Header = styled("div")(({ theme }) => ({
  marginBottom: "1.5rem",

  "& p:nth-of-type(1)": {
    fontSize: theme.typography.lg,
    fontWeight: "700",
    color: theme.palette.primary.orange,
  },

  "& p:nth-of-type(2)": {
    fontSize: theme.typography.xl,
    fontWeight: "700",
    color: theme.palette.primary.main,
  },
}));

export const SliderButton = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  gap: ".5rem",
  justifyContent: "end",
  marginTop: "1rem",

  "& button": {
    padding: ".4rem .7rem",
    backgroundColor: "transparent",
    border: "2px solid",
    borderColor: theme.palette.primary.lightBlue,
    cursor: "pointer",
    borderRadius: "7px",
  },

  "& button:nth-of-type(2)": {
    boxShadow: theme.palette.primary.shadow,
    backgroundColor: theme.palette.primary.lightBlue,
  },
}));
