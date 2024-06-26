import CallIcon from "@mui/icons-material/Call";

import { Button } from "@/shadcn-components/ui/button";

const FooterCta = () => {
  return (
    <div className="w-full bg-image bg-purple-300 flex flex-col justify-center items-center text-black p-8 my-8 py-16 lg:py-20 ">
      <p className="font-black text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-center mb-7 lg:mb-10">
        Still got some questions?
      </p>
      <p className="text-center  text-lg sm:text-xl lg:text-2xl font-medium mb-7 lg:mb-10 ">
        Book a free demo call today with Unorthodox
      </p>
      <div>
        <div className=" ">
          <Button className="rounded-full text-lg lg:text-xl  px-4 py-6  lg:px-7 lg:py-8 font-semibold">
            Book a free demo{" "}
            <CallIcon
              fontSize="large"
              className="ms-10 bg-white text-black rounded-full p-1  "
            />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FooterCta;
