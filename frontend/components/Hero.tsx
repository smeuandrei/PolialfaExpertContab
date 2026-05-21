import Image from "next/image";
import Link from "next/link";
import Services from "./Services";
import Testimonials from "./Testimonials";
import { heroContent, heroStats } from "@/lib/content";
import heroPersonImage from "../public/person-hero-2.png";

export default function Hero() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0a2279] via-[#0d2d8a] to-[#1a4494] py-12 md:py-16">
        {/* Decorative background blur shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-white/5 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-white/5 blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-blue-400/5 blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-[60%_40%] gap-12 items-center">

            {/* Left column - Text content */}
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white">
                {heroContent.heading}
              </h1>

              <p className="text-base md:text-lg mb-10 leading-relaxed text-white/80 max-w-xl">
                {heroContent.subtitle}
              </p>

              <div className="flex gap-4 flex-wrap">
                <Link href="/contact">
                  <button className="bg-white text-[#0a2279] px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors shadow-lg">
                    {heroContent.primaryButton}
                  </button>
                </Link>
                <Link href="/servicii">
                  <button className="bg-transparent text-white border border-white/40 px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                    {heroContent.secondaryButton}
                  </button>
                </Link>
              </div>
            </div>

            {/* Right column - Person image */}
            <div className="hidden md:flex justify-center">
              <Image
                src={heroPersonImage}
                alt="Professional"
                width={400}
                height={500}
                className="max-w-full h-auto drop-shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {heroStats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-4xl font-bold mb-2 text-[#0a2279]">
                  {stat.value}
                </p>
                <p className="text-sm font-medium text-gray-600">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Services />

      <Testimonials />

      {/* CTA Section */}
      <section className="bg-[#0a2279] py-20">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            {heroContent.cta.heading}
          </h2>
          <p className="text-lg text-white/90 mb-8">
            {heroContent.cta.subtitle}
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/contact">
              <button className="bg-white text-[#0a2279] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg">
                {heroContent.cta.primaryButton}
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
