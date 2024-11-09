export interface Car {
    id: string;
    brand: string;
    name: string;
    image: string;
    priceRange: string;
    rating: number;
    reviews: number;
    doors: number;
    engine: string;
    condition: string;
    driven: string;
    suspensionType: string;
    avg: string;
    transmission: string;
    fuelType: string;
  }
  
  export const cars: Car[] = [
    {
      id: "toyota-corolla",
      brand: "Toyota",
      name: "Corolla",
      image: "/images/Corolla-X-Car.jpg",
      priceRange: "PKR 50,00,000",
      rating: 4.5,
      reviews: 123,
      doors: 4,
      engine: "1800 CC",
      condition: "8.5 / 10",
      driven: "9,500 KM",
      suspensionType: "Soft Suspension",
      avg: "13 Km per ltr",
      transmission: "Automatic",
      fuelType: "High Octane",
    },
    {
      id: "suzuki-alto",
      brand: "Alto",
      name: "Suzuki Alto",
      image: "/images/suzuki-Alto.jpg",
      priceRange: "PKR 23.3 - 30.5 lacs",
      rating: 3.5,
      reviews: 199,
      doors: 4,
      engine: "658 CC",
      condition: "9.5 / 10",
      driven: "1,500 KM",
      suspensionType: "MacPherson",
      avg: "18 - 22 KM/L",
      transmission: "Automatic & Manual",
      fuelType: "Petrol",
    },
    {
      id: "honda-city",
      brand: "Honda",
      name: "Honda City",
      image: "/images/Honda-City.jpg",
      priceRange: "PKR 46.5 - 58.5 lacs",
      rating: 3.5,
      reviews: 458,
      doors: 4,
      engine: "1199 cc to 1497 cc",
      condition: "9.0 / 10",
      driven: "5,500 KM",
      suspensionType: "McPherson & Torsion Beam",
      avg: "12 to 16KM/L",
      transmission: "Automatic & Manual",
      fuelType: "Petrol",
    },
    {
      id: "honda-civic",
      brand: "Civic",
      name: "Honda Civic",
      image: "/images/Honda-civic.jpg",
      priceRange: "PKR 86.6 - 99.0 lacs",
      rating: 3.5,
      reviews: 357,
      doors: 4,
      engine: "1498 CC",
      condition: "9.5 / 10",
      driven: "7,500 KM",
      suspensionType: "MacPherson & Multi-Link",
      avg: "11 to 14 KM/L",
      transmission: "Automatic",
      fuelType: "Petrol",
    },
    {
      id: "suzuki-Cultus",
      brand: "suzuki",
      name: "Suzuki Cultus",
      image: "/images/Suzuki-cultus.jpg",
      priceRange: "PKR 38.6 - 45.5 lacs",
      rating: 3.0,
      reviews: 267,
      doors: 4,
      engine: "998 CC",
      condition: "8.5 / 10",
      driven: "11,00 KM",
      suspensionType: "MacPherson & Torsion Beam",
      avg: "16 to 18 KM/L",
      transmission: "Automatic & Manual",
      fuelType: "Petrol",
    },
    {
      id: "suzuki-Wagon",
      brand: "Suzuki",
      name: "Suzuki Wagon R",
      image: "/images/Wagon-R.jpg",
      priceRange: "PKR 32.1 - 37.4 lacs",
      rating: 3.0,
      reviews: 152,
      doors: 4,
      engine: "998 CC",
      condition: "8.8 / 10",
      driven: "4,500 KM",
      suspensionType: "MacPherson & Trailing Arm",
      avg: "14 to 18 KM/L",
      transmission: "Automatic & Manual",
      fuelType: "Petrol",
    },
    {
      id: "toyota-Yaris",
      brand: "Toyota",
      name: "Toyata Yaris",
      image: "/images/Yaris.jpg",
      priceRange: "PKR 44.8 - 63.2 lacs",
      rating: 3.0,
      reviews: 138,
      doors: 4,
      engine: "1329 cc to 1496 cc",
      condition: "9.0 / 10",
      driven: "9,500 KM",
      suspensionType: "MacPherson & Torsion Beam",
      avg: "12 to 16 KM/L",
      transmission: "Automatic & Manual",
      fuelType: "Petrol",
    },
    {
      id: "Suzuki-Swift",
      brand: "Suzuki",
      name: "Suzuki Swift",
      image: "/images/Swift.jpg",
      priceRange: "PKR 43.4 - 47.2 lacs",
      rating: 3.0,
      reviews: 192,
      doors: 4,
      engine: "1197 CC",
      condition: "8.5 / 10",
      driven: "11,500 KM",
      suspensionType: "MacPherson & Torsion Beam",
      avg: "12-18 KM/L",
      transmission: "Automatic & Manual",
      fuelType: "Petrol",
    },
  ];