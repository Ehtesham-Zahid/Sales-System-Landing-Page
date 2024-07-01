import { Link } from "react-scroll";

import { Button } from "@/shadcn-components/ui/button";

import Logo from "../../assets/Logo/logo.png";

import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center py-8 px-6">
      <img src={Logo} className="w-44" />

      <ul className="flex text-lg font-medium   text-black"></ul>

      <Button className="transition ease-in-out     hover:-translate-y-1 hover:scale-110  duration-300 bg-transparent hover:bg-white rounded-full text-black font-semibold border border-black  text-lg p-5">
        Start today
      </Button>
    </div>
  );
};

export default Navbar;

// {/* <li className="mx-5 cool-link cursor-pointer ">
// {/* <a>How it works</a> */}
// <Link
//   to="how-it-works"
//   // activeClass="text-red-500"
//   spy={true}
//   smooth={true}
//   // className=" cursor-pointer text-2xl hover:underline hover:text-red-500 "
// >
//   {" "}
//   {/* <div className=" drawer-toggle"></div> */}
//   How it works
// </Link>
// </li>
// <li className="mx-5 cool-link cursor-pointer ">
// <Link
//   to="services"
//   // activeClass="text-red-500"
//   spy={true}
//   smooth={true}
//   // className=" cursor-pointer text-2xl hover:underline hover:text-red-500 "
// >
//   {" "}
//   {/* <div className=" drawer-toggle"></div> */}
//   Services
// </Link>
// </li>{" "}
// <li className="mx-5 cool-link cursor-pointer ">
// <Link
//   to="get-started"
//   // activeClass="text-red-500"
//   spy={true}
//   smooth={true}
//   // className=" cursor-pointer text-2xl hover:underline hover:text-red-500 "
// >
//   {" "}
//   {/* <div className=" drawer-toggle"></div> */}
//   Get Started
// </Link>
// </li> */}
