import { styled } from "@mui/material/styles";

export const PropertiesWrapper = styled("div")(({ theme }) => ({
  width: "100%",
  maxWidth: "65rem",
  padding: "5rem 1.5rem 1.5rem",
  margin: "0 auto",
}));

export const PropertyItemsWrapper = styled("div")(({ theme }) => ({
    padding: "1.5rem 0",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
    gridGap: "1.5rem"
}));
