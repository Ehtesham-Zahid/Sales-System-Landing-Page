import FaqsSection from "../FaqsSection/FaqsSection";
import HomeSection from "../HomeSection/HomeSection";
import ServicesSection from "../ServicesSection/ServicesSection";
import StorySection from "../StorySection/StorySection";

const MainPageSection = () => {
  return (
    <div>
      <HomeSection />
      <ServicesSection />
      <StorySection />
      <FaqsSection />
    </div>
  );
};

export default MainPageSection;
