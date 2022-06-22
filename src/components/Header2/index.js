import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  MenuItem,
  Menu,
} from "@mui/material";
import React, { useState } from "react";
import { Check, Language } from "@mui/icons-material";
import LogoIcon from "../../assets/logos/Logo.svg";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";
import axios from "axios";

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
  const [anchorEl, setAnchorEl] = useState(null);
  const [lang, setLang] = useState("En");
  const open = Boolean(anchorEl);
  const handleClick = e => {
    setAnchorEl(e.currentTarget);
  };
  const handleClose = val => {
    setLang(val);
    setAnchorEl(null);
  };
  // axios.get("http://localhost:8080/backend").then(res => {
  //   console.log(res);
  // });
  return (
    <AppBar position="absolute" sx={{ background: "#303030" }}>
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
            <Link to="/" style={{ textDecoration: "none" }}>
              <AdminButton color="primary" variant="contained">
                <Typography variant="caption"> RFID Scan</Typography>
              </AdminButton>
            </Link>
            <StyledButton
              size="small"
              variant="text"
              startIcon={<Language />}
              aria-controls={open ? "basic-menu" : undefined}
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              En
            </StyledButton>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
              sx={{
                "&.MuiPopover-paper": {
                  backgroundColor: "#fff",
                  color: "black",
                },
              }}
            >
              <MenuItem onClick={() => handleClose("En")}>
                {lang === "En" ? (
                  <Typography>
                    <Check fontSize="small" /> English
                  </Typography>
                ) : (
                  <Typography>English</Typography>
                )}
              </MenuItem>
              <MenuItem onClick={() => handleClose("Fr")}>
                {lang === "Fr" ? (
                  <Typography>
                    <Check fontSize="small" /> French
                  </Typography>
                ) : (
                  <Typography>French</Typography>
                )}
              </MenuItem>
              <MenuItem onClick={() => handleClose("Ge")}>
                {lang === "Ge" ? (
                  <Typography>
                    <Check fontSize="small" /> German
                  </Typography>
                ) : (
                  <Typography>German</Typography>
                )}
              </MenuItem>
            </Menu>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
