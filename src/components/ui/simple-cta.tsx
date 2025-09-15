"use client";

import { useTranslation } from "@/hooks/useTranslation";

interface SimpleCTAProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
}

export function SimpleCTA({
  title,
  subtitle,
  buttonText
}: SimpleCTAProps) {
  const { t } = useTranslation();
  const handleButtonClick = () => {
    // Scroll to contact section
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 lg:py-32 bg-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-gray-100 mb-8 leading-tight">
          {title || t('simple_cta.title')}
        </h2>
        <p className="text-xl text-gray-200 mb-12 leading-relaxed max-w-3xl mx-auto">
          {subtitle || t('simple_cta.subtitle')}
        </p>
        <button
          onClick={handleButtonClick}
          className="bg-white text-gray-900 px-12 py-4 rounded-full font-semibold text-lg  transition-colors focus:outline-none focus:ring-2 focus:ring-ring"
        >
          {buttonText || t('simple_cta.buttonText')}
        </button>
      </div>
    </section>
  );
}
