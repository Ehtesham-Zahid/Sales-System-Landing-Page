import BusinessCompatibiltySection from "../BusinessCompatibilitySection/BusinessCompatibiltySection";
import FaqsSection from "../FaqsSection/FaqsSection";
import Footer from "../Footer/Footer";
import HomeSection from "../HomeSection/HomeSection";
import HowItWorksSection from "../HowItWorksSection/HowItWorksSection";
import PriceSection from "../PriceSection/PriceSection";
import ProjectsSection from "../ProjectsSection/ProjectsSection";
import ServicesSection from "../ServicesSection/ServicesSection";
import StorySection from "../StorySection/StorySection";

const MainPageSection = () => {
  return (
    <div>
      <HomeSection />
      <ServicesSection />
      <StorySection />
      <HowItWorksSection />
      <PriceSection />
      <BusinessCompatibiltySection />
      <FaqsSection />
      <ProjectsSection />
      <Footer />
    </div>
  );
};

export default MainPageSection;
