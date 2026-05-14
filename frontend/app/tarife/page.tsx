'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import Link from 'next/link';

interface PricingPlan {
  id: number;
  name: string;
  price: string;
  billing: string;
  description: string;
  documents: string;
  employees: string;
  features: string[];
  highlighted?: boolean;
}

const pricingPlans: PricingPlan[] = [
  {
    id: 1,
    name: 'Fără Salariați',
    price: '450',
    billing: 'lei/lunar',
    description: 'Ideal pentru PFA și microîntreprinderi fără angajați',
    documents: 'Până la 20 documente lunar',
    employees: '0 angajați',
    features: [
      'Evidență contabilă completă',
      'Rapoarte fiscale lunare',
      'Suport email',
      'Actualizare legislație',
      'Accesare online platform',
    ],
  },
  {
    id: 2,
    name: 'Un Singur Angajat',
    price: '500 - 700',
    billing: 'lei/lunar',
    description: 'Perfect pentru întreprinderi cu 1 angajat',
    documents: 'Până la 50 documente lunar',
    employees: '1 angajat',
    features: [
      'Contabilitate completă',
      'Gestionare salarizare',
      'Calcul contribuții sociale',
      'Rapoarte lunare',
      'Suport telefonic',
      'Accesare online platform',
    ],
  },
  {
    id: 3,
    name: 'Până la 3 Angajați',
    price: '750 - 1000',
    billing: 'lei/lunar',
    description: 'Soluție completă pentru echipe mici',
    documents: 'Până la 200 documente lunar',
    employees: '2-3 angajați',
    features: [
      'Contabilitate avansată',
      'Gestionare HR completă',
      'Salarizare și contribuții',
      'Rapoarte detaliate',
      'Suport prioritar',
      'Consultanță fiscală',
      'Accesare online platform',
    ],
  },
  {
    id: 4,
    name: 'Până la 5 Angajați',
    price: '1050 - 2000',
    billing: 'lei/lunar',
    description: 'Pachet Enterprise pentru companii mai mari',
    documents: 'Până la 500 documente lunar',
    employees: '3-5 angajați',
    features: [
      'Contabilitate enterprise',
      'Gestionare HR avansată',
      'Audit intern periodic',
      'Rapoarte consolidate',
      'Account manager dedicat',
      'Consultanță fiscală strategică',
      'Planificare financiară',
      'Accesare online platform',
    ],
  },
];

const customPlan = {
  id: 5,
  name: 'Ofertă Personalizată',
  description: 'Soluție 100% customizată pentru nevoile unice ale afacerii tale',
  features: [
    'Pachet personalizat complet',
    'Integrare cu sistemele existente',
    'Rapoarte custom',
    'Account manager dedicat',
    'Suport 24/7 disponibil',
    'Consultanță strategică nelimitată',
  ],
};

export default function TarifePage() {
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
  const borderColor = isDark ? 'border-gray-700' : 'border-gray-200';

  return (
    <>
      {/* Header Section */}
      <section className={`py-20 ${bgPrimary}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <h1 className={`text-5xl md:text-6xl font-bold mb-4 ${textColor}`}>
            Tarife
          </h1>
          <p className={`text-lg ${descColor}`}>
            Pachete flexible și transparent pentru toate dimensiunile de afaceri
          </p>
        </div>
      </section>

      {/* Pricing Plans Grid */}
      <section className={`py-20 ${bgSecondary}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className={`text-4xl font-bold mb-4 ${textColor}`}>
              Alege Pachetul Potrivit pentru Tine
            </h2>
            <p className={`text-lg ${descColor}`}>
              Prețuri competitive și servicii de înaltă calitate
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
                      Solicită Ofertă
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
                  Obține o Ofertă Personalizată
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
            Ce Este Inclus în Toate Pachetele
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Suport Profesionist',
                desc: 'Echipă de contabili și consultanți experimentați',
              },
              {
                title: 'Conformitate Legală',
                desc: 'Respectarea tuturor reglementărilor fiscale și contabile',
              },
              {
                title: 'Rapoarte Detaliate',
                desc: 'Rapoarte zilnice, lunare și anuale personalizate',
              },
              {
                title: 'Platformă Online',
                desc: 'Acces 24/7 la documentele și rapoartele tale',
              },
              {
                title: 'Actualizări Frecvente',
                desc: 'Informări cu privire la schimbări în legislație',
              },
              {
                title: 'Confidențialitate Garantată',
                desc: 'Protecția datelor conform GDPR și standardelor industriei',
              },
            ].map((item, index) => (
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
            Întrebări Frecvente
          </h2>

          <div className="space-y-6">
            {[
              {
                q: 'Pot schimba pachetul oricând?',
                a: 'Da, poți actualiza sau downgrade-a oricând în funcție de nevoile tale. Nu sunt penalități pentru schimbare.',
              },
              {
                q: 'Ce se întâmplă dacă depășesc limita de documente?',
                a: 'Documente suplimentare se factorează separat. Te vom notifica proactiv când se apropii de limita lunară.',
              },
              {
                q: 'Cum funcționează onboarding-ul?',
                a: 'Un specialist dedicat va prelua documentele tale și va configura sistemul. Procesul durează în general 5-10 zile.',
              },
              {
                q: 'Oferiți suport pentru mai mult de 5 salariați?',
                a: 'Absolut! Contactează-ne pentru o ofertă personalizată adaptată companiei tale.',
              },
            ].map((item, index) => (
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
            Gata să transformi contabilitatea companiei tale?
          </h2>
          <p className="text-lg text-white/90 mb-8">
            Contactează-ne pentru o consultație gratuită și descoperă pachetul perfect pentru afacerea ta.
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