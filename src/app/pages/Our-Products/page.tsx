// app/products/page.tsx
import { FiShield, FiCpu, FiDatabase, FiCode, FiCloud } from 'react-icons/fi';

export default function ProductsPage() {
  const products = [
    {
      icon: <FiShield className="text-hima-green" size={32} />,
      title: "Cybersecurity Suite",
      description: "End-to-end protection for businesses with real-time threat detection and Zanzibar-specific compliance solutions.",
      features: ["Firewall Config", "Penetration Testing", "Incident Response"]
    },
    {
      icon: <FiCpu className="text-hima-purple" size={32} />,
      title: "AI Solutions",
      description: "Custom AI models optimized for East African markets, from Swahili NLP to predictive analytics.",
      features: ["Chatbots", "Fraud Detection", "Data Forecasting"]
    },
    {
      icon: <FiDatabase className="text-hima-blue" size={32} />,
      title: "Data Analytics",
      description: "Turn Zanzibar's tourism and trade data into actionable insights with our visualization tools.",
      features: ["Custom Dashboards", "API Integrations", "Market Reports"]
    },
    {
      icon: <FiCode className="text-hima-orange" size={32} />,
      title: "Custom Software",
      description: "Bespoke applications built for Zanzibar's unique business environment and regulations.",
      features: ["Web Apps", "Mobile Apps", "Legacy System Modernization"]
    },
    {
      icon: <FiCloud className="text-hima-blue" size={32} />,
      title: "Cloud Solutions",
      description: "Secure cloud migration and hybrid solutions tailored for Tanzanian infrastructure.",
      features: ["AWS/GCP Setup", "Local Server Sync", "Disaster Recovery"]
    }
  ];

  return (
    <div className="bg-hima-sand min-h-screen">
      {/* Hero Section */}
      <section className="bg-hima-blue text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Products</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Cutting-edge solutions designed for Zanzibar and beyond
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map((product, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="p-8">
                <div className="mb-6">
                  {product.icon}
                </div>
                <h3 className="text-2xl font-bold text-hima-blue mb-3">{product.title}</h3>
                <p className="text-hima-charcoal mb-4">{product.description}</p>
                <ul className="space-y-2">
                  {product.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <span className="bg-hima-orange/10 text-hima-orange rounded-full p-1 mr-3">
                        ✓
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="px-8 pb-8">
                <button className="bg-hima-orange hover:bg-hima-orange-dark text-white px-6 py-2 rounded-lg transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-hima-blue/5 py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-hima-blue mb-6">Need a custom solution?</h2>
          <p className="text-xl text-hima-charcoal mb-8 max-w-3xl mx-auto">
            We specialize in tailoring technology to Zanzibar&apos;s unique business landscape.
          </p>
          <button className="bg-hima-orange hover:bg-hima-orange-dark text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors">
            Get in Touch
          </button>
        </div>
      </section>
    </div>
  );
}