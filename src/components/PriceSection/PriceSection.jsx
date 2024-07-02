import { Button } from "@/shadcn-components/ui/button";
import DoneIcon from "@mui/icons-material/Done";

const PriceSection = () => {
  return (
    <div
      className="w-screen   flex justify-center min-h-screen"
      name="get-started"
    >
      <div className="w-full sm:w-5/6 2xl:w-3/4   px-5 sm:px-0">
        <p className="text-center text-4xl lg:text-6xl font-black my-5">
          Next Steps
        </p>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2  ">
          <div className="bg-black col-span-1 py-8 px-6 my-2.5">
            <div className="flex flex-col lg:flex-row  mb-10">
              <p className="rounded-full p-1.5 bg-cyan-500 text-white w-56 text-center text-lg font-bold mb-4 me-4">
                3 MONTHS BUILD TIME
              </p>
              <p className="rounded-full p-1.5 bg-cyan-500 text-white w-56 text-center text-lg font-bold lg:mb-4">
                LIMITED VISIBILITY
              </p>
            </div>
            <p className="text-white text-5xl font-bold tracking-wider mb-6">
              What's Included?
            </p>
            <p className="text-white text-lg tracking-wide border-b border-gray-500 pb-10 mb-10">
              Work with Unorthodox on one time fee and (exclusive pricing)
              management package.
            </p>
            <p className="font-bold text-2xl text-white mb-6">Includes:</p>
            <p className="flex items-center text-white text-xl mb-5">
              <DoneIcon className="text-white me-2" />
              Initial discovery workshop
            </p>
            <p className="flex items-center text-white text-xl mb-5">
              <DoneIcon className="text-white me-2" />
              CRM build & automations
            </p>{" "}
            <p className="flex items-center text-white text-xl mb-5">
              <DoneIcon className="text-white me-2" />
              Complete sales system setup and build
            </p>{" "}
            <p className="flex items-center text-white text-xl mb-5">
              <DoneIcon className="text-white me-2" />
              Deliverable/solution roadmap
            </p>{" "}
            <p className="flex items-center text-white text-xl mb-5">
              <DoneIcon className="text-white me-2" />
              Full time project manager
            </p>{" "}
            <p className="flex items-center text-white text-xl mb-5">
              <DoneIcon className="text-white me-2" />
              Full time developer, build team
            </p>{" "}
            <p className="flex items-center text-white text-xl mb-5">
              <DoneIcon className="text-white me-2" />
              Sales workflow management
            </p>{" "}
            <p className="flex items-center text-white text-xl mb-5">
              <DoneIcon className="text-white me-2" />
              Automated email & SMS
            </p>{" "}
            <p className="flex items-center text-white text-xl mb-5">
              <DoneIcon className="text-white me-2" />
              Complete setup and integration
            </p>{" "}
            <p className="flex items-center text-white text-xl mb-5">
              <DoneIcon className="text-white me-2" />
              Bespoke strategy plan
            </p>
            <Button className="bg-white hover:bg-neutral-100 rounded-full text-xl py-7 px-6 text-black font-bold mt-6">
              <a
                href="https://tally.so/r/w52XQo"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book a Demo Call
              </a>
            </Button>
          </div>
          <div className="col-span-1 bg-purple-300 py-8 px-6 my-2.5">
            <div className="  border-b border-gray-500 pb-3 mb-8 lg:mb-12">
              <p className="rounded-full p-2.5 bg-purple-900 text-white w-64 text-center text-lg font-bold mb-4 ">
                BOOK YOUR CALL TODAY
              </p>
            </div>
            <p className="font-medium tracking-wide text-xl text-purple-900 mb-6 lg:mb-10">
              Leave your card at home
            </p>
            <p className="font-medium tracking-wide text-xl text-purple-900">
              This is purely a discovery call, not a sales call, we need to make
              sure we can help you before we proceed with anything.
            </p>
            <form>
              <div className="mt-5 lg:mt-8 flex flex-col">
                <label className="font-semibold text-lg  text-purple-900 ">
                  First Name
                </label>
                <input
                  type="text"
                  placeholder="First Name"
                  className="input input-bordered  w-full "
                />
              </div>
              <div className="mt-5 lg:mt-8 flex flex-col">
                <label className="font-semibold text-lg  text-purple-900 ">
                  Last Name
                </label>
                <input
                  type="text"
                  placeholder="Last Name"
                  className="input input-bordered  w-full "
                />
              </div>{" "}
              <div className="mt-5 lg:mt-8 flex flex-col">
                <label className="font-semibold text-lg  text-purple-900 ">
                  Email
                </label>
                <input
                  type="text"
                  placeholder="Email"
                  className="input input-bordered  w-full "
                />
              </div>{" "}
              <div className="mt-5 lg:mt-8 flex flex-col">
                <label className="font-semibold text-lg  text-purple-900 ">
                  Phone Number
                </label>
                <input
                  type="text"
                  placeholder="Phone Number"
                  className="input input-bordered  w-full "
                />
              </div>
              <div className="form-control mt-5 lg:mt-8">
                <label className="cursor-pointer label flex justify-start items-start">
                  <input
                    type="checkbox"
                    defaultChecked
                    className="checkbox  mt-1.5 "
                  />
                  <span className="text-lg font-medium  ms-2 tracking-wide">
                    I agree to terms & conditions provided by the company. By
                    providing my phone number, I agree to receive text messages
                    from the business.
                  </span>
                </label>
              </div>
              <div className="mt-5 lg:mt-8">
                <Button className="text-xl p-6 bg-purple-600 hover:bg-purple-700">
                  Submit
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceSection;
