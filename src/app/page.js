import Topbar from "@/components/Topbar/Topbar";
import Menu from "@/components/Menu/Menu";
import Banner from "@/components/Banner/Banner";
import About from "@/components/About/About";
import ScrollingAnimation from "@/components/ScrollingAnimation";
import Words from "@/components/Words/Words";
import Achievements from "@/components/Achievements/Achievements";

export default function Home() {
  return (
    <>
      <ScrollingAnimation />
      <Topbar />
      <Menu />
      <Banner />
      <About />
      <Words />
      <Achievements />
    </>
  );
}
