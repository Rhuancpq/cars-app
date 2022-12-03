import React from "react";
import Cookies from "js-cookie";
import { Navigate } from "react-router-dom";

// create type interface for the props
interface Props {
  children: React.ReactNode;
}

function ProtectedRoute({ children }: Props) {
  const user = Cookies.get("access_token");

  if (!user) {
    return <Navigate to="/login" />;
  }

  return <>{children}</>;
}

export default ProtectedRoute;
