'use client';

import { useTheme } from 'next-themes';
import Link from 'next/link';
import { testimonialsContent, testimonialsItems } from '@/lib/content';

export default function Testimonials() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const textColor = isDark ? 'text-white' : 'text-gray-900';
  const subtextColor = isDark ? 'text-gray-400' : 'text-gray-600';
  const bgPrimary = isDark ? 'bg-gray-900' : 'bg-white';
  const cardBg = isDark ? 'bg-gray-800' : 'bg-white';
  const borderColor = isDark ? 'border-gray-700' : 'border-gray-200';

  const renderStars = (rating: number) => {
    return '⭐'.repeat(rating);
  };

  return (
    <section className={`py-20 ${bgPrimary}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${textColor}`}>
            {testimonialsContent.heading}
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${subtextColor}`}>
            {testimonialsContent.subtitle}
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonialsItems.map((testimonial) => (
            <div
              key={testimonial.id}
              className={`relative p-8 rounded-2xl border hover:shadow-xl ${cardBg} ${borderColor} shadow-lg`}
            >
              {/* Quote Icon */}
              <div className="text-[#0a2279] text-4xl mb-4 opacity-20">
                "
              </div>

              {/* Stars Rating */}
              <div className="mb-4 text-xl">
                {renderStars(testimonial.rating)}
              </div>

              {/* Quote */}
              <p className={`mb-6 leading-relaxed italic ${subtextColor}`}>
                {testimonial.quote}
              </p>

              {/* Divider */}
              <div className={`h-px mb-6 ${borderColor}`}></div>

              {/* Author Info */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-[#0a2279]"
                />
                <div>
                  <p className={`font-bold ${textColor}`}>
                    {testimonial.name}
                  </p>
                  <p className={`text-xs ${subtextColor}`}>
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
