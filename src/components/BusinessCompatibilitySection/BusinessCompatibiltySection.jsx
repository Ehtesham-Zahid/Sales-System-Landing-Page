import { Button } from "@/shadcn-components/ui/button";
import BusinessCompatibilityCard from "../BusinessCompatibilityCard/BusinessCompatibilityCard";

const BusinessCompatibiltySection = () => {
  return (
    <div className="w-screen bg-black flex justify-center min-h-screen mb-8 lg:mb-28 py-10 lg:py-36">
      <div className="w-full sm:w-5/6 2xl:w-3/4 lg:grid lg:grid-cols-2 lg:gap-4 xl:gap-20   px-8 sm:px-0">
        <div className="lg:col-span-1 flex flex-col mt-7 ">
          <p className="font-black text-white text-4xl mb-8 min-[500px]:text-5xl md:text-6xl lg:text-5xl xl:text-7xl ">
            Is your business a good fit?
          </p>
          <p className="tracking-wide   min-[500px]:text-lg  font-medium text-white mb-8  ">
            If your business has any of these problems, it's highly likely
            Unorthodox can help you.
          </p>
          <div>
            <Button className="rounded-full bg-white hover:bg-neutral-200 text-lg text-black font-semibold px-8 py-6">
              Book a Demo Call
            </Button>
          </div>
        </div>
        <div className="lg:col-span-1 mt-5 lg:mt-0">
          <BusinessCompatibilityCard
            icon="HelpIcon"
            bgColor="amber"
            title="Poor lead management"
            desc="If leads are left without initial contact for 1-2 days, or if your sales process and systems lack structure."
          />
          <BusinessCompatibilityCard
            icon="TrendingDownIcon"
            bgColor="red"
            title="Low conversion rate"
            desc="If you're getting leads but struggling to convert many into paying clients with your current sales system."
          />{" "}
          <BusinessCompatibilityCard
            icon="BarChartIcon"
            bgColor="emerald"
            title="Long sales process"
            desc="If you're generating leads and closing deals, but your sales process is lengthy and relies on multiple manual and slow client touchpoints."
          />
        </div>
      </div>
    </div>
  );
};

export default BusinessCompatibiltySection;
