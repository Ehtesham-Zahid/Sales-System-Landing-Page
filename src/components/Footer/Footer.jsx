import FooterCta from "../FooterCta/FooterCta";

import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LocationOnIcon from "@mui/icons-material/LocationOn";

import Logo from "../../assets/Logo/logo-footer.png";

const Footer = () => {
  return (
    <div className="min-h-screen lg:h-screen flex justify-end flex-col items-end">
      <div className="w-screen bg-black text-white flex justify-center items-end lg:h-5/6 ">
        <div className="w-full sm:w-5/6 2xl:w-3/4 px-8  sm:px-0 py-4 lg:relative h-full flex flex-col justify-end">
          <div className="lg:absolute lg:-top-60  left-2 w-full ">
            <FooterCta />
          </div>
          <footer className="footer   my-5 mb-10 md:my-20 lg:my-40">
            <aside>
              <img src={Logo} className="w-52 mb-4" />
              <p className="text-xl font-medium w-4/5 ">
                We supercharge our clients businesses with smart AI solutions
                and systemised processes.
              </p>
            </aside>
            <nav className="me-8">
              <h6 className="footer-title text-xl tracking-wider">PAGES</h6>
              <a className="link link-hover  text-lg tracking-wide font-medium  mb-2.5">
                Home
              </a>
              <a className="link link-hover text-lg tracking-wide font-medium">
                Products
              </a>
            </nav>
            <nav>
              <h6 className="footer-title text-xl tracking-wider">
                CONTACT US
              </h6>
              <a className="link link-hover  text-lg tracking-wide font-medium flex items-center mb-2.5">
                <MailOutlineIcon className="me-1.5" /> hello@unorthodox.digital
              </a>
              <a className="link link-hover  text-lg tracking-wide font-medium flex items-center ">
                <LocationOnIcon className="me-1.5" /> Pakistan
              </a>
            </nav>
          </footer>
          <p className="border-t pt-3 w-full text-center sm:text-end text-lg font-medium lg:mb-5">
            © All rights reserved. <span className="font-bold">Unorthodox</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
