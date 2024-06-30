import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/shadcn-components/ui/accordion";
import { Fade } from "react-awesome-reveal";

const FaqsSection = () => {
  return (
    <div className="w-screen flex justify-center  mb-8 lg:mb-28 py-10 h-full">
      <div className="w-full sm:w-5/6 2xl:w-3/4 lg:grid lg:grid-cols-2 lg:gap-4 xl:gap-20   px-8 sm:px-0">
        <div className="lg:col-span-1 flex flex-col mt-7 ">
          <Fade>
            <p className="font-black text-4xl mb-8 min-[500px]:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
              Frequently asked questions
            </p>
          </Fade>
          <p className="tracking-wide   min-[500px]:text-lg  font-[525] text-gray-600   ">
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
                <AccordionTrigger className="font-bold text-start text-lg md:text-xl xl:text-2xl">
                  How exactly do you assist us?
                </AccordionTrigger>
                <AccordionContent className="tracking-wider md:text-base 2xl:text-lg">
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
                <AccordionTrigger className="font-bold text-start text-lg md:text-xl xl:text-2xl">
                  Which platforms do you utilize?
                </AccordionTrigger>
                <AccordionContent className="tracking-wider md:text-base 2xl:text-lg">
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
                <AccordionTrigger className="font-bold text-start text-lg md:text-xl xl:text-2xl">
                  How will you determine what to develop for our needs?
                </AccordionTrigger>
                <AccordionContent className="tracking-wider md:text-base 2xl:text-lg">
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
                <AccordionTrigger className="font-bold text-start text-lg md:text-xl xl:text-2xl">
                  How soon can we expect to see results?
                </AccordionTrigger>
                <AccordionContent className="tracking-wider md:text-base 2xl:text-lg">
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
                <AccordionTrigger className="font-bold text-start text-lg md:text-xl xl:text-2xl">
                  With whom will I collaborate?
                </AccordionTrigger>
                <AccordionContent className="tracking-wider md:text-base 2xl:text-lg">
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
