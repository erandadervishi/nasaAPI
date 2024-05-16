"use client";
import Apollo11Videos from "./components/apolloVideos";
import Header from "./components/header";
import Footer from "./components/footer";
import Banner from "./components/banner";
import { Provider } from "react-redux";
import store from "./store";

export default function Home() {
  return (
    <Provider store={store}>
      <Header logoSrc="./nasa-logo.svg" isDashboard />
      <Banner />
      <Apollo11Videos />
      <Footer logoSrc="./nasa-logo.svg" />
    </Provider>
  );
}
