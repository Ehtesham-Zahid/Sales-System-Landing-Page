import { Button } from "@/shadcn-components/ui/button";
import HowItWorksCard from "../HowItWorksCard/HowItWorksCard";
import { Fade } from "react-awesome-reveal";

const HowItWorksSection = () => {
  return (
    <div
      className="w-screen   flex justify-center mb-8 lg:mb-28"
      name="how-it-works"
    >
      <div className="w-full sm:w-5/6 2xl:w-3/4   px-8 sm:px-0">
        <Fade>
          <p className="font-black text-4xl mb-8 lg:mb-12 min-[500px]:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
            How it works!
          </p>
        </Fade>
        <p className="tracking-wide   text-lg md:text-xl   font-[525] text-gray-600 lg:w-2/3 2xl:w-1/2  mb-8 lg:mb-12">
          Forget the long onboarding processes of traditional agencies. Just
          schedule a demo call, and we'll guide you through our straightforward
          process.
        </p>
        <div className="mb-8 lg:mb-12">
          <Button className="rounded-full text-lg py-6   bg-purple-500 hover:bg-purple-600">
            Start working with us today
          </Button>
        </div>
        <div className="flex justify-around lg:justify-between 2xl:justify-around flex-wrap gap-8 items-center  ">
          <HowItWorksCard
            bgColor="amber"
            number="1"
            title="Demo Call"
            description="Schedule a demo call to see if our services are a good fit for your business. We'll walk you through our pricing model and learn more about your current setup."
          />
          <HowItWorksCard
            bgColor="red"
            number="2"
            title="Onboarding"
            description="Once we confirm we can assist you and you agree to proceed, you'll be onboarded into our Slack channel to meet the team. This is where we'll provide ongoing updates."
          />
          <HowItWorksCard
            bgColor="emerald"
            number="3"
            title="Build timeline"
            description="Following our discovery call, we'll create a build timeline tailored to your current setup and our systems, ensuring seamless integration into your business."
          />
          <HowItWorksCard
            bgColor="purple"
            number="4"
            title="Build & integration"
            description="After approval, our team will begin working, providing updates at every step and collaborating with you in our Slack channel."
          />
        </div>
      </div>
    </div>
  );
};

export default HowItWorksSection;
