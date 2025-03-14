import Link from "next/link"
import { Twitter, Instagram, Facebook, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Us */}
          <div>
            <h3 className="text-xl font-bold mb-4">About MR Sports</h3>
            <p className="text-gray-300 mb-4">
              Your one-stop destination for all cricket gear and sports equipment. We provide high-quality products and
              services for sports enthusiasts.
            </p>
            <div className="flex space-x-4">
              <Link href="https://twitter.com" aria-label="Twitter" className="hover:text-gray-300">
                <Twitter size={20} />
              </Link>
              <Link href="https://instagram.com" aria-label="Instagram" className="hover:text-gray-300">
                <Instagram size={20} />
              </Link>
              <Link href="https://facebook.com" aria-label="Facebook" className="hover:text-gray-300">
                <Facebook size={20} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-white">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/collections" className="text-gray-300 hover:text-white">
                  Collections
                </Link>
              </li>
              <li>
                <Link href="/teams" className="text-gray-300 hover:text-white">
                  Teams
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-xl font-bold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/collections/cricket" className="text-gray-300 hover:text-white">
                  Cricket Equipment
                </Link>
              </li>
              <li>
                <Link href="/collections/football" className="text-gray-300 hover:text-white">
                  Football Gear
                </Link>
              </li>
              <li>
                <Link href="/collections/tennis" className="text-gray-300 hover:text-white">
                  Tennis & Table Tennis
                </Link>
              </li>
              <li>
                <Link href="/collections/trophies" className="text-gray-300 hover:text-white">
                  Trophies & Medals
                </Link>
              </li>
              <li>
                <Link href="/collections/apparel" className="text-gray-300 hover:text-white">
                  Sports Apparel
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 text-gray-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">123 Sports Avenue, Cricket Lane, Sports City</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 text-gray-400" />
                <span className="text-gray-300">+1 234 567 8900</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5 text-gray-400" />
                <span className="text-gray-300">info@mrsports.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">© {new Date().getFullYear()} MR Sports. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-6 text-sm text-gray-400">
              <li>
                <Link href="/privacy" className="hover:text-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-white">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="hover:text-white">
                  Shipping Info
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

