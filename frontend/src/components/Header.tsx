import { Button, Typography } from "@mui/material";
import React, { useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";
import Cookies from "js-cookie";
import jwt_decode from "jwt-decode";
import { Box } from "@mui/system";

function Header() {
  const user = useMemo(() => {
    const user = Cookies.get("access_token");
    if (user) return String((jwt_decode(user) as any).user_id);
    return null;
  }, []);
  const navigate = useNavigate();

  const handleLogout = () => {
    Cookies.remove("access_token");
    Cookies.remove("refresh_token");
    navigate("/home");
  };

  return (
    <header className="app-header">
      <h1 className="app-title">CARS App</h1>
      <div className="login-button">
        {user ? (
          <Box sx={{ display: "inline-flex", alignItems: "center" }}>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              {`Olá, ${user}`}
            </Typography>
            <Button
              variant="contained"
              color="error"
              onClick={handleLogout}
              sx={{ marginLeft: "16px" }}
            >
              Sair
            </Button>
          </Box>
        ) : (
          <Button
            component={Link}
            to="/login"
            variant="contained"
            color="primary"
          >
            Entrar
          </Button>
        )}
      </div>
    </header>
  );
}

export default Header;
