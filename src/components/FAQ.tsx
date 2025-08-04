"use client";

import { useState } from "react";
import { useTranslation } from "@/hooks/useTranslation";

export function FAQ() {
  const { t } = useTranslation();
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);

  const faqs = t('faq.items', { returnObjects: true }) as Array<{question: string, answer: string}>;

  return (
    <section id="faq" className="py-24 lg:py-32 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20 lg:mb-28">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-gray-900 mb-8 leading-tight">
            {t('faq.heading')}
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            {t('faq.subtitle')}
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-card border border-border rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300">
              <button
                onClick={() => setOpenQuestion(openQuestion === index ? null : index)}
                className="w-full text-left p-8 hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-ring"
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg lg:text-xl font-heading font-bold text-gray-900 pr-6 leading-tight">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    <svg
                      className={`w-6 h-6 text-gray-500 transform transition-transform duration-300 ${
                        openQuestion === index ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </button>
              {openQuestion === index && (
                <div className="px-8 pb-8 animate-in slide-in-from-top-2 duration-300">
                  <div className="h-px bg-border mb-6"></div>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20 lg:mt-28">
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            {t('faq.cta.text')}
          </p>
          <button className="bg-black text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-ring">
            {t('faq.cta.button')}
          </button>
        </div>
      </div>
    </section>
  );
}
