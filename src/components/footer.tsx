import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-[#1c242f] text-white">
      <div className="container mx-auto px-4 py-12 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">About PakWheels</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-400 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Cars By Location</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-400 hover:text-white">
                  Cars in Karachi
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white">
                  Cars in Lahore
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white">
                  Cars in Islamabad
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white">
                  Cars in Rawalpindi
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Popular Cars</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-400 hover:text-white">
                  Toyota Corolla
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white">
                  Honda Civic
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white">
                  Suzuki Cultus
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white">
                  Honda City
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Connect With Us</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-400 hover:text-white">
                  Facebook
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white">
                  Twitter
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white">
                  YouTube
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white">
                  Instagram
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700">
          <p className="text-center text-gray-400">
            © 2024 PakWheels. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}