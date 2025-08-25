"use client";

import { useTranslation } from "@/hooks/useTranslation";

export function Services() {
  const { t } = useTranslation();
  const services = [
    {
      title: t('services.items.dating_profile.title'),
      description: t('services.items.dating_profile.description'),
      features: t('services.items.dating_profile.features', { returnObjects: true }) as string[],
      image: "/profile-optimization.jpg"
    },
    {
      title: t('services.items.confidence_communication.title'),
      description: t('services.items.confidence_communication.description'),
      features: t('services.items.confidence_communication.features', { returnObjects: true }) as string[],
      image: "/confidence-communication.jpg"
    },
    {
      title: t('services.items.dating_strategy.title'),
      description: t('services.items.dating_strategy.description'),
      features: t('services.items.dating_strategy.features', { returnObjects: true }) as string[],
      image: "/strategy-mindset.jpg"
    },
    {
      title: t('services.items.style_presentation.title'),
      description: t('services.items.style_presentation.description'),
      features: t('services.items.style_presentation.features', { returnObjects: true }) as string[],
      image: "/style.jpg"
    },
    {
      title: t('services.items.text_messaging.title'),
      description: t('services.items.text_messaging.description'),
      features: t('services.items.text_messaging.features', { returnObjects: true }) as string[],
      image: "/text-game.jpg"
    },
    {
      title: t('services.items.real_world_practice.title'),
      description: t('services.items.real_world_practice.description'),
      features: t('services.items.real_world_practice.features', { returnObjects: true }) as string[],
      image: "/real-world.jpg"
    }
  ];

  return (
    <section id="services" className="bg-background">
      {/* Header */}
      <div className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-gray-900 mb-8 leading-tight">
              {t('services.heading')}
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              {t('services.subtitle')}
            </p>
          </div>
        </div>
      </div>

        {/* Services Features */}
        <div className="space-y-0">
          {services.map((service, index) => {
            const isEven = index % 2 === 0;
            const isDark = !isEven;

            return (
              <div
                key={index}
                className={`relative py-24 lg:py-32 overflow-hidden ${
                  isDark
                    ? 'bg-black'
                    : 'bg-transparent'
                }`}
              >


                {/* Dark overlay for better text readability */}
                {isDark && (
                  <div className="absolute inset-0 bg-black/20 z-10"></div>
                )}

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${isEven ? '' : 'lg:grid-flow-col-dense'}`}>
                    {/* Content */}
                    <div className={`space-y-8 ${isEven ? '' : 'lg:col-start-2'}`}>
                      <div className="space-y-6">
                        <h3 className={`text-3xl lg:text-4xl font-heading font-bold leading-tight ${
                          isDark ? 'text-white' : 'text-gray-900'
                        }`}>
                          {service.title}
                        </h3>
                        <p className={`text-xl leading-relaxed ${
                          isDark ? 'text-gray-300' : 'text-gray-600'
                        }`}>
                          {service.description}
                        </p>
                      </div>

                      <ul className="space-y-4">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className={`flex items-start ${
                            isDark ? 'text-gray-200' : 'text-gray-700'
                          }`}>
                            <div className={`w-2 h-2 rounded-full mt-3 mr-4 flex-shrink-0 ${
                              isDark ? 'bg-white' : 'bg-gray-900'
                            }`}></div>
                            <span className="text-lg leading-relaxed">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Image */}
                    <div className={`${isEven ? '' : 'lg:col-start-1'}`}>
                      <div className="relative">
                        <div className={`absolute inset-0 rounded-3xl transform rotate-3 ${
                          isDark
                            ? 'bg-gradient-to-br from-gray-600 to-gray-700'
                            : 'bg-gradient-to-br from-gray-100 to-gray-200'
                        }`}></div>
                        <div className="relative bg-white rounded-3xl p-4 shadow-xl">
                          <img
                            src={service.image}
                            alt={service.title}
                            className="w-full h-80 lg:h-96 object-cover rounded-2xl"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      {/* Bottom CTA */}
      <div className="py-24 lg:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              {t('services.cta.text')}
            </p>
            <button
              onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="bg-black text-white px-12 py-4 rounded-full font-semibold text-lg hover:bg-gray-800 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 shadow-lg"
            >
              {t('services.cta.button')}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
