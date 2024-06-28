import BusinessCompatibiltySection from "../BusinessCompatibilitySection/BusinessCompatibiltySection";
import FaqsSection from "../FaqsSection/FaqsSection";
import HomeSection from "../HomeSection/HomeSection";
import HowItWorksSection from "../HowItWorksSection/HowItWorksSection";
import ServicesSection from "../ServicesSection/ServicesSection";
import StorySection from "../StorySection/StorySection";

const MainPageSection = () => {
  return (
    <div>
      <HomeSection />
      <ServicesSection />
      <StorySection />
      <HowItWorksSection />
      <BusinessCompatibiltySection />
      <FaqsSection />
    </div>
  );
};

export default MainPageSection;
