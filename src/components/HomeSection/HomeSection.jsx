import { Fade } from "react-awesome-reveal";
import Navbar from "../Navbar/Navbar";

import { Button } from "@/shadcn-components/ui/button";

import CallIcon from "@mui/icons-material/Call";

import ProfileImage1 from "../../assets/Images/profile-1.png";
import ProfileImage2 from "../../assets/Images/profile-2.png";

import "./HomeSection.css";
import Header from "../Header/Header";

const HomeSection = () => {
  return (
    <div className=" bg-image flex justify-center min-h-screen">
      <div className="w-11/12 sm:w-5/6 2xl:w-3/4   ">
        {/* <Navbar /> */}
        <Header />
        <div className="flex flex-col justify-start mt-32 sm:w-4/5 md:w-3/4 xl:w-2/3 ">
          <Fade>
            <p className="home-text text-[3.75rem]  min-[500px]:text-[4.25rem] sm:text-[4.8rem]  md:text-[5rem] min-[850px]:text-[5.5rem] xl:text-[6.5rem] 2xl:text-[7rem]   leading-none font-black      ">
              Enhance your business with AI & automation.
            </p>
          </Fade>

          <div className="mt-14 lg:mt-20 flex flex-col md:flex-row items-center   ">
            <div className="flex items-center justify-start w-full md:w-fit mb-10 md:mb-0">
              <img src={ProfileImage1} className="w-20 rounded-full " />
              <img
                src={ProfileImage2}
                className="w-20 rounded-full relative -left-5"
              />
            </div>

            <p className="font-medium text-lg lg:text-xl  tracking-wide ms-2 w-full md:w-2/3">
              Our tailored AI solutions, featuring custom AI chatbots, CRM
              automations, and workflows, are crafted to optimize efficiency,
              lower costs, and boost customer engagement.
            </p>
          </div>
          <div className="my-14 lg:my-20">
            <Button className="rounded-full text-xl px-10 py-8 font-semibold">
              <a
                href="https://tally.so/r/w52XQo"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book a free demo{" "}
                <CallIcon
                  fontSize="large"
                  className="ms-10 bg-white text-black rounded-full p-1  "
                />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSection;
