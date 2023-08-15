import { styled } from "@mui/material/styles";

export const AddressWrapper = styled("div")(({ theme }) => ({
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
}));
