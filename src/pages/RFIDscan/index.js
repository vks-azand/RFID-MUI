import React from "react";
import { styled } from "@mui/material/styles";
import { Box, Container, Typography, TextField, Button } from "@mui/material";
import Header from "../../components/Header";
import { AddBox } from "@mui/icons-material";
import RFIDPicture from "../../assets/images/rfidpicture.png";
import options from "../AdminPage";

const MainBox = styled(Box)`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const RFIDscanBox = styled(Box)`
  width: 728px;
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

function RFIDscan() {
  return (
    <MainBox>
      <Header />
      <RFIDscanBox sx={{ display: "flex" }}>
        {/* // background: `transparent url(${RFIDPicture})  0% 0% no-repeat padding-box`, */}
        <Box
          sx={{
            width: "348px",
            background: `transparent url(${RFIDPicture})  0% 0% no-repeat padding-box`,
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
          <Typography variant="h5">Scan Your RFID</Typography>
          <Typography variant="inherit" sx={{ mt: 5, mb: 1 }}>
            Work Center
          </Typography>
          <Button variant="outlined" sx={{ width: "100%" }} color="inherit">
            Fabs
          </Button>
          <Typography fontSize={"13px"} sx={{ mt: 1 }}>
            To select a different Work Center you must first login as
            administrator.
          </Typography>
          <Typography variant="inherit" sx={{ mt: 3, mb: 1 }}>
            Scan your RFID
          </Typography>
          <RFIDscanButton variant="contained" color="inherit">
            <Typography fontSize={"20px"} color="GrayText">
              ***********************
            </Typography>
          </RFIDscanButton>
        </Box>
      </RFIDscanBox>
    </MainBox>
  );
}

export default RFIDscan;
