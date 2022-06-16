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
import Header from "../../components/Header";
import { AddBox } from "@mui/icons-material";
import Admin from "../../assets/images/Admin.png";
import options from "../AdminPage";

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

const StyledButton = styled(Button)`
  &:hover {
    background-color: transparent;
  }
`;

function AdminPage() {
  const [works, setWorks] = useState("");
  const handleChange = e => {
    setWorks(e.target.value);
  };

  return (
    <MainBox>
      <Header />
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
            <Select
              id="demo-select-small"
              value={works}
              onChange={handleChange}
              placeholder="Select Work Center"
              color="info"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Fabs</MenuItem>
              <MenuItem value={20}>Welding</MenuItem>
              <MenuItem value={30}>Paint</MenuItem>
              <MenuItem value={40}>Assembly</MenuItem>
            </Select>
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
              <Typography variant="body1" sx={{ textTransform: "lowercase" }}>
                Create / Edit Work Order & Operations
              </Typography>
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
              <Typography variant="body1" sx={{ textTransform: "lowercase" }}>
                Associate an RFID to a Work Order
              </Typography>
            </Button>
          </FormControl>
        </Box>
      </AdminBox>
    </MainBox>
  );
}

export default AdminPage;
