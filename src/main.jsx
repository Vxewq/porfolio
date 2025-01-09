import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { ThemeProvider } from "@material-tailwind/react";
import { ToastContainer } from "react-toastify";
import i18n from "./utils/i18n";
import { I18nextProvider } from "react-i18next";
// import Aos from "aos";
// Aos.init();

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />
    <I18nextProvider i18n={i18n}>  
    <App />
    </I18nextProvider>
  </ThemeProvider>
);
