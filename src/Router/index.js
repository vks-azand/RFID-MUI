import React from "react";
import { ThemeProvider } from "@emotion/react";
import { createTheme, CssBaseline } from "@mui/material";
import RFIDscan from "../pages/RFIDscan";
import Admin from "../pages/AdminPage";
import { Routes, Route } from "react-router-dom";
import WOAssociate from "../pages/WOassociate";
import Login from "../pages/Login";
import WorkOrders from "../pages/WorkOrders";

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
        <Route exact path="/login" element={<Login />} />
      </Routes>
      <Routes>
        <Route exact path="/workorders" element={<WorkOrders />} />
      </Routes>
      <Routes>
        <Route exact path="/adminpage" element={<Admin />} />
      </Routes>
      <Routes>
        <Route exact path="/woassociate" element={<WOAssociate />} />
      </Routes>
    </ThemeProvider>
  );
}

export default Router;
