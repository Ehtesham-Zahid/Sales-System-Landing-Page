import { Button } from "@/shadcn-components/ui/button";

const StorySection = () => {
  return (
    <div className="w-screen  flex justify-center">
      <div className="w-full sm:w-5/6 2xl:w-3/4   px-5 sm:px-0 grid grid-cols-1 lg:grid-cols-2 gap-4 py-16">
        <div className="col-span-1 flex flex-col justify-center  ">
          <div className="flex flex-col sm:flex-row justify-around sm:mb-8">
            <div className="w-full sm:w-64 h-52 flex flex-col justify-center items-center border border-black rounded-lg my-5 sm:my-0 lg:mx-1">
              <p className="font-black text-5xl">30 DAYS</p>
              <p>Average build time</p>
            </div>
            <div className="w-full sm:w-64 h-52 flex flex-col justify-center items-center border border-black rounded-lg  my-5 sm:my-0 lg:mx-1">
              <p className="font-black text-5xl">5 X</p>
              <p>Average ROI</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row justify-around">
            <div className="w-full sm:w-64 h-52 flex flex-col justify-center items-center border border-black rounded-lg  my-5 sm:my-0 lg:mx-1">
              <p className="font-black text-5xl">40+</p>
              <p>Happy clients</p>
            </div>
            <div className="w-full sm:w-64 h-52 flex flex-col justify-center items-center border border-black rounded-lg  my-5 sm:my-0 lg:mx-1">
              <p className="font-black text-5xl">385k</p>
              <p>Leads qualified</p>
            </div>
          </div>
        </div>
        <div className="col-span-1 flex flex-col mt-5 lg:mt-0">
          <p className="text-5xl md:text-6xl lg:text-4xl xl:text-5xl 2xl:text-6xl leading-tight font-black mb-8">
            Time-tested solutions that endure.
          </p>
          <p className="mb-8 text-lg md:text-xl lg:text-lg xl:text-xl font-medium tracking-wide">
            Many of our clients excel at lead generation but lack the systems to
            efficiently manage their incoming leads.
          </p>
          <p className="mb-8 text-lg md:text-xl lg:text-lg  xl:text-xl font-medium tracking-wide">
            By leveraging AI, we streamline lead qualification, replacing manual
            hours and automating processes. This enables you to handle a higher
            volume of leads each month, increase closures, and drastically
            reduce time spent on these tasks.
          </p>
          <div>
            <Button
              className="rounded-full text-lg font-semibold px-7 py-6"
              variant="secondary"
            >
              Start Today
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StorySection;
