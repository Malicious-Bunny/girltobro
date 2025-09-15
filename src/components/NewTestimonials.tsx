"use client";

import { TestimonialsColumn } from "@/components/ui/testimonials-columns-1";
import { motion } from "motion/react";
import { useTranslation } from "@/hooks/useTranslation";

interface Testimonial {
  text: string;
  image: string;
  name: string;
  role: string;
}

export function NewTestimonials() {
  const { t } = useTranslation();

  const testimonials = t('testimonials.items', { returnObjects: true }) as Testimonial[];

  // Add images to testimonials (since they're not in the translation file)
  const testimonialsWithImages = testimonials.map((testimonial, index) => ({
    ...testimonial,
    image: [
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      "https://images.unsplash.com/photo-1521119989659-a83eee488004?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      "https://images.unsplash.com/photo-1540569014015-19a7be504e3a?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    ][index % 9]
  }));

  const firstColumn = testimonialsWithImages.slice(0, 3);
  const secondColumn = testimonialsWithImages.slice(3, 6);
  const thirdColumn = testimonialsWithImages.slice(6, 9);

  return (
    <section id="testimonials" className="py-24 lg:py-32 bg-background relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[540px] mx-auto mb-16"
        >
          <div className="flex justify-center mb-6">
            <div className="border border-gray-200 py-2 px-6 rounded-full text-sm font-medium text-gray-600">
              {t('testimonials.badge')}
            </div>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-gray-900 text-center leading-tight">
            {t('testimonials.heading')}
          </h2>
          <p className="text-center mt-6 text-xl text-gray-600 leading-relaxed">
            {t('testimonials.subtitle')}
          </p>
        </motion.div>

        <div className="flex justify-center gap-6 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
        </div>
      </div>
    </section>
  );
}
