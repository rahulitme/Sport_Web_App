import Image from "next/image"
import Link from "next/link"

export default function CollectionsPage() {
  const categories = [
    {
      name: "Cricket Equipment",
      image: "https://images.unsplash.com/photo-1624804269473-86932ffd2af8?q=80&w=600&auto=format&fit=crop",
    },
    {
      name: "Football Gear",
      image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=600&auto=format&fit=crop",
    },
    {
      name: "Tennis & Table Tennis",
      image: "https://images.unsplash.com/photo-1609710228159-0fa9bd7c0827?q=80&w=600&auto=format&fit=crop",
    },
    {
      name: "Boxing & MMA",
      image: "https://images.unsplash.com/photo-1583473848882-f9a5bc7fd2ee?q=80&w=600&auto=format&fit=crop",
    },
    {
      name: "Trophies & Medals",
      image: "https://images.unsplash.com/photo-1567427361984-0cbe7396fc6c?q=80&w=600&auto=format&fit=crop",
    },
    {
      name: "Sports Apparel",
      image: "https://images.unsplash.com/photo-1580087256394-dc596e1c8f4f?q=80&w=600&auto=format&fit=crop",
    },
  ]

  const featuredProducts = [
    {
      name: "Premium Cricket Bat",
      price: "$129.99",
      image: "https://images.unsplash.com/photo-1580674285054-bed31e145f59?q=80&w=400&auto=format&fit=crop",
    },
    {
      name: "Cricket Helmet",
      price: "$79.99",
      image: "https://images.unsplash.com/photo-1580674285054-bed31e145f59?q=80&w=400&auto=format&fit=crop",
    },
    {
      name: "Cricket Ball Set",
      price: "$24.99",
      image: "https://images.unsplash.com/photo-1624804269473-86932ffd2af8?q=80&w=400&auto=format&fit=crop",
    },
    {
      name: "Boxing Gloves",
      price: "$49.99",
      image: "https://images.unsplash.com/photo-1583473848882-f9a5bc7fd2ee?q=80&w=400&auto=format&fit=crop",
    },
    {
      name: "Table Tennis Racket",
      price: "$19.99",
      image: "https://images.unsplash.com/photo-1609710228159-0fa9bd7c0827?q=80&w=400&auto=format&fit=crop",
    },
    {
      name: "Gold Trophy",
      price: "$34.99",
      image: "https://images.unsplash.com/photo-1567427361984-0cbe7396fc6c?q=80&w=400&auto=format&fit=crop",
    },
    {
      name: "Sports Jersey",
      price: "$59.99",
      image: "https://images.unsplash.com/photo-1580087256394-dc596e1c8f4f?q=80&w=400&auto=format&fit=crop",
    },
    {
      name: "Football",
      price: "$29.99",
      image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=400&auto=format&fit=crop",
    },
  ]

  return (
    <main className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">Our Collections</h1>

        {/* Categories */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Categories</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <Link
                key={index}
                href={`/collections/${category.name.toLowerCase().replace(/\s+|&/g, "-")}`}
                className="group"
              >
                <div className="relative h-60 overflow-hidden rounded-lg">
                  <Image
                    src={category.image || "/placeholder.svg"}
                    alt={category.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <h3 className="text-white text-xl font-bold">{category.name}</h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Featured Products */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Featured Products</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product, index) => (
              <div key={index} className="group">
                <div className="aspect-square relative overflow-hidden bg-gray-100 rounded-md">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="mt-3">
                  <h3 className="font-medium">{product.name}</h3>
                  <p className="text-gray-700">{product.price}</p>
                  <div className="flex mt-1">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    ))}
                  </div>
                </div>
                <button className="mt-2 w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition">
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}

