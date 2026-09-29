import CompanyUSP from "@/components/Companies/CompannyUsp";
import CompanyAssetsBanner from "@/components/Companies/CompanyAssetsBanner";
import CompanyHero from "@/components/Companies/CompanyHero";
import CompanyPortfolioShowcase from "@/components/Companies/CompanyPortfolioShowcase";
import CompanyPractices from "@/components/Companies/CompanyPractices";
import SisterConcerns from "@/components/Companies/SisterConcerns";


export default function Companies() {
  return (
    <>
      <CompanyHero />
      <CompanyUSP />
      <CompanyAssetsBanner />
      <SisterConcerns />
      <CompanyPractices />
      <CompanyPortfolioShowcase />
    </>
  );
}
