import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import LoginPage from "./pages/loginPage.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import BookPage from "./pages/bookPage.jsx";
import Register from "./pages/registerPage.jsx";
import User from "./pages/userPage.jsx";
import HomePage from "./pages/homePage.jsx";
import ErrorPage from "./pages/errorPage.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/user",
        element: <User />,
      },
      {
        path: "/bookPage",
        element: <BookPage />,
      },
    ],
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

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <RouterProvider router={router} />
  //{" "}
  // </React.StrictMode>
);
