import Image from "next/image"
import Link from "next/link"
import { Twitter, Instagram, Facebook } from "lucide-react"

export default function Navbar() {
  return (
    <header>
      {/* Social Bar */}
      <div className="bg-black text-white py-1 px-4 flex justify-end items-center text-sm">
        <div className="mr-auto">Follow Us:</div>
        <div className="flex space-x-2">
          <Link href="https://twitter.com" aria-label="Twitter" className="hover:text-gray-300">
            <Twitter size={16} />
          </Link>
          <Link href="https://instagram.com" aria-label="Instagram" className="hover:text-gray-300">
            <Instagram size={16} />
          </Link>
          <Link href="https://facebook.com" aria-label="Facebook" className="hover:text-gray-300">
            <Facebook size={16} />
          </Link>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-black text-white py-4 px-4 flex flex-wrap items-center justify-between">
        <Link href="/" className="flex items-center">
          <div className="relative h-12 w-24">
            <Image src="/logo.jpeg" alt="MR Sports Logo" fill className="object-contain" />
          </div>
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          <Link href="/" className="hover:text-gray-300 font-medium">
            HOME
          </Link>
          <Link href="/services" className="hover:text-gray-300 font-medium">
            SERVICES
          </Link>
          <Link href="/collections" className="hover:text-gray-300 font-medium">
            COLLECTIONS
          </Link>
          <Link href="/teams" className="hover:text-gray-300 font-medium">
            TEAMS
          </Link>
        </div>

        <Link
          href="/contact"
          className="bg-white text-black px-4 py-2 rounded text-sm font-medium hover:bg-gray-200 transition"
        >
          Contact Us
        </Link>
      </nav>
    </header>
  )
}

