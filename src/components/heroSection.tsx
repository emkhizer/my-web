import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection: React.FC = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Main Heading */}
        <h2 className="text-3xl font-semibold text-center mb-8 text-[#333]">
          Sell Your Car on PakWheels and Get the Best Price
        </h2>

        <div className="flex justify-center items-center space-x-8">
          {/* Left Card */}
          <div className="bg-white border border-gray-300 p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-[#1a1a1a] mb-6 text-left">
              Post your Ad on PakWheels
            </h3>
            <ul className="space-y-4 mb-8">
              {[
                "Post your Ad for Free in 3 Easy Steps",
                "Get Genuine offers from Verified Buyers",
                "Sell your car Fast at the Best Price",
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <Check className="w-5 h-5 text-green-600 mt-1 mr-2" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
            <Button className="w-full bg-red-600 hover:bg-red-700 text-white py-2 text-lg rounded-md">
              Post Your Ad
            </Button>
          </div>

          {/* Divider with "OR" */}
          <div className="flex flex-col items-center justify-center">
            <div className="border-l-2 h-24 border-gray-300"></div>
            <span className="text-gray-500 font-medium">OR</span>
            <div className="border-l-2 h-24 border-gray-300"></div>
          </div>

          {/* Right Card */}
          <div className="bg-white border border-gray-300 p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-[#1a1a1a] mb-6 text-left">
              Try PakWheels Sell It For Me
            </h3>
            <ul className="space-y-4 mb-8">
              {[
                "Dedicated Sales Expert to Sell your Car",
                "We Bargain for you and share the Best Offer",
                "We ensure Safe & Secure Transaction",
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <Check className="w-5 h-5 text-green-600 mt-1 mr-2" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 text-lg rounded-md">
              Register Your Car
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
