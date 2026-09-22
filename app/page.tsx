import HomeAbout from "@/components/Home/HomeAbout";
import HomeAchievements from "@/components/Home/HomeAchievement";
import HomeBlog from "@/components/Home/HomeBlog";
import HomeFaq from "@/components/Home/HomeFaq";
import HomeHero from "@/components/Home/HomeHero";
import HomeReview from "@/components/Home/HomeReview";
import HomeServices from "@/components/Home/HomeService";
import HomeSocialWork from "@/components/Home/HomeSocialWork";
import HomeUSP  from "@/components/Home/HomeUsp";
import HomeWhyChoose from "@/components/Home/HomeWhyChoose";
import HomeCompany  from "@/components/Home/HomeCompany";
import ServicesSection from "@/components/Home/HomeService2";
export default function Home() {
  return (
    <div className="">
      <HomeHero/>
      <HomeUSP/>
      <HomeCompany/>
      <HomeAbout/>
      <ServicesSection/>
      {/* <HomeServices/> */}
      <HomeAchievements/>
      <HomeSocialWork/>
      <HomeWhyChoose/>
      <HomeReview/>
      <HomeBlog/>
      <HomeFaq/>
    </div>
  );
}
