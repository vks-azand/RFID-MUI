import React from "react";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
import Header from "../../components/Header";

const LoginContainer = styled(Box)`
  width: 380px;
  jeogjt: 378px;
  background: #3c3c3c 0% 0% no-repeat padding-box;
  border-radius: 0px 5px 5px 0px;
  opacity: 1;
`;

function Login() {
  return (
    <>
      <Header />
      <Box sx={{ width: "100vw" }}>
        <LoginContainer></LoginContainer>
      </Box>
    </>
  );
}

export default Login;
