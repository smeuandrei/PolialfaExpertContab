'use client';

import { useTheme } from 'next-themes';
import { servicesWidgetContent, servicesWidgetItems } from '@/lib/content';

export default function Services() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const bgClass = isDark ? 'bg-gray-900' : 'bg-white';
  const textClass = isDark ? 'text-white' : 'text-gray-900';
  const descriptionClass = isDark ? 'text-gray-300' : 'text-gray-600';

  return (
    <section className={`py-20 ${bgClass}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${textClass}`}>
            {servicesWidgetContent.heading}
          </h2>
          <p className={`text-lg ${descriptionClass}`}>
            {servicesWidgetContent.subtitle}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesWidgetItems.map((service) => (
            <div
              key={service.id}
              className={`p-8 rounded-lg text-center transition-all duration-300 ${
                isDark
                  ? 'bg-gray-800 hover:bg-gray-700'
                  : 'bg-white hover:shadow-lg'
              }`}
            >
              {/* Icon */}
              <div className="flex justify-center mb-6">
                <img
                  src={service.icon}
                  alt={service.title}
                  className="h-16 w-16 object-contain"
                />
              </div>

              {/* Title */}
              <h3 className={`text-xl font-bold mb-4 ${textClass}`}>
                {service.title}
              </h3>

              {/* Description */}
              <p className={descriptionClass}>
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
