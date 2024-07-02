import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/shadcn-components/ui/accordion";
import { Fade } from "react-awesome-reveal";

const FaqsSection = () => {
  return (
    <div className="w-screen flex justify-center  mb-8 lg:mb-20 py-10 h-full">
      <div className="w-full sm:w-5/6 2xl:w-3/4 lg:grid lg:grid-cols-2 lg:gap-4 xl:gap-20   px-8 sm:px-0">
        <div className="lg:col-span-1 flex flex-col mt-7 ">
          <Fade>
            <p className="font-black text-5xl mb-8 min-[500px]:text-6xl md:text-7xl lg:text-6xl xl:text-7xl">
              Frequently asked questions
            </p>
          </Fade>
          <p className="tracking-wide text-lg  min-[500px]:text-xl  font-[525] text-gray-600   ">
            We understand that when you're considering our services, you may
            have specific questions and concerns that need addressing. To assist
            you, we've carefully curated a comprehensive collection of
            frequently asked questions.
          </p>
        </div>
        <div className="lg:col-span-1 mt-5 lg:mt-0">
          <Accordion type="single" collapsible>
            <Fade direction="up">
              <AccordionItem
                value="item-1"
                className="border-b border-black py-3"
              >
                <AccordionTrigger className="font-bold text-start text-xl md:text-2xl xl:text-3xl">
                  How exactly do you assist us?
                </AccordionTrigger>
                <AccordionContent className="tracking-wider text-base md:text-lg 2xl:text-xl ">
                  We help our clients by stepping into their business consulting
                  on their current lead generation and management system and
                  advising and building a better system backed by experience and
                  data. Our goal is to save you time, increase conversion rate
                  and pre qualify your leads as
                </AccordionContent>
              </AccordionItem>
            </Fade>
            <Fade direction="up">
              <AccordionItem
                value="item-2"
                className="border-b border-black py-3"
              >
                <AccordionTrigger className="font-bold text-start text-xl md:text-2xl xl:text-3xl">
                  Which platforms do you utilize?
                </AccordionTrigger>
                <AccordionContent className="tracking-wider text-base md:text-lg 2xl:text-xl ">
                  We help our clients by stepping into their business consulting
                  on their current lead generation and management system and
                  advising and building a better system backed by experience and
                  data. Our goal is to save you time, increase conversion rate
                  and pre qualify your leads as
                </AccordionContent>
              </AccordionItem>
            </Fade>
            <Fade direction="up">
              <AccordionItem
                value="item-3"
                className="border-b border-black py-3"
              >
                <AccordionTrigger className="font-bold text-start text-xl md:text-2xl xl:text-3xl">
                  How will you determine what to develop for our needs?
                </AccordionTrigger>
                <AccordionContent className="tracking-wider text-base md:text-lg 2xl:text-xl ">
                  We help our clients by stepping into their business consulting
                  on their current lead generation and management system and
                  advising and building a better system backed by experience and
                  data. Our goal is to save you time, increase conversion rate
                  and pre qualify your leads as
                </AccordionContent>
              </AccordionItem>
            </Fade>
            <Fade direction="up">
              <AccordionItem
                value="item-4"
                className="border-b border-black py-3"
              >
                <AccordionTrigger className="font-bold text-start text-xl md:text-2xl xl:text-3xl">
                  How soon can we expect to see results?
                </AccordionTrigger>
                <AccordionContent className="tracking-wider text-base md:text-lg 2xl:text-xl ">
                  We help our clients by stepping into their business consulting
                  on their current lead generation and management system and
                  advising and building a better system backed by experience and
                  data. Our goal is to save you time, increase conversion rate
                  and pre qualify your leads as
                </AccordionContent>
              </AccordionItem>
            </Fade>
            <Fade direction="up">
              <AccordionItem
                value="item-5"
                className="border-b border-black py-3"
              >
                <AccordionTrigger className="font-bold text-start text-xl md:text-2xl xl:text-3xl">
                  With whom will I collaborate?
                </AccordionTrigger>
                <AccordionContent className="tracking-wider text-base md:text-lg 2xl:text-xl ">
                  We help our clients by stepping into their business consulting
                  on their current lead generation and management system and
                  advising and building a better system backed by experience and
                  data. Our goal is to save you time, increase conversion rate
                  and pre qualify your leads as
                </AccordionContent>
              </AccordionItem>
            </Fade>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default FaqsSection;
