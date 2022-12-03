import React from "react";
import { createBrowserRouter } from "react-router-dom";

import Home from "./routes/Home";
import Login from "./routes/Login";
import Admin from "./routes/Admin";
import ProtectedRoute from "./routes/ProtectedRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/admin",
    element: (
      <ProtectedRoute>
        <Admin />
      </ProtectedRoute>
    ),
  },
]);

export default router;
