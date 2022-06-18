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

const RFIDscanButton = styled(Button)`
  width: 100%;
  color: black;
  border-radius: 0 !important;
  height: 58px;
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

function WOAssociate() {
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
          <Typography fontSize={"13px"} color="GrayText">
            RFID Work Order Number Association
          </Typography>
          <Typography variant="inherit" sx={{ mt: 3, mb: 1 }}>
            Scan your RFID
          </Typography>
          <RFIDscanButton variant="contained" color="inherit">
            <Typography fontSize={"20px"} color="GrayText">
              ***********************
            </Typography>
          </RFIDscanButton>
          <FormControl fullWidth sx={{ mt: 2 }}>
            <StyledSelect
              value={works}
              onChange={handleChange}
              size="small"
              displayEmpty
            >
              <MenuItem value={""} disabled>
                <Typography color={"GrayText"}>
                  {" "}
                  Select Work Order number{" "}
                </Typography>
              </MenuItem>

              {/* Example Work order numbers: */}
              <MenuItem value={10}>12345</MenuItem>
              <MenuItem value={20}>23456</MenuItem>
              <MenuItem value={30}>34567</MenuItem>
              <MenuItem value={40}>45678</MenuItem>
            </StyledSelect>
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
                Cancel
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

export default WOAssociate;
