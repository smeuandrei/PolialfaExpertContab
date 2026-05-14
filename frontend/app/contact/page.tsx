'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import Link from 'next/link';

interface ContactMethod {
  id: number;
  title: string;
  value: string;
  subtitle?: string;
  icon: string;
}

const contactMethods: ContactMethod[] = [
  {
    id: 1,
    title: 'Sună-ne',
    value: '+40 (728) 123-456',
    subtitle: 'Luni – Vineri, 9:00 - 17:00',
    icon: 'https://polialfaexpertcontab-backend.ddev.site/wp-content/themes/neve/assets/img/starter-content/neve-marketing-icon-7.png',
  },
  {
    id: 2,
    title: 'Email',
    value: 'conta@polialfa.ro',
    subtitle: 'Răspunsuri în 24 de ore',
    icon: 'https://polialfaexpertcontab-backend.ddev.site/wp-content/themes/neve/assets/img/starter-content/neve-marketing-icon-5.png',
  },
  {
    id: 3,
    title: 'Birou',
    value: 'Str. Cezar Bolliac nr. 27',
    subtitle: 'Ploiesti, Prahova',
    icon: 'https://polialfaexpertcontab-backend.ddev.site/wp-content/themes/neve/assets/img/starter-content/neve-marketing-icon-6.png',
  },
];

export default function ContactPage() {
  const { theme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

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
  const inputBg = isDark ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300';
  const inputText = isDark ? 'text-white' : 'text-gray-900';
  const cardBg = isDark ? 'bg-gray-800' : 'bg-white';

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the form data to a backend
    alert('Mulțumim pentru mesaj! Vom reveni cu răspunsul în curând.');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  return (
    <>
      {/* Header Section */}
      <section className={`py-20 ${bgPrimary}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <h1 className={`text-5xl md:text-6xl font-bold mb-4 ${textColor}`}>
            Contactează-ne
          </h1>
          <p className={`text-lg ${descColor}`}>
            Suntem aici pentru a te ajuta. Alege metoda de contact preferată.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className={`py-20 ${bgSecondary}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactMethods.map((method) => (
              <div
                key={method.id}
                className={`rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow ${cardBg}`}
              >
                <img
                  src={method.icon}
                  alt={method.title}
                  className="h-16 w-16 mx-auto mb-6"
                />
                <h3 className={`text-2xl font-bold mb-3 ${textColor}`}>
                  {method.title}
                </h3>
                <p className={`text-lg font-semibold mb-2 ${textColor}`}>
                  {method.value}
                </p>
                {method.subtitle && (
                  <p className={`text-sm ${descColor}`}>
                    {method.subtitle}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className={`py-20 ${bgPrimary}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div>
              <img
                src="https://polialfaexpertcontab-backend.ddev.site/wp-content/themes/neve/assets/img/starter-content/neve-marketing-agency-25.png"
                alt="Contactează-ne"
                className="rounded-2xl shadow-lg w-full"
              />
            </div>

            {/* Form */}
            <div>
              <h2 className={`text-4xl font-bold mb-6 ${textColor}`}>
                Trimite-ne un Mesaj
              </h2>
              <p className={`text-lg mb-8 ${descColor}`}>
                Completează formularul de mai jos și echipa noastră va reveni la tine cât mai curând posibil.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label className={`block text-sm font-semibold mb-2 ${textColor}`}>
                    Nume Complet
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 rounded-lg border ${inputBg} ${inputText} focus:outline-none focus:ring-2 focus:ring-[#0a2279]`}
                    placeholder="Exemplu: Ion Popescu"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className={`block text-sm font-semibold mb-2 ${textColor}`}>
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 rounded-lg border ${inputBg} ${inputText} focus:outline-none focus:ring-2 focus:ring-[#0a2279]`}
                    placeholder="exemplu@email.com"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className={`block text-sm font-semibold mb-2 ${textColor}`}>
                    Telefon (Opțional)
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border ${inputBg} ${inputText} focus:outline-none focus:ring-2 focus:ring-[#0a2279]`}
                    placeholder="+40 (XXX) XXX-XXX"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label className={`block text-sm font-semibold mb-2 ${textColor}`}>
                    Subiect
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 rounded-lg border ${inputBg} ${inputText} focus:outline-none focus:ring-2 focus:ring-[#0a2279]`}
                    placeholder="Exemplu: Ofertă pentru Contabilitate"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className={`block text-sm font-semibold mb-2 ${textColor}`}>
                    Mesaj
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className={`w-full px-4 py-3 rounded-lg border ${inputBg} ${inputText} focus:outline-none focus:ring-2 focus:ring-[#0a2279] resize-none`}
                    placeholder="Scrie-ți mesajul aici..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-[#0a2279] text-white py-3 rounded-lg font-semibold hover:bg-blue-900 transition-colors"
                >
                  Trimite Mesaj
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className={`py-20 ${bgSecondary}`}>
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <h2 className={`text-4xl font-bold mb-6 ${textColor}`}>
            Urmărește-ne pe Rețelele Sociale
          </h2>
          <p className={`text-lg mb-12 ${descColor}`}>
            Rămâi conectat cu noi și primește ultimele actualizări și sfaturi de contabilitate.
          </p>

          <div className="flex justify-center gap-6">
            {[
              { name: 'Facebook', icon: 'f', link: 'https://facebook.com' },
              { name: 'LinkedIn', icon: 'in', link: 'https://linkedin.com' },
              { name: 'Instagram', icon: 'ig', link: 'https://instagram.com' },
            ].map((social, index) => (
              <a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-white bg-[#0a2279] hover:bg-blue-900 transition-colors`}
                title={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#0a2279] py-20">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Așteptăm Mesajul Tău
          </h2>
          <p className="text-lg text-white/90 mb-8">
            Indiferent de întrebări sau nevoi, echipa noastră de profesioniști este gata să te ajute. Contactează-ne astazi!
          </p>
          <a href="#" className="inline-block">
            <button className="bg-white text-[#0a2279] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Apelează Acum
            </button>
          </a>
        </div>
      </section>
    </>
  );
}