"use client";
import React, { useEffect } from "react";
import Apollo11Videos from "./components/apolloVideos";
import Header from "./components/header";
import Footer from "./components/footer";
import Banner from "./components/banner";
import { Provider } from "react-redux";
import { store } from "../app/store";
import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "../app/theme";

export default function Home() {
  useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles && jssStyles.parentElement) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header logoSrc="./nasa-logo.svg" isDashboard />
        <Banner />
        <Apollo11Videos />
        <Footer logoSrc="./nasa-logo.svg" />
      </ThemeProvider>
    </Provider>
  );
}
