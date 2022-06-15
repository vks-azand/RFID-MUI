import React from "react";
import { ThemeProvider } from "@emotion/react";
import { createTheme, CssBaseline } from "@mui/material";
import Login from "../pages/Login";
import { Routes, Route } from "react-router-dom";

function Router() {
  const myTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });
  return (
    <ThemeProvider theme={myTheme}>
      <CssBaseline />
      <Routes>
        <Route exact path="/" element={<Login />} />
      </Routes>
    </ThemeProvider>
  );
}

export default Router;
