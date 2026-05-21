'use client';

import { useTheme } from 'next-themes';
import Link from 'next/link';
import {
  tarifePageContent,
  pricingPlans,
  customPlan,
  whatsIncludedItems,
  faqItems,
} from '@/lib/content';

export default function TarifePage() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const textColor = isDark ? 'text-white' : 'text-gray-900';
  const descColor = isDark ? 'text-gray-300' : 'text-gray-600';
  const bgPrimary = isDark ? 'bg-gray-900' : 'bg-white';
  const bgSecondary = isDark ? 'bg-gray-800' : 'bg-gray-50';
  const cardBg = isDark ? 'bg-gray-800' : 'bg-white';

  return (
    <>
      {/* Header Section */}
      <section className={`py-20 ${bgPrimary}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <h1 className={`text-5xl md:text-6xl font-bold mb-4 ${textColor}`}>
            {tarifePageContent.heading}
          </h1>
          <p className={`text-lg ${descColor}`}>
            {tarifePageContent.subtitle}
          </p>
        </div>
      </section>

      {/* Pricing Plans Grid */}
      <section className={`py-20 ${bgSecondary}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className={`text-4xl font-bold mb-4 ${textColor}`}>
              {tarifePageContent.plansHeading}
            </h2>
            <p className={`text-lg ${descColor}`}>
              {tarifePageContent.plansSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pricingPlans.map((plan) => (
              <div
                key={plan.id}
                className={`rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 ${cardBg} flex flex-col`}
              >
                {/* Header */}
                <div className="p-8">
                  <h3 className={`text-2xl font-bold mb-2 ${textColor}`}>
                    {plan.name}
                  </h3>
                  <p className={`text-sm mb-4 ${descColor}`}>
                    {plan.description}
                  </p>
                </div>

                {/* Pricing Info */}
                <div className={`px-8 py-4 ${isDark ? 'bg-gray-700' : 'bg-gray-100'}`}>
                  <div className="mb-2">
                    <p className={`text-sm font-semibold ${descColor}`}>Documente:</p>
                    <p className={`text-lg font-bold ${textColor}`}>{plan.documents}</p>
                  </div>
                  <div>
                    <p className={`text-sm font-semibold ${descColor}`}>Angajați:</p>
                    <p className={`text-lg font-bold ${textColor}`}>{plan.employees}</p>
                  </div>
                </div>

                {/* Features */}
                <div className="p-8 flex-grow">
                  <ul className="space-y-3">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-[#0a2279] font-bold mr-3">✓</span>
                        <span className={descColor}>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Price and Button */}
                <div className="p-8 pt-0 flex flex-col">
                  <div className="mb-4 text-center">
                    <p className={`text-sm font-semibold ${descColor}`}>Preț:</p>
                    <p className={`text-3xl font-bold ${textColor}`}>{plan.price}</p>
                    <p className={`text-sm ${descColor}`}>{plan.billing}</p>
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
      <section className={`py-20 ${bgPrimary}`}>
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <div className={`rounded-2xl p-12 border-2 border-[#0a2279] ${isDark ? 'bg-gray-800' : 'bg-blue-50'}`}>
            <div className="text-center mb-8">
              <h2 className={`text-3xl font-bold mb-4 ${textColor}`}>
                🎯 {customPlan.name}
              </h2>
              <p className={`text-lg ${descColor}`}>
                {customPlan.description}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {customPlan.features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <span className="text-[#0a2279] font-bold mr-3 text-xl">✓</span>
                  <span className={descColor}>{feature}</span>
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
      <section className={`py-20 ${bgSecondary}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <h2 className={`text-4xl font-bold text-center mb-16 ${textColor}`}>
            {tarifePageContent.includedHeading}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whatsIncludedItems.map((item, index) => (
              <div key={index} className={`p-6 rounded-lg ${cardBg}`}>
                <h3 className={`text-xl font-bold mb-3 ${textColor}`}>
                  {item.title}
                </h3>
                <p className={descColor}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className={`py-20 ${bgPrimary}`}>
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <h2 className={`text-4xl font-bold text-center mb-16 ${textColor}`}>
            {tarifePageContent.faqHeading}
          </h2>

          <div className="space-y-6">
            {faqItems.map((item, index) => (
              <div key={index} className={`p-6 rounded-lg border-l-4 border-[#0a2279] ${cardBg}`}>
                <h3 className={`text-lg font-bold mb-3 ${textColor}`}>
                  {item.q}
                </h3>
                <p className={descColor}>{item.a}</p>
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
