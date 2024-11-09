"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { cn } from "@/lib/utils";
import { cars } from "@/app/featured-cars/car";
export default function FeaturedCars() {
  const [activeTab, setActiveTab] = React.useState("Popular");
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const tabs = ["Popular", "Upcoming", "Newly Launched"];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cars.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + cars.length) % cars.length);
  };

  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-gray-800">
          Featured New Cars
        </h2>
        <Link href="#" className="text-blue-500 hover:text-blue-600 text-sm">
          View All New Cars
        </Link>
      </div>

      <div className="border-b mb-8">
        <div className="flex gap-8">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={cn(
                "pb-4 px-1 text-gray-600 relative",
                activeTab === tab && "text-blue-500"
              )}
            >
              {tab}
              {activeTab === tab && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-500" />
              )}
            </button>
          ))}
        </div>
      </div>

      <div className="relative">
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center z-10"
          aria-label="Previous car"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 25}%)` }}
          >
            {cars.map((car, index) => (
              <div key={index} className="min-w-[25%] px-3">
                {/* Updated FeaturedCars Component with Dynamic Links */}
                <Link href={`/cars/${car.id}`} passHref>
                  <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                    <Image
                      src={car.image}
                      alt={`${car.brand} ${car.name}`}
                      width={300}
                      height={200}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-gray-800">
                        {car.brand} {car.name}
                      </h3>
                      <p className="text-green-500 my-2">{car.priceRange}</p>
                      <div className="flex items-center gap-2">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={cn(
                                "w-4 h-4",
                                i < car.rating
                                  ? "fill-orange-400 text-orange-400"
                                  : "text-gray-300"
                              )}
                            />
                          ))}
                        </div>
                        <span className="text-gray-500 text-sm">
                          {car.reviews} Reviews
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center z-10"
          aria-label="Next car"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
}
