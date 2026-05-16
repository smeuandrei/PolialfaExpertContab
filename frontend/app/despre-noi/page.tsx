'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import Link from 'next/link';

const values = [
  {
    id: 1,
    title: 'Transparență',
    description: 'Comunicare clară și onestă cu toți clienții noștri pentru construirea unei relații de încredere durabilă.',
    icon: 'https://polialfaexpertcontab-backend.ddev.site/wp-content/themes/neve/assets/img/starter-content/neve-marketing-icon-1.png',
  },
  {
    id: 2,
    title: 'Profesionalism',
    description: 'Standarde înalte în fiecare serviciu pe care îl furnizăm, cu expertiză și dedicație totală.',
    icon: 'https://polialfaexpertcontab-backend.ddev.site/wp-content/themes/neve/assets/img/starter-content/neve-marketing-icon-2.png',
  },
  {
    id: 3,
    title: 'Inovație',
    description: 'Utilizarea celor mai moderne soluții de software și metode în contabilitate și consultanță.',
    icon: 'https://polialfaexpertcontab-backend.ddev.site/wp-content/themes/neve/assets/img/starter-content/neve-marketing-icon-3.1.png',
  },
];

const certifications = [
  {
    id: 1,
    title: 'ISO 9001',
    description: 'Management Calității - Sistem de management reconocut internațional',
    icon: 'https://polialfaexpertcontab-backend.ddev.site/wp-content/themes/neve/assets/img/starter-content/neve-marketing-icon-1.png',
  },
  {
    id: 2,
    title: 'Conformitate RGPD',
    description: 'Protecția datelor - Respectarea reglementărilor de protecție a datelor personale',
    icon: 'https://polialfaexpertcontab-backend.ddev.site/wp-content/themes/neve/assets/img/starter-content/neve-marketing-icon-2.png',
  },
  {
    id: 3,
    title: 'Acreditare Profesională',
    description: 'Expertiză certificată - Recunoaștere oficială a competenței profesionale',
    icon: 'https://polialfaexpertcontab-backend.ddev.site/wp-content/themes/neve/assets/img/starter-content/neve-marketing-icon-3.1.png',
  },
  {
    id: 4,
    title: 'Audit Anual',
    description: 'Verificare independentă - Garanția integrității și fiabilității serviciilor',
    icon: 'https://polialfaexpertcontab-backend.ddev.site/wp-content/themes/neve/assets/img/starter-content/neve-marketing-icon-4.png',
  },
];

const teamMembers = [
  {
    id: 1,
    name: 'Diana Popescu',
    role: 'Director Executiv & Consultant Fiscal',
    expertise: 'Planificare Fiscală',
    image: 'https://polialfaexpertcontab-backend.ddev.site/wp-content/themes/neve/assets/img/starter-content/person-hero-2.png',
  },
  {
    id: 2,
    name: 'Alexandru Marinescu',
    role: 'Manager Contabilitate',
    expertise: 'Audit Intern',
    image: 'https://polialfaexpertcontab-backend.ddev.site/wp-content/themes/neve/assets/img/starter-content/person-hero-2.png',
  },
  {
    id: 3,
    name: 'Monica Stoian',
    role: 'Specialist HR & Parafiscal',
    expertise: 'Resurse Umane',
    image: 'https://polialfaexpertcontab-backend.ddev.site/wp-content/themes/neve/assets/img/starter-content/person-hero-2.png',
  },
  {
    id: 4,
    name: 'Dragoș Enache',
    role: 'Consultant Financiar',
    expertise: 'Strategii de Creștere',
    image: 'https://polialfaexpertcontab-backend.ddev.site/wp-content/themes/neve/assets/img/starter-content/person-hero-2.png',
  },
];

export default function DespreNoiPage() {
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
            Despre Noi
          </h1>
          <p className={`text-lg md:text-xl max-w-3xl ${descColor}`}>
            De peste 30 ani, parteneri de încredere în contabilitate și consultanță fiscală.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className={`py-20 ${bgSecondary}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div>
              <img
                src="https://polialfaexpertcontab-backend.ddev.site/wp-content/themes/neve/assets/img/starter-content/neve-marketing-agency-10.png"
                alt="Povestea noastră"
                className="rounded-2xl shadow-lg w-full"
              />
            </div>

            {/* Content */}
            <div>
              <h2 className={`text-4xl font-bold mb-6 ${textColor}`}>
                Povestea Noastră
              </h2>
              <p className={`text-lg mb-4 leading-relaxed ${descColor}`}>
                Polialfa Expert Contab a fost fondată cu misiunea de a oferi servicii de contabilitate și consultanță fiscală de cea mai înaltă calitate pentru întreprinderile din România. Suntem parteneri ai succesului tău.
              </p>
              <p className={`text-lg leading-relaxed ${descColor}`}>
                Cu o echipă de profesioniști experimentați și dedicați, ne concentrăm pe furnizarea de soluții innovative care ajută clienții noștri să-și optimizeze operațiunile financiare și să crească în mod sustenabil.
              </p>
              <Link href="/contact" className="inline-block mt-6">
                <button className="bg-white text-[#0a2279] border border-[#0a2279] px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                  Planifică o Întâlnire
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className={`py-20 ${bgPrimary}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className={`text-4xl font-bold mb-4 ${textColor}`}>
              Valorile Noastre Fundamentale
            </h2>
            <p className={`text-lg max-w-2xl mx-auto ${descColor}`}>
              Principiile care ghidează fiecare decizie și interacțiune cu clienții noștri
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value) => (
              <div 
                key={value.id} 
                className={`p-8 rounded-2xl text-center shadow-lg hover:shadow-xl transition-shadow ${cardBg}`}
              >
                <img
                  src={value.icon}
                  alt={value.title}
                  className="h-16 w-16 mx-auto mb-6"
                />
                <h3 className={`text-2xl font-bold mb-4 ${textColor}`}>
                  {value.title}
                </h3>
                <p className={descColor}>
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className={`py-20 ${bgSecondary}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className={`text-4xl font-bold mb-4 ${textColor}`}>
              Echipa Noastră
            </h2>
            <p className={`text-lg max-w-2xl mx-auto ${descColor}`}>
              Profesioniști experimentați dedicați succesului tău
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <div 
                key={member.id}
                className={`rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow ${cardBg}`}
              >
                {/* Image */}
                <div className="h-64 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className={`text-xl font-bold mb-1 ${textColor}`}>
                    {member.name}
                  </h3>
                  <p className={`text-sm font-semibold text-[#0a2279] mb-2`}>
                    {member.role}
                  </p>
                  <p className={`text-sm ${descColor}`}>
                    {member.expertise}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className={`py-20 ${bgPrimary}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className={`text-4xl font-bold mb-4 ${textColor}`}>
              Certificări și Acreditări
            </h2>
            <p className={`text-lg max-w-2xl mx-auto ${descColor}`}>
              Standarde internaționale care garantează calitatea serviciilor noastre
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {certifications.map((cert) => (
              <div 
                key={cert.id} 
                className={`p-8 rounded-2xl text-center shadow-lg hover:shadow-xl transition-shadow ${cardBg}`}
              >
                <img
                  src={cert.icon}
                  alt={cert.title}
                  className="h-16 w-16 mx-auto mb-6"
                />
                <h3 className={`text-xl font-bold mb-4 ${textColor}`}>
                  {cert.title}
                </h3>
                <p className={descColor}>
                  {cert.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className={`py-20 ${bgSecondary}`}>
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
                De ce Polialfa Expert Contab?
              </h2>
              <ul className={`space-y-4 text-lg ${descColor}`}>
                <li className="flex items-start">
                  <span className="text-[#0a2279] font-bold mr-4">✓</span>
                  <span>Echipă de profesioniști cu experiență de 15+ ani</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#0a2279] font-bold mr-4">✓</span>
                  <span>Servicii personalizate adaptate nevoilor ta</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#0a2279] font-bold mr-4">✓</span>
                  <span>Conformitate 100% cu legislația în vigoare</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#0a2279] font-bold mr-4">✓</span>
                  <span>Suport proactiv și consultanță strategică</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#0a2279] font-bold mr-4">✓</span>
                  <span>Utilizarea celor mai moderne soluții software</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#0a2279] py-20">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Gata să lucrezi cu o echipă de profesioniști?
          </h2>
          <p className="text-lg text-white/90 mb-8">
            Contactează-ne astazi și descoperă cum putem ajuta afacerea ta să prospere cu servicii de contabilitate de înaltă calitate.
          </p>
          <Link href="/contact">
            <button className="bg-white text-[#0a2279] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Solicită o Consultație Gratuită
            </button>
          </Link>
        </div>
      </section>
    </>
  );
}