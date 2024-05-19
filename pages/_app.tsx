"use client";
import React, { useEffect } from "react";
import { AppProps } from "next/app";
import CssBaseline from "@mui/material/CssBaseline";
import { Provider } from "react-redux";
import Header from "../app/components/header";
import Footer from "../app/components/footer";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "../app/store";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles && jssStyles.parentElement) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Header logoSrc="../nasa-logo.svg" isDashboard={false} />
        <CssBaseline />
        <Component {...pageProps} />
        <Footer logoSrc="../nasa-logo.svg" />
      </PersistGate>
    </Provider>
  );
};

export default MyApp;
