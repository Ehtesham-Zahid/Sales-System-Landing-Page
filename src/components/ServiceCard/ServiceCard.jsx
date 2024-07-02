/* eslint-disable react/prop-types */
import clsx from "clsx";

import { Button } from "@/shadcn-components/ui/button";

import HelpIcon from "@mui/icons-material/Help";
import TimelineIcon from "@mui/icons-material/Timeline";
import BarChartIcon from "@mui/icons-material/BarChart";
import FlashOffIcon from "@mui/icons-material/FlashOff";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import GraphicEqIcon from "@mui/icons-material/GraphicEq";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-scroll";

const ServiceCard = (props) => {
  const { bgColor, title, description, icon } = props;

  let selectedIcon;

  switch (icon) {
    case "HelpIcon":
      selectedIcon = <HelpIcon fontSize="large" />;
      break;
    case "TimelineIcon":
      selectedIcon = <TimelineIcon fontSize="large" />;
      break;
    case "BarChartIcon":
      selectedIcon = <BarChartIcon fontSize="large" />;
      break;
    case "FlashOffIcon":
      selectedIcon = <FlashOffIcon fontSize="large" />;
      break;
    case "ThumbUpIcon":
      selectedIcon = <ThumbUpIcon fontSize="large" />;
      break;
    case "ChatBubbleIcon":
      selectedIcon = <ChatBubbleIcon fontSize="large" />;
      break;
    case "GraphicEqIcon":
      selectedIcon = <GraphicEqIcon fontSize="large" />;
      break;
    case "SupportAgentIcon":
      selectedIcon = <SupportAgentIcon fontSize="large" />;
      break;
    default:
      selectedIcon = <HelpIcon fontSize="large" />;
      break;
  }

  const bgColorClass = clsx({
    "bg-red-300": bgColor === "red",
    "bg-purple-300": bgColor === "purple",
    "bg-emerald-300": bgColor === "emerald",
    "bg-amber-300": bgColor === "amber",
  });

  return (
    <Fade direction="up">
      <div
        className={`relative w-72 h-[315px] mx-2 rounded-md ${bgColorClass} px-4 py-8 hover:cursor-pointer transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-500`}
      >
        <div className="mb-5">{selectedIcon}</div>
        <p className="mb-5 font-black text-2xl tracking-wide">{title}</p>
        <p className="mb-5 tracking-wide text-lg">{description}</p>
        <div className="absolute bottom-6 left-3">
          <Button className="rounded-full p-6 font-medium text-lg">
            <Link to="get-started" spy={true} smooth={true}>
              Start Today
            </Link>
          </Button>
        </div>
      </div>
    </Fade>
  );
};

export default ServiceCard;
