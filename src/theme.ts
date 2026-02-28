"use client";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "var(--font-roboto)",
  },
  palette: {
    background: {
      default: "#ccc", // Your desired color
    },
  },
  cssVariables: true,
});

export default theme;
