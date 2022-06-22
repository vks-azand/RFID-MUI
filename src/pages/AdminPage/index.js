import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
} from "@mui/material";
import Header2 from "../../components/Header2";
import { AddBox } from "@mui/icons-material";
import Admin from "../../assets/images/Admin.png";

import { Link } from "react-router-dom";
const MainBox = styled(Box)`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AdminBox = styled(Box)`
  width: 710px;
  height: 378px;
  opacity: 1;
  border-radius: 5px;
  border: 3px solid #1f8ac9;
`;

const Image = styled("img")``;

const StyledSelect = styled(Select)(({ theme }) => ({
  "& .MuiSelect-icon": {
    color: "black !important",
  },
  background: "white",
  color: "black",
}));

// backgroundColor: "white", color: "black", "::placeholder"

const StyledButton = styled(Button)`
  width: fit-content;
  margin-left: 10px;
  &:hover {
    background-color: none;
  }
  text-transform: none;
`;

function AdminPage() {
  // const [showPlaceholder, setShowplaceholder] = useState(value === "None");
  const [works, setWorks] = useState("");
  const handleChange = e => {
    setWorks(e.target.value);
  };

  return (
    <MainBox>
      <Header2 />
      <AdminBox sx={{ display: "flex" }}>
        {/* // background: `transparent url(${RFIDPicture})  0% 0% no-repeat padding-box`, */}
        <Box
          sx={{
            width: "348px",
            background: `transparent url(${Admin})  0% 0% no-repeat padding-box`,
          }}
        />
        <Box
          sx={{
            p: 5,
            width: "380px",
            height: "100%",
            zIndex: "5",
            background: "#303030",
            borderRadius: "0 5px 5px 0 !important",
          }}
        >
          <Typography variant="h5">Administrator</Typography>

          <FormControl fullWidth sx={{ mt: 2 }}>
            <StyledSelect
              value={works}
              onChange={handleChange}
              size="small"
              displayEmpty
            >
              <MenuItem value={""} disabled>
                <Typography color={"GrayText"}>Select Work Center</Typography>
              </MenuItem>
              {/* Example Work Centers */}
              <MenuItem value={10}>Fabs</MenuItem>
              <MenuItem value={20}>Welding</MenuItem>
              <MenuItem value={30}>Paint</MenuItem>
              <MenuItem value={40}>Assembly</MenuItem>
            </StyledSelect>
          </FormControl>
          <FormControl fullWidth sx={{ mt: 3 }}>
            <Button
              color="inherit"
              sx={{
                background: "#FFFFFF",
                color: "black",
                justifyContent: "left",
                "&.MuiButtonBase-root:hover": {
                  background: "white",
                },
              }}
            >
              <Link to="/workorders" style={{ textDecoration: "none" }}>
                <Typography variant="body1" sx={{ textTransform: "initial" }}>
                  Create / Edit Work Orders
                </Typography>
              </Link>
            </Button>
          </FormControl>
          <FormControl fullWidth sx={{ mt: 3 }}>
            <Button
              color="inherit"
              sx={{
                background: "#FFFFFF",
                color: "black",
                "&.MuiButtonBase-root:hover": {
                  background: "white",
                },
              }}
            >
              {" "}
              <Link to="/woassociate" style={{ textDecoration: "none" }}>
                <Typography variant="body1" sx={{ textTransform: "initial" }}>
                  Associate an RFID to a Work Order
                </Typography>
              </Link>
            </Button>
          </FormControl>
          <FormControl fullWidth sx={{ mt: 3 }}>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <StyledButton
                variant="contained"
                size="small"
                color="inherit"
                sx={{ color: "black" }}
              >
                {" "}
                <Link to="/" style={{ textDecoration: "none" }}>
                  Cancel
                </Link>
              </StyledButton>
              <StyledButton
                variant="contained"
                size="small"
                color="primary"
                sx={{ color: "white", bgcolor: "#02A3FF" }}
              >
                Save
              </StyledButton>
            </Box>
          </FormControl>
        </Box>
      </AdminBox>
    </MainBox>
  );
}

export default AdminPage;
