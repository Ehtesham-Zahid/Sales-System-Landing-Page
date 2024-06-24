import Navbar from "../Navbar/Navbar";

import { Button } from "@/shadcn-components/ui/button";

import CallIcon from "@mui/icons-material/Call";

import ProfileImage1 from "../../assets/Images/profile-1.png";
import ProfileImage2 from "../../assets/Images/profile-2.png";

import "./HomeSection.css";

const HomeSection = () => {
  return (
    <div className="w-screen bg-image flex justify-center h-screen">
      <div className="lg:w-5/6 2xl:w-2/3 ">
        <Navbar />
        <div className="flex flex-col justify-start mt-28 lg:w-3/4 xl:w-2/3 ">
          <p className="lg:text-[5rem] xl:text-[6rem] 2xl:text-[7rem]  leading-none font-black      ">
            Enhance your business with AI & automation.
          </p>

          <div className=" mt-10 flex items-center  ">
            <div className="relative flex  ">
              <img src={ProfileImage1} className="w-40 rounded-full " />
              <img
                src={ProfileImage2}
                className="w-40 rounded-full absolute  left-14"
              />
            </div>
            <p className="font-medium text-lg tracking-wide ms-20  ">
              Our tailored AI solutions, featuring custom AI chatbots, CRM
              automations, and workflows, are crafted to optimize efficiency,
              lower costs, and boost customer engagement.
            </p>
          </div>
          <div className="mt-10">
            <Button className="rounded-full text-lg px-10 py-8 font-semibold">
              Book a free demo{" "}
              <CallIcon
                fontSize="large"
                className="ms-10 bg-white text-black rounded-full p-1  "
              />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSection;
