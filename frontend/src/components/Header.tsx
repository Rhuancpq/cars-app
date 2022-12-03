import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header className="app-header">
      <h1 className="app-title">CARS App</h1>
      <div className="login-button">
        <Button
          component={Link}
          to="/login"
          variant="contained"
          color="primary"
        >
          Login
        </Button>
      </div>
    </header>
  );
}

export default Header;
