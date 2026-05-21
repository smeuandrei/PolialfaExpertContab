import Link from 'next/link';
import {
  despreNoiContent,
  valuesItems,
  teamItems,
  certificationsItems,
} from '@/lib/content';

export default function DespreNoiPage() {
  return (
    <>
      {/* Header Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-gray-900">
            {despreNoiContent.heading}
          </h1>
          <p className="text-lg md:text-xl max-w-3xl text-gray-600">
            {despreNoiContent.subtitle}
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-gray-50">
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
              <h2 className="text-4xl font-bold mb-6 text-gray-900">
                {despreNoiContent.storyHeading}
              </h2>
              <p className="text-lg mb-4 leading-relaxed text-gray-600">
                {despreNoiContent.storyParagraph1}
              </p>
              <p className="text-lg leading-relaxed text-gray-600">
                {despreNoiContent.storyParagraph2}
              </p>
              <Link href="/contact" className="inline-block mt-6">
                <button className="bg-white text-[#0a2279] border border-[#0a2279] px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                  {despreNoiContent.storyButton}
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              {despreNoiContent.valuesHeading}
            </h2>
            <p className="text-lg max-w-2xl mx-auto text-gray-600">
              {despreNoiContent.valuesSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {valuesItems.map((value) => (
              <div
                key={value.id}
                className="p-8 rounded-2xl text-center shadow-lg hover:shadow-xl transition-shadow bg-white"
              >
                <img
                  src={value.icon}
                  alt={value.title}
                  className="h-16 w-16 mx-auto mb-6"
                />
                <h3 className="text-2xl font-bold mb-4 text-gray-900">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              {despreNoiContent.teamHeading}
            </h2>
            <p className="text-lg max-w-2xl mx-auto text-gray-600">
              {despreNoiContent.teamSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamItems.map((member) => (
              <div
                key={member.id}
                className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow bg-white"
              >
                <div className="h-64 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1 text-gray-900">
                    {member.name}
                  </h3>
                  <p className="text-sm font-semibold text-[#0a2279] mb-2">
                    {member.role}
                  </p>
                  <p className="text-sm text-gray-600">
                    {member.expertise}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              {despreNoiContent.certificationsHeading}
            </h2>
            <p className="text-lg max-w-2xl mx-auto text-gray-600">
              {despreNoiContent.certificationsSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {certificationsItems.map((cert) => (
              <div
                key={cert.id}
                className="p-8 rounded-2xl text-center shadow-lg hover:shadow-xl transition-shadow bg-white"
              >
                <img
                  src={cert.icon}
                  alt={cert.title}
                  className="h-16 w-16 mx-auto mb-6"
                />
                <h3 className="text-xl font-bold mb-4 text-gray-900">
                  {cert.title}
                </h3>
                <p className="text-gray-600">
                  {cert.description}
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
            {despreNoiContent.cta.heading}
          </h2>
          <p className="text-lg text-white/90 mb-8">
            {despreNoiContent.cta.subtitle}
          </p>
          <Link href="/contact">
            <button className="bg-white text-[#0a2279] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              {despreNoiContent.cta.button}
            </button>
          </Link>
        </div>
      </section>
    </>
  );
}
