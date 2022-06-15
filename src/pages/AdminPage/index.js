import React from "react";
import { styled } from "@mui/material/styles";
import { Box, Container, Typography, TextField, Button } from "@mui/material";
import Header from "../../components/Header";
import { AddBox } from "@mui/icons-material";
import RFIDPicture from "../../assets/images/rfidpicture.jpg";
import Header2 from "../../components/Header2";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";

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

function Admin() {
  return (
    <MainBox>
      <Header2 />
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
          <Typography variant="h5">Administrator</Typography>

          <Button>Select Work Center</Button>

          <Button variant="contained">Create / Edit Work Orders </Button>
          <Button variant="contained">
            Associate an RFID to a Work Order{" "}
          </Button>

          <Button variant="contained">Save</Button>
          <Button variant="contained">Cancel</Button>
        </Box>
      </LoginContainer>
    </MainBox>
  );
}

export default Admin;
