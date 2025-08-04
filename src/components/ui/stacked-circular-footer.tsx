"use client"

import { Icons } from "@/components/ui/icons"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"
import { useTranslation } from "@/hooks/useTranslation"

function StackedCircularFooter() {
  const { t } = useTranslation();

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle email subscription logic here
    console.log('Email subscription submitted')
  }

  return (
    <footer className="bg-background py-20 lg:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center">
          {/* Logo */}


          {/* Navigation */}
          <nav className="mb-12 flex flex-wrap justify-center gap-8 text-lg">
            <a href="#services" className="text-gray-600 hover:text-gray-900 transition-colors duration-200 font-medium">
              {t('footer.navigation.services')}
            </a>
            <a href="#about" className="text-gray-600 hover:text-gray-900 transition-colors duration-200 font-medium">
              {t('footer.navigation.about')}
            </a>
            <a href="#testimonials" className="text-gray-600 hover:text-gray-900 transition-colors duration-200 font-medium">
              {t('footer.navigation.testimonials')}
            </a>
            <a href="#pricing" className="text-gray-600 hover:text-gray-900 transition-colors duration-200 font-medium">
              {t('footer.navigation.pricing')}
            </a>
            <a href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors duration-200 font-medium">
              {t('footer.navigation.contact')}
            </a>
          </nav>

          {/* Social Media */}
          <div className="mb-12 flex space-x-4">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-gray-300 hover:border-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-300"
            >
              <Facebook className="h-5 w-5" />
              <span className="sr-only">{t('footer.social.facebook')}</span>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-gray-300 hover:border-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-300"
            >
              <Twitter className="h-5 w-5" />
              <span className="sr-only">{t('footer.social.twitter')}</span>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-gray-300 hover:border-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-300"
            >
              <Instagram className="h-5 w-5" />
              <span className="sr-only">{t('footer.social.instagram')}</span>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-gray-300 hover:border-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-300"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">{t('footer.social.linkedin')}</span>
            </Button>
          </div>

          {/* Newsletter Signup */}
          <div className="mb-12 w-full max-w-md">
            <div className="text-center mb-6">
              <h3 className="text-xl font-heading font-bold text-gray-900 mb-2">
                {t('footer.newsletter.heading')}
              </h3>
              <p className="text-gray-600">
                {t('footer.newsletter.subtitle')}
              </p>
            </div>
            <form onSubmit={handleEmailSubmit} className="flex space-x-3">
              <div className="flex-grow">
                <Label htmlFor="email" className="sr-only">Email</Label>
                <Input
                  id="email"
                  placeholder={t('footer.newsletter.email_placeholder')}
                  type="email"
                  className="rounded-full border-gray-300 focus:border-gray-900 focus:ring-gray-900"
                  required
                />
              </div>
              <Button
                type="submit"
                className="rounded-full bg-gray-900 hover:bg-gray-800 text-white px-8 transition-all duration-300 hover:scale-105"
              >
                {t('footer.newsletter.subscribe_button')}
              </Button>
            </form>
          </div>

          {/* Copyright */}
          <div className="text-center">
            <p className="text-sm text-gray-500">
              {t('footer.copyright.text')} |
              <a href="#" className="hover:text-gray-700 ml-1">{t('footer.copyright.privacy')}</a> |
              <a href="#" className="hover:text-gray-700 ml-1">{t('footer.copyright.terms')}</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export { StackedCircularFooter }
