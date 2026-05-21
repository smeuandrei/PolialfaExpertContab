import { contactPageContent, contactMethods } from '@/lib/content';

export default function ContactPage() {
  return (
    <>
      {/* Header Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0a2279] via-[#0d2d8a] to-[#1a4494] py-20">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-white/5 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-white/5 blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-blue-400/5 blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 md:px-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-white">
            {contactPageContent.heading}
          </h1>
          <p className="text-lg text-white/80">
            {contactPageContent.subtitle}
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactMethods.map((method) => (
              <div
                key={method.id}
                className="rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow bg-white"
              >
                <img
                  src={method.icon}
                  alt={method.title}
                  className="h-16 w-16 mx-auto mb-6"
                />
                <h3 className="text-2xl font-bold mb-3 text-gray-900">
                  {method.title}
                </h3>
                <p className="text-lg font-semibold mb-2 text-gray-900">
                  {method.value}
                </p>
                {method.subtitle && (
                  <p className="text-sm text-gray-600">
                    {method.subtitle}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Image */}
            <div className="aspect-square rounded-2xl shadow-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600&q=80"
                alt="Contactează-ne"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Google Maps */}
            <div className="aspect-square rounded-2xl shadow-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2843.8566577647546!2d25.5413!3d44.9483!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b201e6e4e4e4e5%3A0x1234567890!2sStr.%20Cezar%20Bolliac%2027%2C%20Ploiesti%2C%20Prahova!5e0!3m2!1sro!2sro!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#0a2279] py-20">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            {contactPageContent.cta.heading}
          </h2>
          <p className="text-lg text-white/90 mb-8">
            {contactPageContent.cta.subtitle}
          </p>
          <a href="#" className="inline-block">
            <button className="bg-white text-[#0a2279] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              {contactPageContent.cta.button}
            </button>
          </a>
        </div>
      </section>
    </>
  );
}
