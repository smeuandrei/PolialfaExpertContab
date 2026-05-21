'use client';

import { useTheme } from 'next-themes';
import Link from 'next/link';
import { serviciiPageContent, serviciiItems } from '@/lib/content';

export default function ServiciiPage() {
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
            {serviciiPageContent.heading}
          </h1>
          <p className={`text-lg ${descColor}`}>
            {serviciiPageContent.subtitle}
          </p>
        </div>
      </section>

      {/* Main Services Grid */}
      <section className={`py-20 ${bgSecondary}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {serviciiItems.map((service) => (
              <div 
                key={service.id} 
                className={`rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 ${cardBg}`}
              >
                {/* Image */}
                <div className="h-64 md:h-72 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className={`text-2xl font-bold mb-4 ${textColor}`}>
                    {service.title}
                  </h3>
                  <p className={`mb-6 leading-relaxed ${descColor}`}>
                    {service.description}
                  </p>
                  <Link href="/contact">
                    <button className="bg-white text-[#0a2279] border border-[#0a2279] px-6 py-2 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                      {serviciiPageContent.serviceButton}
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className={`py-20 ${bgPrimary}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div>
              <img
                src="https://polialfaexpertcontab-backend.ddev.site/wp-content/themes/neve/assets/img/starter-content/neve-marketing-agency-16.png"
                alt="De ce alege Polialfa"
                className="rounded-2xl shadow-lg w-full"
              />
            </div>

            {/* Content */}
            <div>
              <h2 className={`text-4xl font-bold mb-6 ${textColor}`}>
                {serviciiPageContent.whyHeading}
              </h2>
              <ul className={`space-y-4 text-lg ${descColor}`}>
                {serviciiPageContent.whyItems.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-[#0a2279] font-bold mr-4">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className={`py-20 ${bgSecondary}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className={`text-4xl font-bold mb-4 ${textColor}`}>
              {serviciiPageContent.processHeading}
            </h2>
            <p className={`text-lg ${descColor}`}>
              {serviciiPageContent.processSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {serviciiPageContent.processSteps.map((item, index) => (
              <div key={index} className="text-center">
                <div className={`w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center font-bold text-2xl ${isDark ? 'bg-[#0a2279] text-white' : 'bg-[#0a2279] text-white'}`}>
                  {item.step}
                </div>
                <h3 className={`text-xl font-bold mb-2 ${textColor}`}>
                  {item.title}
                </h3>
                <p className={descColor}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#0a2279] py-20">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            {serviciiPageContent.cta.heading}
          </h2>
          <p className="text-lg text-white/90 mb-8">
            {serviciiPageContent.cta.subtitle}
          </p>
          <Link href="/contact">
            <button className="bg-white text-[#0a2279] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              {serviciiPageContent.cta.button}
            </button>
          </Link>
        </div>
      </section>
    </>
  );
}