'use client';

import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
    setIsMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    setIsMenuOpen(false);
  };

  return (
    <nav className="w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-2 group"
          >
            <div className="w-8 h-8 bg-rose-500 rounded-full group-hover:scale-110 transition-transform"></div>
            <span className="text-2xl font-bold text-gray-800 dark:text-white group-hover:text-rose-500 transition-colors">
              Diaryku
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={scrollToTop}
              className="text-gray-600 hover:text-rose-500 dark:text-gray-300 dark:hover:text-rose-400 transition-colors font-medium"
            >
              Beranda
            </button>
            <button
              onClick={() => scrollToSection('cerita')}
              className="text-gray-600 hover:text-rose-500 dark:text-gray-300 dark:hover:text-rose-400 transition-colors font-medium"
            >
              Cerita Saya
            </button>
            <button
              onClick={() => scrollToSection('galeri')}
              className="text-gray-600 hover:text-rose-500 dark:text-gray-300 dark:hover:text-rose-400 transition-colors font-medium"
            >
              Galeri Foto
            </button>
            <button
              onClick={() => scrollToSection('tentang')}
              className="text-gray-600 hover:text-rose-500 dark:text-gray-300 dark:hover:text-rose-400 transition-colors font-medium"
            >
              Tentang
            </button>
          </div>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={() => scrollToSection('cerita')}
              className="bg-rose-500 hover:bg-rose-600 text-white px-4 py-2 rounded-full transition-colors font-medium"
            >
              Baca Cerita
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-md text-gray-600 hover:text-rose-500 dark:text-gray-300 dark:hover:text-rose-400 transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button
                onClick={scrollToTop}
                className="block w-full text-left px-3 py-2 text-gray-600 hover:text-rose-500 dark:text-gray-300 dark:hover:text-rose-400 transition-colors font-medium"
              >
                Beranda
              </button>
              <button
                onClick={() => scrollToSection('cerita')}
                className="block w-full text-left px-3 py-2 text-gray-600 hover:text-rose-500 dark:text-gray-300 dark:hover:text-rose-400 transition-colors font-medium"
              >
                Cerita Saya
              </button>
              <button
                onClick={() => scrollToSection('galeri')}
                className="block w-full text-left px-3 py-2 text-gray-600 hover:text-rose-500 dark:text-gray-300 dark:hover:text-rose-400 transition-colors font-medium"
              >
                Galeri Foto
              </button>
              <button
                onClick={() => scrollToSection('tentang')}
                className="block w-full text-left px-3 py-2 text-gray-600 hover:text-rose-500 dark:text-gray-300 dark:hover:text-rose-400 transition-colors font-medium"
              >
                Tentang
              </button>
              <div className="border-t border-gray-200 dark:border-gray-700 pt-2 mt-2">
                <button
                  onClick={() => scrollToSection('cerita')}
                  className="block w-full px-3 py-2 bg-rose-500 hover:bg-rose-600 text-white rounded-md transition-colors font-medium text-center"
                >
                  Baca Cerita
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}