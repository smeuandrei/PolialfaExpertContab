import Link from 'next/link';
import { testimonialsContent, testimonialsItems } from '@/lib/content';

const renderStars = (rating: number) => '⭐'.repeat(rating);

export default function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            {testimonialsContent.heading}
          </h2>
          <p className="text-lg max-w-2xl mx-auto text-gray-600">
            {testimonialsContent.subtitle}
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonialsItems.map((testimonial) => (
            <div
              key={testimonial.id}
              className="relative p-8 rounded-2xl border border-gray-200 shadow-lg hover:shadow-xl bg-white"
            >
              {/* Quote */}
              <p className="mb-6 leading-relaxed italic text-gray-600">
                {testimonial.quote}
              </p>

              {/* Divider */}
              <div className="h-px mb-6 bg-gray-200"></div>

              {/* Author Info */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-[#0a2279]"
                />
                <div>
                  <p className="font-bold text-gray-900">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-gray-600">
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
