import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Contact from "./Components/Contact/Contact.jsx";
import Home from "./Pages/Home.jsx";
import Allprojects from "./Components/Allprojects/Allprojects.jsx";
import Contactform from "./Components/ContactForm/Contactform.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
       element: <Home />
      },
      {
        path: "allprojects",
        element: <Allprojects />
      },
      {
        path: "contact-form",
        element: <Contactform />
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </React.StrictMode>
);
