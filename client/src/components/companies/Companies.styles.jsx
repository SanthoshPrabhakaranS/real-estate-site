import { styled } from "@mui/material/styles";

export const CompaniesWrapper = styled("div")(({ theme }) => ({
  width: "100%",
  maxWidth: "65rem",
  padding: "3rem",
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  alignItems: "center",
  gap: "4rem",
  margin: "0 auto",

  "& img": {
    width: "10rem",

    "&:nth-of-type(2)": {
      width: "8rem",
    },
  },
}));
