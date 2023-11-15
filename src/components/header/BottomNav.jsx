import { FaMap } from "react-icons/fa";
import { HiChatAlt2 } from "react-icons/hi";
import { MdRateReview, MdStarRate, MdSupportAgent } from "react-icons/md";
import { RiChatQuoteFill } from "react-icons/ri";

export default function BottomNav() {
  return (
    <header className="bg-red-200 font-serif py-6">
      <div className="container mx-auto w-full  px-20">
        <div className="grid grid-cols-12 gap-4 ">
          <div className="col-span-2 text-center mx-auto items-center w-full block py-4 bg-black-transparent rounded-md">
            <button className="bg-black-transparent p-2 rounded-full mb-2">
              <FaMap className="text-white " />
            </button>

            <h2 href="#projects" className="">
              Map
            </h2>
          </div>

          <div className="col-span-2 text-center mx-auto items-center w-full block py-4 bg-black-transparent rounded-md">
            <button className="bg-black-transparent p-2 rounded-full mb-2">
              <HiChatAlt2 className="text-white " />
            </button>

            <h2 href="#projects" className="">
              SMS/Email
            </h2>
          </div>

          <div className="col-span-2 text-center mx-auto items-center w-full block py-4 bg-black-transparent rounded-md">
            <button className="bg-black-transparent p-2 rounded-full mb-2">
              <MdRateReview className="text-white " />
            </button>

            <h2 href="#projects" className="">
              Write a Review
            </h2>
          </div>

          <div className="col-span-2 text-center mx-auto items-center w-full block py-4 bg-black-transparent rounded-md">
            <button className="bg-black-transparent p-2 rounded-full mb-2">
              <RiChatQuoteFill className="text-white " />
            </button>

            <h2 href="#projects" className="">
              Testimonials
            </h2>
          </div>

          <div className="col-span-2 text-center mx-auto items-center w-full block py-4 bg-black-transparent rounded-md">
            <button className="bg-black-transparent p-2 rounded-full mb-2">
              <MdStarRate className="text-white " />
            </button>

            <h2 href="#projects" className="">
              Popular
            </h2>
          </div>

          <div className="col-span-2 text-center mx-auto items-center w-full block py-4 bg-black-transparent rounded-md">
            <button className="bg-black-transparent p-2 rounded-full mb-2">
              <MdSupportAgent className="text-white " />
            </button>

            <h2 href="#projects" className="">
              Customer Care
            </h2>
          </div>
        </div>
      </div>
    </header>
  );
}
