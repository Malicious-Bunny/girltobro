"use client";

import { useTranslation } from "@/hooks/useTranslation";

export function About() {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-24 lg:py-32 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Text Content */}
          <div className="space-y-10">
            <div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-gray-900 mb-8 leading-tight">
                {t('about.heading')}
              </h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                {(t('about.paragraphs', { returnObjects: true }) as string[]).map((paragraph, index) => (
                  <p key={index}>
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-background border border-border rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-300">
                <div className="text-4xl lg:text-5xl font-heading font-bold text-gray-900 mb-3">{t('about.stats.men_coached.number')}</div>
                <div className="text-gray-600 font-medium">{t('about.stats.men_coached.label')}</div>
              </div>
              <div className="bg-background border border-border rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-300">
                <div className="text-4xl lg:text-5xl font-heading font-bold text-gray-900 mb-3">{t('about.stats.find_relationships.number')}</div>
                <div className="text-gray-600 font-medium">{t('about.stats.find_relationships.label')}</div>
              </div>
            </div>
          </div>

          {/* Visual Content */}
          <div className="space-y-8">
            <div className="bg-background border border-border rounded-2xl p-8 lg:p-10">
              <h3 className="text-2xl lg:text-3xl font-heading font-bold text-gray-900 mb-8">
                {t('about.approach.heading')}
              </h3>
              <div className="space-y-6">
                {(t('about.approach.items', { returnObjects: true }) as Array<{title: string, description: string}>).map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-gray-900 rounded-full flex-shrink-0 mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2 text-lg">{item.title}</h4>
                      <p className="text-gray-600 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-black rounded-2xl p-8 lg:p-10 text-white">
              <h3 className="text-2xl lg:text-3xl font-heading font-bold mb-6">
                {t('about.male_loneliness.heading')}
              </h3>
              <p className="text-gray-200 leading-relaxed text-lg">
                {t('about.male_loneliness.description')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
