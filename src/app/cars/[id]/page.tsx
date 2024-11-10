
"use client";

import { use } from "react"; // Import 'use' from React

import Image from "next/image";
import { notFound } from "next/navigation";
import { cars } from "@/app/featured-cars/car";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useRouter } from "next/navigation";

interface Params {
  id: string;
}

interface PageProps {
  params: Promise<Params>; // Expect params as a Promise
}

export default function CarDetailsPage({ params }: PageProps) {
  // Unwrap the params Promise using the use() hook
  const unwrappedParams = use(params);
  const router = useRouter();

  const car = cars.find((car) => car.id === unwrappedParams.id);

  if (!car) {
    notFound();
  }

  return (
    <div className="container mx-auto  px-4 py-8">
      <h1 className="text-3xl font-bold text-center ">
        {car.brand} {car.name} 2024 Price in Pakistan, Images, Reviews & Specs
      </h1>

      <Card className="overflow-hidden flex-col items-center justify-center">
        <div className="flex justify-center w-full">
          <Image
            src={car.image}
            alt={`${car.brand} ${car.name}`}
            width={200}
            height={180}
            className="w-auto object-cover "
          />
        </div>

        <CardContent className="p-6 w-full ">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-8">
            <Button
              variant="outline"
              className="mt-4  bg-white text-blue-600 py-2 px-4 rounded hover:bg-blue-600"
            >
              Book a test drive
            </Button>
            <Button
              variant="outline"
              className="mt-4  bg-white text-blue-600 py-2 px-4 rounded hover:bg-blue-600"
            >
              Request Bank Finance
            </Button>
            <Button
              variant="outline"
              className="mt-4  bg-white text-blue-600 py-2 px-4 rounded hover:bg-blue-600"
            >
              Visit Place
            </Button>
            <Button
              variant="outline"
              className="mt-4  bg-white text-blue-600 py-2 px-4 rounded hover:bg-blue-600"
            >
              Car Inspection
            </Button>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-center">
              Vehicle Description
            </h2>

            <div key={car.id}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="space-y-1 text-center">
                  <p className="text-sm text-muted-foreground">
                    Number of Doors
                  </p>
                  <p className="font-medium">{car.doors}</p>
                </div>
                <div className="space-y-1 text-center">
                  <p className="text-sm text-muted-foreground">Engine</p>
                  <p className="font-medium">{car.engine}</p>
                </div>
                <div className="space-y-1 text-center">
                  <p className="text-sm text-muted-foreground">Condition</p>
                  <p className="font-medium">{car.condition}</p>
                </div>
                <div className="space-y-1 text-center">
                  <p className="text-sm text-muted-foreground">Driven</p>
                  <p className="font-medium">{car.driven}</p>
                </div>
                <div className="space-y-1 text-center">
                  <p className="text-sm text-muted-foreground">
                    Suspension Type
                  </p>
                  <p className="font-medium">{car.suspensionType}</p>
                </div>
                <div className="space-y-1 text-center">
                  <p className="text-sm text-muted-foreground">Avg</p>
                  <p className="font-medium">{car.avg}</p>
                </div>
                <div className="space-y-1 text-center">
                  <p className="text-sm text-muted-foreground">Transmission</p>
                  <p className="font-medium">{car.transmission}</p>
                </div>
                <div className="space-y-1 text-center">
                  <p className="text-sm text-muted-foreground">Fuel Type</p>
                  <p className="font-medium">{car.fuelType}</p>
                </div>
              </div>
            </div>
            <button
              onClick={() => router.push("/payment")}
              className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 mx-auto block"
            >
              Make Payment
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
