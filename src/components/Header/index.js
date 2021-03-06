import { AppBar, Toolbar, Typography, Box, Button } from "@mui/material";
import React from "react";
import { Language } from "@mui/icons-material";
import LogoIcon from "../../assets/logos/Logo.svg";
import { styled } from "@mui/material/styles";

const StyledButton = styled(Button)`
  color: #919191;
  &:hover {
    color: #ffffff;
  }
`;

const AdminButton = styled(Button)`
  background-color: #01aeff;
  color: #ffffff;
  margin-right: 5px;
  text-transform: none;
`;

function Header() {
  return (
    <AppBar position="static" sx={{ background: "#303030" }}>
      <Toolbar disableGutters>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            padding: "5px",
            mx: 3,
          }}
        >
          <Box>
            <img src={LogoIcon} alt="logo" />
          </Box>
          <Box>
            <AdminButton color="primary" variant="contained">
              <Typography variant="caption"> Admin Page</Typography>
            </AdminButton>
            <StyledButton size="small" variant="text" startIcon={<Language />}>
              En
            </StyledButton>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
