"use client";

import { useTranslation } from "@/hooks/useTranslation";
import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

export function Contact() {
  const { t } = useTranslation();

  useEffect(() => {
    (async function () {
      const cal = await getCalApi();
      cal("ui", {
        theme: "dark",
        styles: {
          branding: { brandColor: "#000000" },
        },
      });
    })();
  }, []);

  return (
    <section id="contact" className="py-24 lg:py-32 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Text Content */}
          <div className="space-y-10">
            <div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold mb-8 leading-tight">
                {t('contact.heading')}
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                {t('contact.subtitle')}
              </p>
            </div>

            <div className="space-y-6">
              {(t('contact.benefits', { returnObjects: true }) as string[]).map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-white rounded-full flex-shrink-0 mt-2"></div>
                  <span className="text-gray-300 leading-relaxed text-lg">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Card */}
          <div className="bg-white rounded-2xl p-8 lg:p-10 text-gray-900 border border-gray-200">
            <h3 className="text-2xl lg:text-3xl font-heading font-bold mb-8">
              {t('contact.clarity_call.heading')}
            </h3>
            <div className="space-y-6 mb-10">
              <div className="flex items-center justify-between py-4 border-b border-gray-100">
                <span className="font-medium text-lg">{t('contact.clarity_call.details.duration.label')}</span>
                <span className="text-gray-600">{t('contact.clarity_call.details.duration.value')}</span>
              </div>
              <div className="flex items-center justify-between py-4 border-b border-gray-100">
                <span className="font-medium text-lg">{t('contact.clarity_call.details.investment.label')}</span>
                <span className="text-gray-900 font-bold text-xl">{t('contact.clarity_call.details.investment.value')}</span>
              </div>
              <div className="flex items-center justify-between py-4 border-b border-gray-100">
                <span className="font-medium text-lg">{t('contact.clarity_call.details.format.label')}</span>
                <span className="text-gray-600">{t('contact.clarity_call.details.format.value')}</span>
              </div>
            </div>

            <button
             data-cal-link="girltobro/clarity-call"
            data-cal-config='{"theme":"light"}'
            className="w-full bg-black text-white py-4 rounded-full font-semibold text-lg hover:bg-gray-800 transition-colors mb-6 focus:outline-none focus:ring-2 focus:ring-ring">
              {t('contact.clarity_call.button')}
            </button>

            <p className="text-gray-500 text-center leading-relaxed">
              {t('contact.clarity_call.description')}
            </p>
          </div>
        </div>


      </div>
    </section>
  );
}
