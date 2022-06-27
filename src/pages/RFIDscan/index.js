import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import { Box, Container, Typography, TextField, Button } from "@mui/material";
import Header from "../../components/Header";
import { AddBox } from "@mui/icons-material";
import RFIDPicture from "../../assets/images/rfidpicture.png";
import CantStart from "./CantStartWarning";
import NotFound from "./NotFoundWarning";

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
  const [popOpen, setPopOpen] = useState(false);

  const handlePopOpen = () => {
    setPopOpen(true);
  };
  const handlePopClose = () => {
    setPopOpen(false);
  };

  const [pop2Open, setPop2Open] = useState(false);

  const handlePop2Open = () => {
    setPop2Open(true);
  };
  const handlePop2Close = () => {
    setPop2Open(false);
  };

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
          <NotFound open={pop2Open} onClose={handlePop2Close} />
          <Button
            variant="outlined"
            sx={{ width: "100%" }}
            color="inherit"
            onClick={handlePop2Open}
          >
            Fabs
          </Button>
          <Typography fontSize={"13px"} sx={{ mt: 1 }}>
            To select a different Work Center you must first login as
            administrator.
          </Typography>
          <Typography variant="inherit" sx={{ mt: 3, mb: 1 }}>
            Scan your RFID
          </Typography>
          <RFIDscanButton
            variant="contained"
            color="inherit"
            onClick={handlePopOpen}
          >
            <Typography fontSize={"20px"} color="GrayText">
              ***********************
            </Typography>
          </RFIDscanButton>
          <CantStart open={popOpen} onClose={handlePopClose} />
        </Box>
      </RFIDscanBox>
    </MainBox>
  );
}

export default RFIDscan;
