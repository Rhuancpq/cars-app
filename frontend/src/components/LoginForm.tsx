import React from 'react'
import { Button, Paper, TextField } from "@mui/material";
import "./LoginForm.css";

function LoginForm() {
  return (
    <Paper elevation={3} className="base">
      <h1>Acesso Admin</h1>
      <TextField label="Username" variant="outlined" sx={{marginTop: "16px"}} />
      <TextField label="Password" variant="outlined"
      sx={{marginTop: "16px"}} type="password" />

      <Button variant="contained" sx={{marginTop: "32px"}}>Login</Button>
    </Paper>
  )
}

export default LoginForm