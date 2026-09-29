import AboutAbout from "@/components/About/AboutAbout";
import AboutChoose from "@/components/About/AboutChoose";
import AboutHistory from "@/components/About/AboutHistory";
import AboutService from "@/components/About/AboutService";
import AboutTeam from "@/components/About/AboutTeam";
import AboutUSP from "@/components/About/AboutUsp";
import AboutVision from "@/components/About/AboutVision";

export default function AboutPage() {
  return (
    <>
      <AboutAbout />
      <AboutHistory />
      {/* <AboutUSP /> */}
      <AboutVision />
      <AboutService />
      <AboutChoose />
      <AboutTeam />
    </>
  );
}
