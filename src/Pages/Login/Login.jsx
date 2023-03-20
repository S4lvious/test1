import { CssBaseline, Button } from "@mui/material";
import React from "react";
import { Paper } from "@mui/material";
import "./login.scss";
import logo from "../../assets/img/logo-header.png";

const Login = () => {
  return (
    <div className="login">
      <CssBaseline></CssBaseline>
      <Paper className="login-paper" elevation={3}>
        <img src={logo} alt="logo" width={50}></img>
        <h3>Babylonwacc-sbx 3.0</h3>
        <span style={{ fontWeight: "bold" }}>
          Environment: <span style={{ fontWeight: "normal" }}>Development</span>
        </span>
        <span style={{ fontWeight: "bold" }}>
          Version: <span style={{ fontWeight: "normal" }}>3.0.0</span>
        </span>
        <Button variant="contained" fullWidth className="login-button">
          Sign In
        </Button>
      </Paper>
    </div>
  );
};

export default Login;
