import { styled } from "@mui/material/styles";

export const PropertyImageWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "1rem",
  width: "100%",

  "& button": {
    marginTop: "1rem",
  },
}));

export const UploadImageWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  border: "1px dotted gray",
  width: "100%",
  maxWidth: "20rem",
  height: "20rem",
  cursor: "pointer",
  borderRadius: "20px",
  marginTop: "1rem",
}));

export const ImageContainer = styled("div")(({ theme }) => ({
  "& img": {
    width: "100%",
    height: "100%",
    maxHeight: "25rem",
    borderRadius: "20px"
  },
  "& div": {
    display: "flex",
    flexDirection: "row",
    gap: "1rem",
    justifyContent: "center",
    alignItems: "center",
  },
}));
