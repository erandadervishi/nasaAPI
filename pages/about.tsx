"use client";
import Header from "../app/components/header";
import Footer from "../app/components/footer";
import AboutComponent from "../app/components/about";

export default function Home(): JSX.Element {
  return (
    <>
      <Header logoSrc="./nasa-logo.svg" isDashboard={false} />
      <AboutComponent />
      <Footer logoSrc="./nasa-logo.svg" />
    </>
  );
}
