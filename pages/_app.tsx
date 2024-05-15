import React, { useEffect } from "react";
import { AppProps } from "next/app";
import CssBaseline from "@mui/material/CssBaseline";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles && jssStyles.parentElement) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <>
      <CssBaseline />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
