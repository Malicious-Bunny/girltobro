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
      imageUrl="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2088&q=80"
      videoUrl="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
      navItems={navItems}
      onButtonClick={handleGetStarted}
    />
  );
}
