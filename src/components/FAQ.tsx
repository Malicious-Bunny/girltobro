"use client";

import { useState, useMemo } from "react";
import { useTranslation } from "@/hooks/useTranslation";
import { FaqAccordion } from "@/components/ui/faq-chat-accordion";

export function FAQ() {
  const { t } = useTranslation();
  const [timestamp] = useState<string>("Updated daily at 9:01 AM");

  const faqs = t('faq.items', { returnObjects: true }) as Array<{question: string, answer: string}>;

  const data = useMemo(() => (
    faqs.map((f, i) => ({ id: i + 1, question: f.question, answer: f.answer }))
  ), [faqs]);

  return (
    <section id="faq" className="py-24 lg:py-32 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 lg:mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-gray-900 mb-6 leading-tight">
            {t('faq.heading')}
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            {t('faq.subtitle')}
          </p>
        </div>

        <div className="flex justify-center">
          <FaqAccordion
            data={data}
            className="w-full max-w-3xl"
            timestamp={timestamp}
          />
        </div>

        <div className="text-center mt-16 lg:mt-20">
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            {t('faq.cta.text')}
          </p>
          <button
            onClick={() => {
              const contactSection = document.getElementById('contact');
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="bg-black text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-ring"
          >
            {t('faq.cta.button')}
          </button>
        </div>
      </div>
    </section>
  );
}
