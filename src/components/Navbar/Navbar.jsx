import { Button } from "@/shadcn-components/ui/button";

import Logo from "../../assets/Logo/logo.png";

import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center py-8 px-6">
      <img src={Logo} className="w-44" />

      <ul className="flex text-lg font-medium   text-black">
        <li className="mx-5 cool-link cursor-pointer ">
          <a>How it works</a>
        </li>
        <li className="mx-5 cool-link cursor-pointer ">
          <a>Services</a>
        </li>{" "}
        <li className="mx-5 cool-link cursor-pointer ">
          <a>Get Started</a>
        </li>
      </ul>

      <Button className="transition ease-in-out     hover:-translate-y-1 hover:scale-110  duration-300 bg-transparent hover:bg-white rounded-full text-black font-semibold border border-black  text-lg p-5">
        Start today
      </Button>
    </div>
  );
};

export default Navbar;
