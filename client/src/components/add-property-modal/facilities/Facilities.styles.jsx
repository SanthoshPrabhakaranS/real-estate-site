import { styled } from "@mui/material/styles";

export const FacilitiesWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "1rem",
  width: "100%",

  "& button": {
    marginTop: "1rem",
    display: "flex",
    justifyContent: "center",
  alignItems: "center",
  width: "100%",
  },

  "& div:nth-of-ladt-type(1)": {
    display: "flex",
    flexDirection: "row",
    gap: "1rem",
    justifyContent: "center",
    alignItems: "center",
  },
}));