"use client";

import { useState } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="text-2xl font-bold text-gray-900">
            HerWisdom
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-gray-700 hover:text-gray-900 transition-colors">
              Services
            </a>
            <a href="#about" className="text-gray-700 hover:text-gray-900 transition-colors">
              About
            </a>
            <a href="#testimonials" className="text-gray-700 hover:text-gray-900 transition-colors">
              Stories
            </a>
            <a href="#pricing" className="text-gray-700 hover:text-gray-900 transition-colors">
              Pricing
            </a>
            <a href="#faq" className="text-gray-700 hover:text-gray-900 transition-colors">
              FAQ
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button className="bg-black text-white px-6 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors">
              Book Session
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col space-y-4">
              <a href="#services" className="text-gray-700 hover:text-gray-900 transition-colors">
                Services
              </a>
              <a href="#about" className="text-gray-700 hover:text-gray-900 transition-colors">
                About
              </a>
              <a href="#testimonials" className="text-gray-700 hover:text-gray-900 transition-colors">
                Stories
              </a>
              <a href="#pricing" className="text-gray-700 hover:text-gray-900 transition-colors">
                Pricing
              </a>
              <a href="#faq" className="text-gray-700 hover:text-gray-900 transition-colors">
                FAQ
              </a>
              <button className="bg-black text-white px-6 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors w-full">
                Book Session
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
