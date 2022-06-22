import React, { useState } from "react";
import Header2 from "../../components/Header2";
import { Link } from "react-router-dom";
import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { Close, Person, Visibility, VisibilityOff } from "@mui/icons-material";

const Container = styled(Box)`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoginPanel = styled(Box)`
  background: #fafafa 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 25px #00000029;
  opacity: 1;
  width: 314px;
  height: 345px;
  padding: 2rem;
  border-radius: 5px;
  position: relative;
`;

const CustomInput = styled(TextField)({
  "& .MuiOutlinedInput-input": {
    color: "black",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#00000029",
    },
    "&:hover fieldset": {
      borderColor: "#00000029",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#00000029",
    },
  },
});

const ForgotPass = styled(Typography)`
  color: var(--unnamed-color-02a3ff);
  text-align: center;
  letter-spacing: 0px;
  color: #02a3ff;
  opacity: 1;
  margin-top: 2rem;
`;

const StyledButton = styled(Button)`
  &:hover {
    background-color: #02a3ff;
  }
  color: #fff;
  text-transform: none;
  background: var(--unnamed-color-02a3ff) 0% 0% no-repeat padding-box;
  background: #02a3ff 0% 0% no-repeat padding-box;
  border-radius: 5px;
  width: 100%;
  margin-top: 2rem;
`;

function Login() {
  const [values, setValues] = useState({
    userName: "",
    password: "",
    showPassword: false,
  });

  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  return (
    <Container>
      <Header2 />

      <LoginPanel>
        <IconButton
          sx={{ color: "black", position: "absolute", right: 10, top: 10 }}
          aria-label="cancel"
          size="small"
        >
          <Link to="/" style={{ textDecoration: "none" }}>
            <Close sx={{ fontSize: "18px" }} />
          </Link>
        </IconButton>
        <Typography
          variant="body1"
          sx={{
            color: "#000",
          }}
        >
          Administrator Login
        </Typography>
        <CustomInput
          sx={{
            mt: 3,
          }}
          placeholder="Username"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Person sx={{ color: "black" }} />
              </InputAdornment>
            ),
          }}
          size="small"
        />
        <CustomInput
          size="small"
          type={values.showPassword ? "text" : "password"}
          value={values.password}
          onChange={handleChange("password")}
          sx={{ mt: 3 }}
          placeholder="Password"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                  sx={{ color: "gray" }}
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <Link to="" style={{ textDecoration: "none" }}>
          <ForgotPass variant="body1">Forgot your password</ForgotPass>
        </Link>
        <Link to="/adminpage" style={{ textDecoration: "none" }}>
          <StyledButton size="large" color="primary">
            Sign In
          </StyledButton>
        </Link>
      </LoginPanel>
    </Container>
  );
}
export default Login;
