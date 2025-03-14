import Image from "next/image"
import Link from "next/link"

export default function TeamsPage() {
  const teams = [
    {
      name: "Cricket Teams",
      description: "Custom cricket uniforms and equipment for teams of all levels.",
      image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?q=80&w=600&auto=format&fit=crop",
    },
    {
      name: "Football Teams",
      description: "Professional football kits and training equipment for clubs.",
      image: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?q=80&w=600&auto=format&fit=crop",
    },
    {
      name: "Tennis Clubs",
      description: "Tennis apparel and equipment for clubs and academies.",
      image: "https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?q=80&w=600&auto=format&fit=crop",
    },
    {
      name: "School Teams",
      description: "Affordable sports equipment packages for educational institutions.",
      image: "https://images.unsplash.com/photo-1526232761682-d26e03ac148e?q=80&w=600&auto=format&fit=crop",
    },
  ]

  const testimonials = [
    {
      name: "Mumbai Cricket Club",
      quote:
        "MR Sports has been our trusted partner for cricket equipment for over 5 years. Their quality and service are unmatched.",
      image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?q=80&w=150&auto=format&fit=crop",
      person: "Rahul Sharma, Team Manager",
    },
    {
      name: "Delhi Football Academy",
      quote:
        "We've been using MR Sports for our team uniforms and training equipment. The quality is excellent and delivery is always on time.",
      image: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?q=80&w=150&auto=format&fit=crop",
      person: "Amit Patel, Head Coach",
    },
    {
      name: "Chennai Tennis Club",
      quote:
        "The personalized service and attention to detail from MR Sports has made them our go-to supplier for all tennis equipment.",
      image: "https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?q=80&w=150&auto=format&fit=crop",
      person: "Priya Rajan, Club Director",
    },
  ]

  return (
    <main className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">Teams & Clubs</h1>

        {/* Team Categories */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">We Serve All Types of Teams</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {teams.map((team, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md flex flex-col md:flex-row">
                <div className="relative h-60 md:h-auto md:w-1/2">
                  <Image src={team.image || "/placeholder.svg"} alt={team.name} fill className="object-cover" />
                </div>
                <div className="p-6 md:w-1/2 flex flex-col justify-center">
                  <h3 className="text-xl font-bold mb-2">{team.name}</h3>
                  <p className="text-gray-600 mb-4">{team.description}</p>
                  <Link
                    href={`/teams/${team.name.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-blue-600 font-medium hover:underline mt-auto"
                  >
                    Learn more →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Team Solutions */}
        <section className="mb-16 bg-gray-100 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-6">Team Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">Custom Uniforms</h3>
              <p className="text-gray-600">
                Personalized team uniforms with custom designs, logos, and player names. High-quality materials and
                printing.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">Bulk Equipment</h3>
              <p className="text-gray-600">
                Special pricing for bulk orders of sports equipment for teams and clubs. Competitive rates for large
                quantities.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">Team Packages</h3>
              <p className="text-gray-600">
                Complete team packages including uniforms, equipment, and accessories at discounted rates.
              </p>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section>
          <h2 className="text-2xl font-bold mb-6">What Teams Say About Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="relative h-12 w-12 rounded-full overflow-hidden mr-3">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold">{testimonial.name}</h3>
                  </div>
                </div>
                <p className="text-gray-600 italic mb-4">"{testimonial.quote}"</p>
                <p className="text-sm text-gray-500">- {testimonial.person}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/contact"
              className="inline-block bg-black text-white px-6 py-3 rounded font-medium hover:bg-gray-800 transition"
            >
              Contact Us for Team Solutions
            </Link>
          </div>
        </section>
      </div>
    </main>
  )
}

