"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronDown, Smartphone } from "lucide-react";
import Image from "next/image";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Navbar() {
  return (
    <div className="w-full flex flex-col px-4 bg-[#0c1524] ">
      {/* Top bar */}
      <div
        className=" bg-[#00000] flex items-center border-b border-gray-700 mx-auto w-11/12 font-sans
      my-0  text-sm font-normal float-left 
      "
      >
        <Button
          variant="link"
          className="text-white text-sm h-8 px-2"
          aria-label="Download App via SMS"
        >
          <span className="text-red-500">
            <Smartphone size={48} strokeWidth={3} />
          </span>
          Download App via SMS
        </Button>
        <div className="ml-auto flex items-center space-x-1">
          <Button
            variant="link"
            className="text-white text-sm h-8 px-2"
            aria-label="Change language to Urdu"
          >
            <span className="text-red-500"> اردو</span>
          </Button>
          <span className="text-gray-400">|</span>
          <Button
            variant="link"
            className="text-white text-sm h-8 px-2"
            aria-label="Sign Up"
          >
            Sign Up
          </Button>
          <span className="text-gray-400">|</span>
          <Button
            variant="link"
            className="text-white text-sm h-8 px-2"
            aria-label="Sign In"
          >
            Sign In
          </Button>
        </div>
      </div>
      <div className="mx-10 bg-[#00000] my-1">
        <div className="h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center">
          <Image
              src="/images/pw-logo.png"
              alt="PakWheels"
              width={180}
              height={40}
            />
          </Link>

          <nav className="hidden lg:flex items-center text-white gap-8 font-semibold p-4">
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 hover:text-gray-300">
                Used Cars <ChevronDown className="h-3 w-3 ml-1" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Browse Used Cars</DropdownMenuItem>
                <DropdownMenuItem>Sell Your Car</DropdownMenuItem>
                <DropdownMenuItem>Featured Used Cars</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 hover:text-gray-300">
                New Cars <ChevronDown className="h-3 w-3 ml-1" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Browse New Cars</DropdownMenuItem>
                <DropdownMenuItem>Car Reviews</DropdownMenuItem>{" "}
                <DropdownMenuItem>Compare Cars</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 hover:text-gray-300">
                Bikes <ChevronDown className="h-3 w-3 ml-1" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Used Bikes</DropdownMenuItem>
                <DropdownMenuItem>New Bikes</DropdownMenuItem>
                <DropdownMenuItem>Bike Reviews</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 hover:text-gray-300">
                Auto Store <ChevronDown className="h-3 w-3 ml-1" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Car Parts</DropdownMenuItem>
                <DropdownMenuItem>Car Accessories</DropdownMenuItem>
                <DropdownMenuItem>Car Care</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link
              href="/videos"
              className="text-white hover:text-gray-300 text-sm font-medium"
            >
              Videos
            </Link>
            <Link
              href="/forums"
              className="text-white hover:text-gray-300 text-sm font-medium"
            >
              Forums
            </Link>
            <Link
              href="/blog"
              className="text-white hover:text-gray-300 text-sm font-medium"
            >
              Blog
            </Link>
            <div className="relative">
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center gap-1 hover:text-gray-300">
                  More <ChevronDown className="h-3 w-3 ml-1" />
                  <span className="absolute -top-4 -right-6 bg-blue-500 text-white text-xs px-1.5 py-0.5 rounded">
                    New
                  </span>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>About Us</DropdownMenuItem>
                  <DropdownMenuItem>Contact</DropdownMenuItem>
                  <DropdownMenuItem>FAQs</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </nav>
          {/* Post Ad Button */}

          <div className="relative px-4">
            <DropdownMenu>
              <DropdownMenuTrigger className="bg-[#b73439] hover:bg-[#c9302c] text-white text-sm px-4 py-2 rounded h-10 my-1 font-bold flex items-center">
                Post an Ad
                <ChevronDown className="h-3 w-3 ml-1" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white shadow-lg rounded-md mt-1 py-1">
                <DropdownMenuItem className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Sell Your Car
                </DropdownMenuItem>
                <DropdownMenuItem className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Sell Your Bike
                </DropdownMenuItem>
                <DropdownMenuItem className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Sell Accessory
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </div>
  );
}
