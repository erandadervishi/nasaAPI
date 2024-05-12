"use client";
import Header from "../components/header";
import Footer from "../components/footer";
import AboutComponent from "../components/about";

export default function Home() {
  return (
    <>
      <Header logoSrc="./nasa-logo.svg" isDashboard={false} />
      <AboutComponent />
      <Footer logoSrc="./nasa-logo.svg" />
    </>
  );
}
