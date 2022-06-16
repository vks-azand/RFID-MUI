import React from "react";
import { ThemeProvider } from "@emotion/react";
import { createTheme, CssBaseline } from "@mui/material";
import RFIDscan from "../pages/RFIDscan";
import Admin from "../pages/AdminPage";
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
        <Route exact path="/" element={<RFIDscan />} />
      </Routes>
      <Routes>
        <Route exact path="/adminpage" element={<Admin />} />
      </Routes>
    </ThemeProvider>
  );
}

export default Router;
