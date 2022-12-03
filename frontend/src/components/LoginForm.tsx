import React, { useState } from "react";
import { Button, Paper, TextField } from "@mui/material";
import axios from "axios";
import "./LoginForm.css";
import Cookies from "js-cookie";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    try {
      const { data } = await axios.post("http://localhost:8000/app/token/", {
        nickname: username,
        password,
      });
      Cookies.set("access_token", data.access);
      Cookies.set("refresh_token", data.refresh);
      setUsername("");
      setPassword("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Paper elevation={3} className="base">
      <h1>Acesso Admin</h1>
      <TextField
        label="Username"
        variant="outlined"
        sx={{ marginTop: "16px" }}
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <TextField
        label="Password"
        variant="outlined"
        sx={{ marginTop: "16px" }}
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <Button
        variant="contained"
        sx={{ marginTop: "32px" }}
        onClick={handleSubmit}
      >
        Login
      </Button>
    </Paper>
  );
}

export default LoginForm;
