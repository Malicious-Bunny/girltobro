"use client";

import { useTranslation } from "@/hooks/useTranslation";

export function Services() {
  const { t } = useTranslation();
  const services = [
    {
      title: t('services.items.dating_profile.title'),
      description: t('services.items.dating_profile.description'),
      features: t('services.items.dating_profile.features', { returnObjects: true }) as string[],
      image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: t('services.items.confidence_communication.title'),
      description: t('services.items.confidence_communication.description'),
      features: t('services.items.confidence_communication.features', { returnObjects: true }) as string[],
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: t('services.items.dating_strategy.title'),
      description: t('services.items.dating_strategy.description'),
      features: t('services.items.dating_strategy.features', { returnObjects: true }) as string[],
      image: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: t('services.items.style_presentation.title'),
      description: t('services.items.style_presentation.description'),
      features: t('services.items.style_presentation.features', { returnObjects: true }) as string[],
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: t('services.items.text_messaging.title'),
      description: t('services.items.text_messaging.description'),
      features: t('services.items.text_messaging.features', { returnObjects: true }) as string[],
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: t('services.items.real_world_practice.title'),
      description: t('services.items.real_world_practice.description'),
      features: t('services.items.real_world_practice.features', { returnObjects: true }) as string[],
      image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section id="services" className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20 lg:mb-32">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-gray-900 mb-8 leading-tight">
            {t('services.heading')}
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {t('services.subtitle')}
          </p>
        </div>

        {/* Services Features */}
        <div className="space-y-24 lg:space-y-32">
          {services.map((service, index) => {
            const isEven = index % 2 === 0;

            return (
              <div key={index} className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${isEven ? '' : 'lg:grid-flow-col-dense'}`}>
                {/* Content */}
                <div className={`space-y-8 ${isEven ? '' : 'lg:col-start-2'}`}>
                  <div className="space-y-6">
                    <h3 className="text-3xl lg:text-4xl font-heading font-bold text-gray-900 leading-tight">
                      {service.title}
                    </h3>
                    <p className="text-xl text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  <ul className="space-y-4">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start text-gray-700">
                        <div className="w-2 h-2 bg-gray-900 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                        <span className="text-lg leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>


                </div>

                {/* Image */}
                <div className={`${isEven ? '' : 'lg:col-start-1'}`}>
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl transform rotate-3"></div>
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
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-24 lg:mt-32">
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            {t('services.cta.text')}
          </p>
          <button className="bg-black text-white px-12 py-4 rounded-full font-semibold text-lg hover:bg-gray-800 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 shadow-lg">
            {t('services.cta.button')}
          </button>
        </div>
      </div>
    </section>
  );
}
