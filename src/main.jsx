import React, { Component } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter, createBrowserRouter, Route, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: "/",
    component: { App }
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <React.StrictMode>
      <RouterProvider router={router}
    </React.StrictMode>,
  </BrowserRouter >
)
