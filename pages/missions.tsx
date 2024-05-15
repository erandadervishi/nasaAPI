"use client";
import Header from "../app/components/header";
import Footer from "../app/components/footer";
import Missions from "../app/components/missions";
import DecadesOfDiscovery from "../app/components/decades";

type MissionData = {
  title: string;
  description: string;
  imageUrl: string;
  readMoreUrl: string;
};

const missionsData: MissionData[] = [
  {
    title: "The Science of Earth",
    description:
      "NASA is developing the Earth System Observatory, the core of which is five satellite missions providing critical data on climate change, severe weather and other natural hazards, wildfires, and global food production.",
    imageUrl: "/earth.webp",
    readMoreUrl: "/read-more",
  },
  {
    title: "Space Technology in Development",
    description:
      "The Small Spacecraft Technology (SST) program expands the ability to execute unique missions through rapid development and demonstration of capabilities for small spacecraft applicable to exploration, science and the commercial space sector.",
    imageUrl: "/space-tech.png",
    readMoreUrl: "/read-more",
  },
  {
    title: "Humans on the International Space Station",
    description:
      "Every day since Nov. 2, 2000, people have been orbiting our planet inside the International Space Station, bringing together science, technology and human innovation to enable new technologies and research breakthroughs not possible on Earth.",
    imageUrl: "/human.jpg",
    readMoreUrl: "/read-more",
  },
];

export default function Home() {
  return (
    <>
      <Header logoSrc="./nasa-logo.svg" isDashboard={false} />
      <Missions missions={missionsData} />
      <DecadesOfDiscovery />
      <Footer logoSrc="./nasa-logo.svg" />
    </>
  );
}
