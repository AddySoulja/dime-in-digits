import React from "react";
import "./App.css";
import Dashboard from "./components/pages/Dashboard";
import Explore from "./components/pages/Explore";
import Wallet from "./components/pages/Wallet";
import DisplayItem from "./components/product/DisplayItem";
import Sellers from "./components/pages/Sellers";
import Create from "./components/pages/Create";
import Profile from "./components/pages/Profile";
import Register from "./components/pages/Register";
import Login from "./components/pages/Login";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/",
      element: <Dashboard />,
    },
    {
      path: "/explore",
      element: <Explore />,
    },
    {
      path: "/wallet",
      element: <Wallet />,
    },
    {
      path: "/sellers",
      element: <Sellers />,
    },
    {
      path: "/create",
      element: <Create />,
    },
    {
      path: "/explore/:id",
      element: <DisplayItem />,
    },
    {
      path: "/profile",
      element: <Profile />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
