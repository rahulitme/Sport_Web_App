import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[500px] w-full">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1531415074968-036ba1b575da?q=80&w=1200&auto=format&fit=crop"
            alt="Cricket Equipment"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="relative h-full flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Your One-Stop Shop for All Cricket Gear!</h1>
          <Link href="/collections" className="mt-4 bg-white text-black px-6 py-2 rounded hover:bg-gray-200 transition">
            Know More
          </Link>
        </div>

        <button className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/30 p-2 rounded-full">
          <ChevronLeft className="h-6 w-6 text-white" />
        </button>
        <button className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 p-2 rounded-full">
          <ChevronRight className="h-6 w-6 text-white" />
        </button>
      </section>

      {/* New Arrivals Section */}
      <section className="py-12 px-4 max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 uppercase">New Arrivals</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="group">
            <div className="aspect-square relative overflow-hidden bg-gray-100">
              <Image
                src="https://images.unsplash.com/photo-1580674285054-bed31e145f59?q=80&w=600&auto=format&fit=crop"
                alt="Cricket Bats"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="mt-2">
              <h3 className="font-medium">Cricket Bats</h3>
              <p className="text-sm text-gray-500">Starting at $49.99</p>
            </div>
          </div>

          <div className="group">
            <div className="aspect-square relative overflow-hidden bg-gray-100">
              <Image
                src="https://images.unsplash.com/photo-1593786481097-cf281dd12e9e?q=80&w=600&auto=format&fit=crop"
                alt="Sports Shoes"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="mt-2">
              <h3 className="font-medium">Sports Shoes</h3>
              <p className="text-sm text-gray-500">Starting at $79.99</p>
            </div>
          </div>

          <div className="group">
            <div className="aspect-square relative overflow-hidden bg-gray-100">
              <Image
                src="https://images.unsplash.com/photo-1622279457486-28f6b1710b49?q=80&w=600&auto=format&fit=crop"
                alt="Cricket Kit Bags"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="mt-2">
              <h3 className="font-medium">Cricket Kit Bags</h3>
              <p className="text-sm text-gray-500">Starting at $59.99</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="py-12 px-4 max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 uppercase">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="relative h-60 group overflow-hidden rounded-md">
            <Image
              src="https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=600&auto=format&fit=crop"
              alt="Custom Sport Uniforms"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/50 flex items-end p-4">
              <h3 className="text-white text-xl font-semibold">Custom Sport Uniforms</h3>
            </div>
          </div>

          <div className="relative h-60 group overflow-hidden rounded-md">
            <Image
              src="https://images.unsplash.com/photo-1547941126-3d5322b218b0?q=80&w=600&auto=format&fit=crop"
              alt="Sports Tourism & Hospitality"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/50 flex items-end p-4">
              <h3 className="text-white text-xl font-semibold">Sports Tourism & Hospitality</h3>
            </div>
          </div>

          <div className="relative h-60 group overflow-hidden rounded-md">
            <Image
              src="https://images.unsplash.com/photo-1519766304817-4f37bda74a26?q=80&w=600&auto=format&fit=crop"
              alt="Personalized Gift Items"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/50 flex items-end p-4">
              <h3 className="text-white text-xl font-semibold">Personalized Gift Items</h3>
            </div>
          </div>

          <div className="relative h-60 group overflow-hidden rounded-md">
            <Image
              src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=600&auto=format&fit=crop"
              alt="Sports Event Management"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/50 flex items-end p-4">
              <h3 className="text-white text-xl font-semibold">Sports Event Management</h3>
            </div>
          </div>

          <div className="relative h-60 group overflow-hidden rounded-md">
            <Image
              src="https://images.unsplash.com/photo-1569183091671-696402586b9c?q=80&w=600&auto=format&fit=crop"
              alt="Event Branding & Promotional Materials"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/50 flex items-end p-4">
              <h3 className="text-white text-xl font-semibold">Event Branding & Promotional Materials</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="py-12 px-4 max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 uppercase">Featured Collections</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {[
            {
              name: "Boxing Gloves",
              price: "$29.99",
              image: "https://images.unsplash.com/photo-1583473848882-f9a5bc7fd2ee?q=80&w=400&auto=format&fit=crop",
            },
            {
              name: "Table Tennis",
              price: "$19.99",
              image: "https://images.unsplash.com/photo-1609710228159-0fa9bd7c0827?q=80&w=400&auto=format&fit=crop",
            },
            {
              name: "Cricket Set",
              price: "$89.99",
              image: "https://images.unsplash.com/photo-1624804269473-86932ffd2af8?q=80&w=400&auto=format&fit=crop",
            },
            {
              name: "Trophies",
              price: "$24.99",
              image: "https://images.unsplash.com/photo-1567427361984-0cbe7396fc6c?q=80&w=400&auto=format&fit=crop",
            },
            {
              name: "Sports Jersey",
              price: "$39.99",
              image: "https://images.unsplash.com/photo-1580087256394-dc596e1c8f4f?q=80&w=400&auto=format&fit=crop",
            },
            {
              name: "Gift Items",
              price: "$14.99",
              image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=400&auto=format&fit=crop",
            },
          ].map((product, index) => (
            <div key={index} className="group">
              <div className="aspect-square relative overflow-hidden bg-gray-100">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="mt-2">
                <h3 className="font-medium">{product.name}</h3>
                <p className="text-sm text-gray-500">{product.price}</p>
                <div className="flex mt-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}

