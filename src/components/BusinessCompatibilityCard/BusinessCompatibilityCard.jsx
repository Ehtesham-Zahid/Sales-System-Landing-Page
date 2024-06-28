import clsx from "clsx";

import HelpIcon from "@mui/icons-material/Help";
import BarChartIcon from "@mui/icons-material/BarChart";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import { Fade } from "react-awesome-reveal";

const BusinessCompatibilityCard = (props) => {
  const bgColorClass = clsx({
    "bg-red-300": props.bgColor === "red",
    "bg-purple-300": props.bgColor === "purple",
    "bg-emerald-300": props.bgColor === "emerald",
    "bg-amber-300": props.bgColor === "amber",
  });
  let selectedIcon;

  switch (props.icon) {
    case "HelpIcon":
      selectedIcon = <HelpIcon fontSize="large" />;
      break;
    case "TrendingDownIcon":
      selectedIcon = <TrendingDownIcon fontSize="large" />;
      break;
    case "BarChartIcon":
      selectedIcon = <BarChartIcon fontSize="large" />;
      break;

    default:
      selectedIcon = <HelpIcon fontSize="large" />;
      break;
  }
  return (
    <Fade direction="up">
      <div
        className={`flex flex-col sm:flex-row w-full p-6 py-8  sm:px-8 sm:py-10 ${bgColorClass} rounded-md my-10`}
      >
        <div className="mb-5 sm:me-5">{selectedIcon}</div>
        <div className="flex flex-col">
          <p className="mb-5 font-black text-2xl  tracking-wide">
            {props.title}
          </p>
          <p className=" tracking-wide sm:text-lg">{props.desc}</p>
        </div>
      </div>
    </Fade>
  );
};

export default BusinessCompatibilityCard;
