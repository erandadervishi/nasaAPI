"use client";
import Apollo11Videos from "./components/apolloVideos";
import Header from "./components/header";
import Footer from "./components/footer";
import Banner from "./components/banner";

const isDashboard = true;

export default function Home() {
  return (
    <>
      <Header logoSrc="./nasa-logo.svg" isDashboard={isDashboard} />
      <Banner />
      <Apollo11Videos />
      <Footer logoSrc="./nasa-logo.svg" />
    </>
  );
}
