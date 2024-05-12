// pages/_app.tsx
import React from "react";
import { AppProps } from "next/app"; // Importing type definition for AppProps
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
// import theme from "../pages/theme"; // Adjust the path according to where you place the theme.ts

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles && jssStyles.parentElement) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <>
      <CssBaseline /> {/* CssBaseline helps normalize CSS across browsers */}
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
