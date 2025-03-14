import Image from "next/image"
import Link from "next/link"

export default function ServicesPage() {
  const services = [
    {
      title: "Custom Sport Uniforms",
      description:
        "Custom designed and manufactured sports uniforms for teams of all sizes. We offer high-quality materials and printing.",
      image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=600&auto=format&fit=crop",
    },
    {
      title: "Sports Tourism & Hospitality",
      description:
        "Complete sports tourism packages including tickets, accommodation, and transportation for major sporting events.",
      image: "https://images.unsplash.com/photo-1547941126-3d5322b218b0?q=80&w=600&auto=format&fit=crop",
    },
    {
      title: "Personalized Gift Items",
      description: "Custom sports memorabilia and personalized gift items for fans, teams, and corporate clients.",
      image: "https://images.unsplash.com/photo-1519766304817-4f37bda74a26?q=80&w=600&auto=format&fit=crop",
    },
    {
      title: "Sports Event Management",
      description:
        "End-to-end management of sports events, tournaments, and competitions with professional organization.",
      image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=600&auto=format&fit=crop",
    },
    {
      title: "Event Branding & Promotional Materials",
      description: "Design and production of event branding materials, banners, flyers, and promotional items.",
      image: "https://images.unsplash.com/photo-1569183091671-696402586b9c?q=80&w=600&auto=format&fit=crop",
    },
    {
      title: "Sports Equipment Rental",
      description:
        "Rental services for sports equipment and gear for events, tournaments, and recreational activities.",
      image: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=600&auto=format&fit=crop",
    },
  ]

  return (
    <main className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">Our Services</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="relative h-60">
                <Image src={service.image || "/placeholder.svg"} alt={service.title} fill className="object-cover" />
              </div>
              <div className="p-6">
                <h2 className="text-xl font-bold mb-2">{service.title}</h2>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link
                  href={`/services/${service.title.toLowerCase().replace(/\s+/g, "-")}`}
                  className="text-blue-600 font-medium hover:underline"
                >
                  Learn more →
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gray-100 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Need a Custom Service?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-6">
            We offer tailored solutions for sports teams, events, and organizations. Contact us to discuss your specific
            requirements.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-black text-white px-6 py-3 rounded font-medium hover:bg-gray-800 transition"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </main>
  )
}

