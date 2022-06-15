import React from "react";
import { styled } from "@mui/material/styles";
import { Box, Container, Typography, TextField } from "@mui/material";
import Header from "../../components/Header";
import { AddBox } from "@mui/icons-material";
import RFIDPicture from "../../assets/images/rfidpicture.jpg";

const MainBox = styled(Box)`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoginContainer = styled(Box)`
  width: 728px;
  height: 378px;
  dispaly: flex;
  opacity: 1;
  position: relative;
`;

const Image = styled("img")``;

function Login() {
  return (
    <MainBox>
      <Header />
      <LoginContainer
        sx={{
          background: `transparent url(${RFIDPicture})  0% 0% no-repeat padding-box`,
        }}
      >
        {/* <Box
          sx={{
            width: "348px",
            height: "378px",
            background: "#ddd",
            zIndex: "-1",
          }}
        ></Box> */}
        <Box
          sx={{
            p: 5,
            width: "380px",
            height: "378px",
            zIndex: "5",
            background: "#303030",
            position: "absolute",
            right: 0,
          }}
        >
          <Typography variant="h5">Scan Your RFID</Typography>
          <Typography variant="inherit" sx={{ mt: 5, mb: 1 }}>
            Work Center
          </Typography>
          <TextField label="Fabs" size="small" fullWidth />
          <Typography fontSize={"13px"} sx={{ mt: 1 }}>
            To select a differenet Work Center you must first login as
            administrator.
          </Typography>
          <Typography variant="inherit" sx={{ mt: 3, mb: 1 }}>
            Scan your RFID
          </Typography>
          <TextField label="Password" type="password" size="small" fullWidth />
        </Box>
      </LoginContainer>
    </MainBox>
  );
}

export default Login;