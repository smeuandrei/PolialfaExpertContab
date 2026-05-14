'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

interface Testimonial {
  id: number;
  image: string;
  quote: string;
  name: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    image: 'https://polialfaexpertcontab-backend.ddev.site/wp-content/themes/neve/assets/img/starter-content/neve-marketing-agency-04.png',
    quote: 'Am lucrat cu această echipă și rezultatele au fost exceptionale. Recomand cu plăcere serviciile lor de contabilitate și consultanță.',
    name: 'Ion Popescu',
  },
  {
    id: 2,
    image: 'https://polialfaexpertcontab-backend.ddev.site/wp-content/themes/neve/assets/img/starter-content/neve-marketing-agency-03.png',
    quote: 'Profesionalismul și dedicația echipei au transformat modul în care gestionez afacerea. Sunt foarte mulțumit de rezultate.',
    name: 'Maria Ionescu',
  },
  {
    id: 3,
    image: 'https://polialfaexpertcontab-backend.ddev.site/wp-content/themes/neve/assets/img/starter-content/neve-marketing-agency-02.png',
    quote: 'Expertise-ul și abordarea orientată pe date au permis optimizarea strategiei noastre fiscale. Foarte recomandat!',
    name: 'Alexandru Petrescu',
  },
];

export default function Testimonials() {
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
  const textColor = isDark ? 'text-white' : 'text-white';

  return (
    <section
      className="relative py-32 bg-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: 'url(/background-reversed.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header - Empty spacer */}
        <div className="mb-20 h-32" />

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className={`p-6 rounded-lg text-center transition-all duration-300 ${
                isDark ? 'bg-white/10 backdrop-blur-sm' : 'bg-white/10 backdrop-blur-sm'
              }`}
            >
              {/* Circular Image */}
              <div className="flex justify-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-white"
                />
              </div>

              {/* Quote */}
              <p className={`mb-4 leading-relaxed italic text-sm ${textColor}`}>
                &quot;{testimonial.quote}&quot;
              </p>

              {/* Name */}
              <p className={`font-bold uppercase text-xs ${textColor}`}>
                {testimonial.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
