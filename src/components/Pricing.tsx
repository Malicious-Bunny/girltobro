"use client";

import { useTranslation } from "@/hooks/useTranslation";
import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

export function Pricing() {
  const { t } = useTranslation();
    // Container
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

  const plans = [
    {
      name: t('pricing.plans.clarity_call.name'),
      subtitle: t('pricing.plans.clarity_call.subtitle'),
      originalPrice: t('pricing.plans.clarity_call.original_price'),
      price: t('pricing.plans.clarity_call.price'),
      duration: t('pricing.plans.clarity_call.duration'),
      description: t('pricing.plans.clarity_call.description'),
      features: t('pricing.plans.clarity_call.features', { returnObjects: true }) as string[],
      cta: t('pricing.plans.clarity_call.cta'),
      popular: false,
      color: "gray"
    },
    {
      name: t('pricing.plans.dating_reset.name'),
      subtitle: t('pricing.plans.dating_reset.subtitle'),
      originalPrice: t('pricing.plans.dating_reset.original_price'),
      price: t('pricing.plans.dating_reset.price'),
      duration: t('pricing.plans.dating_reset.duration'),
      description: t('pricing.plans.dating_reset.description'),
      features: t('pricing.plans.dating_reset.features', { returnObjects: true }) as string[],
      cta: t('pricing.plans.dating_reset.cta'),
      popular: true,
      color: "blue"
    },
    {
      name: t('pricing.plans.full_transformation.name'),
      subtitle: t('pricing.plans.full_transformation.subtitle'),
      originalPrice: t('pricing.plans.full_transformation.original_price'),
      price: t('pricing.plans.full_transformation.price'),
      duration: t('pricing.plans.full_transformation.duration'),
      description: t('pricing.plans.full_transformation.description'),
      features: t('pricing.plans.full_transformation.features', { returnObjects: true }) as string[],
      cta: t('pricing.plans.full_transformation.cta'),
      popular: false,
      color: "black"
    }
  ];

  return (
    <section id="pricing" className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20 lg:mb-28">
          {/* Sale Banner */}
          <div className="mb-8">
            <span className="inline-block bg-red-100 text-red-800 px-6 py-3 rounded-full text-lg font-semibold border border-red-200">
              {t('pricing.sale_banner')}
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-gray-900 mb-8 leading-tight">
            {t('pricing.heading')}
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {t('pricing.subtitle')}
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-10">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-card border border-border rounded-2xl p-8 lg:p-10 hover:shadow-xl transition-all duration-300 ${
                plan.popular ? 'ring-2 ring-gray-900' : 'hover:-translate-y-2'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gray-900 text-white px-6 py-2 rounded-full text-sm font-semibold">
                    {t('pricing.popular_badge')}
                  </span>
                </div>
              )}

              <div className="text-center mb-10">
                <h3 className="text-2xl lg:text-3xl font-heading font-bold text-gray-900 mb-4">
                  {plan.name}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{plan.subtitle}</p>
                <div className="mb-6">
                  {/* Original Price (Strikethrough) */}
                  <div className="mb-2">
                    <span className="text-2xl text-gray-500 line-through">
                      {plan.originalPrice}
                    </span>
                  </div>
                  {/* Sale Price */}
                  <div>
                    <span className="text-4xl lg:text-5xl font-heading font-bold text-gray-900">
                      {plan.price}
                    </span>
                    <span className="text-gray-600 ml-2 text-lg">/ {plan.duration}</span>
                  </div>
                  <div className="mt-2">
                    <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                      50% OFF
                    </span>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed">{plan.description}</p>
              </div>

              <ul className="space-y-4 mb-10">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <div className="w-2 h-2 bg-gray-900 rounded-full flex-shrink-0 mt-2.5 mr-4"></div>
                    <span className="text-gray-700 leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>


              <button
              data-cal-link={
                `girltobro/${
                  index === 0 ? "clarity-call" : index === 1 ? "confidence-reset" : "the-full-transformation"
                }`
              } data-cal-config='{"theme":"light"}'
                className={`w-full py-4 rounded-full font-semibold text-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-ring ${
                  plan.popular || plan.color === 'black'
                    ? 'bg-black text-white hover:bg-gray-800'
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200 border border-border'
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="text-center mt-20 lg:mt-28">
          <p className="text-gray-600 mb-6 text-lg leading-relaxed">
            {t('pricing.bottom_note.sessions_note')}
          </p>
          <p className="text-gray-500 mb-4 leading-relaxed">
            {t('pricing.bottom_note.guarantee')}
          </p>
          <p className="text-red-600 font-medium leading-relaxed">
            {t('pricing.bottom_note.sale_note')}
          </p>
        </div>
      </div>
    </section>
  );
}
