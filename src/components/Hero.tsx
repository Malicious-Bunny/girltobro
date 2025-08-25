"use client";

import { HeroSection } from "@/components/ui/dynamic-hero";
import { useTranslation } from "@/hooks/useTranslation";

export function Hero() {
  const { t } = useTranslation();

  const navItems = [
    {
      id: 'services',
      label: t('navigation.services'),
      href: '#services'
    },
    {
      id: 'about',
      label: t('navigation.about'),
      href: '#about'
    },
    {
      id: 'testimonials',
      label: t('navigation.testimonials'),
      href: '#testimonials'
    },
    {
      id: 'pricing',
      label: t('navigation.pricing'),
      href: '#pricing'
    },
    {
      id: 'language-switcher',
      label: t('navigation.language'),
      isLanguageSwitcher: true
    }
  ];

  const handleGetStarted = () => {
    // Scroll to pricing section
    const pricingSection = document.getElementById('pricing');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <HeroSection
      heading={t('hero.heading')}
      tagline={t('hero.tagline')}
      buttonText={t('hero.buttonText')}
      imageUrl="/hero.jpg"
      videoUrl="/hero-video.mp4"
      navItems={navItems}
      onButtonClick={handleGetStarted}
    />
  );
}
