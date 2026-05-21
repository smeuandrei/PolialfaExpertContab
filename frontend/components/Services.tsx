import { servicesWidgetContent, servicesWidgetItems } from '@/lib/content';

export default function Services() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            {servicesWidgetContent.heading}
          </h2>
          <p className="text-lg text-gray-600">
            {servicesWidgetContent.subtitle}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesWidgetItems.map((service) => (
            <div
              key={service.id}
              className="p-8 rounded-lg text-center bg-white hover:shadow-lg transition-shadow duration-300"
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
              <h3 className="text-xl font-bold mb-4 text-gray-900">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
