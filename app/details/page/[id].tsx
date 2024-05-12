// pages/home.tsx
"use client";
import Header from "../../components/header";
import Footer from "../../components/footer";
import VideoDetail from "../../components/videoDetail";

const mockVideo = {
  title: "Apollo 11 Mission",
  description: "This is a detailed description of the Apollo 11 mission.",
  imageUrl: "star1.jpg",
  nasaId: "apollo11",
};

export default function Home() {
  return (
    <>
      <Header logoSrc="./nasa-logo.svg" isDashboard={false} />
      <VideoDetail video={mockVideo} />
      <Footer logoSrc="./nasa-logo.svg" />
    </>
  );
}
