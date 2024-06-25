import ServiceCard from "../ServiceCard/ServiceCard";

const ServicesSection = () => {
  return (
    <div className="w-screen bg-black flex justify-center min-h-screen">
      <div className="w-full sm:w-5/6 2xl:w-3/4">
        <div className="flex flex-col items-center justify-center mt-10">
          <p className="text-[2.5rem] min-[500px]:text-5xl min-[500px]:leading-tight leading-tight md:text-6xl xl:text-7xl text-center text-white font-bold w-4/5 lg:w-2/3 2xl:w-3/5  my-10">
            End-to-End AI-Powered Sales Systems
          </p>
          <p className="text-white min-[500px]:text-lg  w-5/6 lg:w-3/4 text-center font-medium tracking-wide">
            Avoid the hassle and expense of expanding your team by leveraging AI
            efficiency. We replace traditional systems and costly agencies with
            a one-time setup fee and simple monthly management.
          </p>
          <p className="text-white min-[500px]:text-lg w-3/4 lg:w-2/3 text-center font-medium tracking-wide my-10">
            The ideal solution for startups and businesses aiming to scale
            without incurring significant costs.
          </p>
        </div>
        <div className="flex justify-around flex-wrap gap-y-16 items-center my-5">
          <ServiceCard
            bgColor="amber"
            title="Consulting"
            description="Receive timely answers from a team of experts who act as an extension of your own team."
            icon={"HelpIcon"}
          />
          <ServiceCard
            bgColor="purple"
            title="Sales Funnels"
            description="Custom campaign-specific funnels and landing pages tailored to your ideal client, designed to drive conversions."
            icon={"TimelineIcon"}
          />
          <ServiceCard
            bgColor="red"
            title="Tracking & Analytics"
            description="Monitor your clients' every move and leverage the data to launch cost-effective retargeting campaigns."
            icon={"BarChartIcon"}
          />
          <ServiceCard
            bgColor="emerald"
            title="Bespoke AI Solutions"
            description="Allow us to create custom solutions that save you time and increase your profits."
            icon={"FlashOffIcon"}
          />
          <ServiceCard
            bgColor="purple"
            title="CRM Build & Management"
            description="Enhance your close rate quickly with our tailored CRM setup that nurtures leads."
            icon={"ThumbUpIcon"}
          />
          <ServiceCard
            bgColor="red"
            title="Lead Management"
            description="Engage personally with every lead, anytime and any day of the week, ensuring no more unqualified leads."
            icon={"ChatBubbleIcon"}
          />
          <ServiceCard
            bgColor="emerald"
            title="AI Voice Agents"
            description="Automate your outbound and inbound calls with our custom AI voice agents, handling all the heavy lifting for you."
            icon={"GraphicEqIcon"}
          />
          <ServiceCard
            bgColor="amber"
            title="AI Chat Agents"
            description="Use our AI chat agents to capture lead data, onboard clients, and handle various tasks."
            icon={"SupportAgentIcon"}
          />
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
