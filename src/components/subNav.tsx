import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";

const SubNav: React.FC = () => {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-b from-[#001529] via-[#002a4a] to-[#023a6f]" />
      <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-[38px] font-normal tracking-tight text-white leading-tight mb-0">
            Find Used Cars in Pakistan
          </h1>
          <p className="text-xl leading-6 text-gray-300">
            With thousands of cars, we have just the right one for you
          </p>
        </div>
        <div className="mx-auto mt-6 max-w-4xl">
          <div className="grid gap-0 sm:grid-cols-[1fr,auto,auto,auto] items-end">
            <Input
              className="h-12 bg-white min-w-[140px] border-transparent text-sm text-gray-500"
              placeholder="Car Make or Model"
              type="text"
              aria-label="Search for a car make or model"
            />
            <Select>
              <SelectTrigger
                className="h-12 bg-white  min-w-[140px] border-transparent text-sm text-gray-500
                
                "
              >
                <SelectValue placeholder="All Cities" />
              </SelectTrigger>
              <SelectContent className="bg-white">
                {[
                  "All Cities",
                  "Karachi",
                  "Lahore",
                  "Islamabad",
                  "Rawalpindi",
                ].map((city) => (
                  <SelectItem
                    key={city.toLowerCase()}
                    value={city.toLowerCase()}
                  >
                    {city}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="h-12 bg-white min-w-[140px] text-sm border-transparent text-gray-500">
                <SelectValue placeholder="Price Range" />
              </SelectTrigger>
              <SelectContent className="bg-white">
                {[
                  "Under 5 Lac",
                  "5-10 Lac",
                  "10-15 Lac",
                  "15-20 Lac",
                  "Above 20 Lac",
                ].map((range, index) => (
                  <SelectItem key={index} value={range}>
                    {range}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Button
              size="lg"
              className="h-12 text-white px-8 bg-[#4caf50] border-transparent hover:bg-[#45a049]"
              aria-label="Search for cars"
            >
              <Search size={48} strokeWidth={5} />
            </Button>
          </div>
          <div className="flex justify-center items-center">
            <Button
              variant="link"
              className="mt-4 text-white hover:text-gray-300 text-sm border border-white"
              aria-label="Advanced filter options"
            >
              Advanced Filter
              <ChevronRight className="h-3 w-3 ml-1" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubNav;
