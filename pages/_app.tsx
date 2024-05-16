import React, { useEffect } from "react";
import { AppProps } from "next/app";
import CssBaseline from "@mui/material/CssBaseline";
import { Provider } from "react-redux";
import store from "../app/store";
import Header from "../app/components/header";
import Footer from "../app/components/footer";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles && jssStyles.parentElement) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <Provider store={store}>
      <CssBaseline />
      <Component {...pageProps} />
    </Provider>
  );
};

export default MyApp;
