import React, { Component } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import LoginPage from './pages/loginPage.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Product from './pages/productPage.jsx';
import Register from './pages/registerPage.jsx';
import User from './pages/userPage.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/user",
        element: <User />,
      },
      {
        path: "/product",
        element: <Product />,
      },
    ]
  },
  {
    path: "/login",
    element: <LoginPage />,
  },

  {
    path: "/register",
    element: <Register />,
  },

]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
