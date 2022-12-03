import React from "react";
import { createBrowserRouter } from "react-router-dom";

import Home from "./routes/Home";
import Login from "./routes/Login";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    }, 
    {
      path: "/login",
      element: <Login />
    }
  ]
);

export default router;