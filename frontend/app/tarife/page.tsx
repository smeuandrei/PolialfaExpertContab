import Link from 'next/link';
import {
  tarifePageContent,
  pricingPlans,
  customPlan,
  whatsIncludedItems,
  faqItems,
} from '@/lib/content';

export default function TarifePage() {
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
            {tarifePageContent.heading}
          </h1>
          <p className="text-lg text-white/80">
            {tarifePageContent.subtitle}
          </p>
        </div>
      </section>

      {/* Pricing Plans Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              {tarifePageContent.plansHeading}
            </h2>
            <p className="text-lg text-gray-600">
              {tarifePageContent.plansSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pricingPlans.map((plan) => (
              <div
                key={plan.id}
                className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 bg-white flex flex-col"
              >
                {/* Header */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-2 text-gray-900">
                    {plan.name}
                  </h3>
                  <p className="text-sm mb-4 text-gray-600">
                    {plan.description}
                  </p>
                </div>

                {/* Pricing Info */}
                <div className="px-8 py-4 bg-gray-100">
                  <div className="mb-2">
                    <p className="text-sm font-semibold text-gray-600">Documente:</p>
                    <p className="text-lg font-bold text-gray-900">{plan.documents}</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-600">Angajați:</p>
                    <p className="text-lg font-bold text-gray-900">{plan.employees}</p>
                  </div>
                </div>

                {/* Features */}
                <div className="p-8 flex-grow">
                  <ul className="space-y-3">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-[#0a2279] font-bold mr-3">✓</span>
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Price and Button */}
                <div className="p-8 pt-0 flex flex-col">
                  <div className="mb-4 text-center">
                    <p className="text-sm font-semibold text-gray-600">Preț:</p>
                    <p className="text-3xl font-bold text-gray-900">{plan.price}</p>
                    <p className="text-sm text-gray-600">{plan.billing}</p>
                  </div>
                  <Link href="/contact" className="mt-auto">
                    <button className="w-full bg-white text-[#0a2279] border border-[#0a2279] py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                      {tarifePageContent.planButton}
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Plan Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <div className="rounded-2xl p-12 border-2 border-[#0a2279] bg-blue-50">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4 text-gray-900">
                🎯 {customPlan.name}
              </h2>
              <p className="text-lg text-gray-600">
                {customPlan.description}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {customPlan.features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <span className="text-[#0a2279] font-bold mr-3 text-xl">✓</span>
                  <span className="text-gray-600">{feature}</span>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Link href="/contact">
                <button className="bg-[#0a2279] text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-900 transition-colors">
                  {tarifePageContent.customPlanButton}
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
            {tarifePageContent.includedHeading}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whatsIncludedItems.map((item, index) => (
              <div key={index} className="p-6 rounded-lg bg-white">
                <h3 className="text-xl font-bold mb-3 text-gray-900">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
            {tarifePageContent.faqHeading}
          </h2>

          <div className="space-y-6">
            {faqItems.map((item, index) => (
              <div key={index} className="p-6 rounded-lg border-l-4 border-[#0a2279] bg-white">
                <h3 className="text-lg font-bold mb-3 text-gray-900">
                  {item.q}
                </h3>
                <p className="text-gray-600">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#0a2279] py-20">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            {tarifePageContent.cta.heading}
          </h2>
          <p className="text-lg text-white/90 mb-8">
            {tarifePageContent.cta.subtitle}
          </p>
          <Link href="/contact">
            <button className="bg-white text-[#0a2279] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              {tarifePageContent.cta.button}
            </button>
          </Link>
        </div>
      </section>
    </>
  );
}
