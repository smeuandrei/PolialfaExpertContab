'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

interface Service {
  id: number;
  icon: string;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    id: 1,
    icon: 'https://polialfaexpertcontab-backend.ddev.site/wp-content/themes/neve/assets/img/starter-content/neve-marketing-icon-1.png',
    title: 'Contabilitate',
    description: 'Servicii complete de evidență contabilă și raportare financiară pentru afacerea ta.',
  },
  {
    id: 2,
    icon: 'https://polialfaexpertcontab-backend.ddev.site/wp-content/themes/neve/assets/img/starter-content/neve-marketing-icon-4.1.png',
    title: 'Consultanță Fiscală',
    description: 'Planificare fiscală și optimizare impozitelor pentru o afacere mai profitabilă.',
  },
  {
    id: 3,
    icon: 'https://polialfaexpertcontab-backend.ddev.site/wp-content/themes/neve/assets/img/starter-content/neve-marketing-icon-3.1.png',
    title: 'Audit Intern',
    description: 'Evaluare riguroasă a proceselor și controlelor interne ale organizației tale.',
  },
  {
    id: 4,
    icon: 'https://polialfaexpertcontab-backend.ddev.site/wp-content/themes/neve/assets/img/starter-content/neve-marketing-icon-2.png',
    title: 'Parafiscalitate',
    description: 'Gestionare expertă a obligațiilor de parafiscalitate și contribuții sociale.',
  },
];

export default function Services() {
  const { theme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  const isDark = theme === 'dark';
  const bgClass = 'bg-transparent';
  const textClass = isDark ? 'text-white' : 'text-gray-900';
  const descriptionClass = isDark ? 'text-gray-300' : 'text-gray-600';

  return (
    <section className={`py-20 ${bgClass} transition-colors duration-500`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${textClass}`}>
            Serviciile Noastre
          </h2>
          <p className={`text-lg ${descriptionClass}`}>
            Soluții complete de contabilitate și consultanță pentru dezvoltarea afacerii tale
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
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
