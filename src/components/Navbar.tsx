import { useState, useEffect } from 'react';
import {
  Search,
  ShoppingBag,
  Heart,
  Menu,
  X,
  Moon,
  Sun,
  User,
  Home,
  Info,
  ShoppingBag as Products,
  Palette,
  MessageSquare,
  BookOpen,
  Mail,
} from 'lucide-react';
import { Theme } from '../types';

interface NavbarProps {
  theme: Theme;
  toggleTheme: () => void;
  cartCount: number;
  wishlistCount: number;
  onCartClick: () => void;
  onSearchClick: () => void;
}

const navLinks = [
  { name: 'Home', href: '#home', icon: Home },
  { name: 'About', href: '#about', icon: Info },
  { name: 'Products', href: '#products', icon: Products },
  { name: 'Shades', href: '#shades', icon: Palette },
  { name: 'Reviews', href: '#reviews', icon: MessageSquare },
  { name: 'Blog', href: '#blog', icon: BookOpen },
  { name: 'Contact', href: '#contact', icon: Mail },
];

export default function Navbar({
  theme,
  toggleTheme,
  cartCount,
  wishlistCount,
  onCartClick,
  onSearchClick,
}: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? theme === 'dark'
              ? 'glass-dark shadow-glass-dark'
              : 'glass shadow-glass py-2'
            : 'bg-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              href="#home"
              onClick={() => handleNavClick('#home')}
              className="flex items-center space-x-2 group"
            >
              <div className="w-10 h-10 rounded-full bg-gradient-luxe flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
                <span className="text-white font-display font-bold text-lg">L</span>
              </div>
              <span className="font-display text-2xl font-bold text-gradient-luxe">
                Luxe Lips
              </span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:bg-hot-pink/10 hover:text-hot-pink ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Right Icons */}
            <div className="flex items-center space-x-2">
              {/* Search */}
              <button
                onClick={onSearchClick}
                className={`p-2 rounded-full transition-all duration-300 hover:bg-hot-pink/10 hover:text-hot-pink ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                }`}
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </button>

              {/* Wishlist */}
              <button
                className={`relative p-2 rounded-full transition-all duration-300 hover:bg-hot-pink/10 hover:text-hot-pink ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                }`}
                aria-label="Wishlist"
              >
                <Heart className="w-5 h-5" />
                {wishlistCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-hot-pink text-white text-xs rounded-full flex items-center justify-center font-semibold">
                    {wishlistCount}
                  </span>
                )}
              </button>

              {/* Cart */}
              <button
                onClick={onCartClick}
                className={`relative p-2 rounded-full transition-all duration-300 hover:bg-hot-pink/10 hover:text-hot-pink ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                }`}
                aria-label="Shopping cart"
              >
                <ShoppingBag className="w-5 h-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-hot-pink text-white text-xs rounded-full flex items-center justify-center font-semibold">
                    {cartCount}
                  </span>
                )}
              </button>

              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-full transition-all duration-300 hover:bg-hot-pink/10 hover:text-hot-pink ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                }`}
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? (
                  <Sun className="w-5 h-5" />
                ) : (
                  <Moon className="w-5 h-5" />
                )}
              </button>

              {/* User Account */}
              <button
                className={`hidden sm:block p-2 rounded-full transition-all duration-300 hover:bg-hot-pink/10 hover:text-hot-pink ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                }`}
                aria-label="Account"
              >
                <User className="w-5 h-5" />
              </button>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`lg:hidden p-2 rounded-full transition-all duration-300 hover:bg-hot-pink/10 hover:text-hot-pink ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                }`}
                aria-label="Menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
          isMobileMenuOpen ? 'visible' : 'invisible'
        }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-500 ${
            isMobileMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Menu Panel */}
        <div
          className={`absolute top-0 right-0 h-full w-72 transition-transform duration-500 ${
            theme === 'dark' ? 'bg-luxury-black' : 'bg-white'
          } ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
        >
          <div className="p-6 pt-20">
            <div className="space-y-2">
              {navLinks.map((link, index) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300 hover:bg-hot-pink/10 hover:text-hot-pink ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                  }`}
                  style={{
                    transitionDelay: isMobileMenuOpen
                      ? `${index * 50}ms`
                      : '0ms',
                  }}
                >
                  <link.icon className="w-5 h-5" />
                  <span className="font-medium">{link.name}</span>
                </a>
              ))}
            </div>

            {/* Mobile Bottom Section */}
            <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-center space-x-4">
                <button
                  onClick={onSearchClick}
                  className="p-3 rounded-full bg-hot-pink/10 text-hot-pink"
                >
                  <Search className="w-5 h-5" />
                </button>
                <button className="p-3 rounded-full bg-hot-pink/10 text-hot-pink relative">
                  <Heart className="w-5 h-5" />
                  {wishlistCount > 0 && (
                    <span className="absolute -top-1 -right-1 w-5 h-5 bg-hot-pink text-white text-xs rounded-full flex items-center justify-center">
                      {wishlistCount}
                    </span>
                  )}
                </button>
                <button
                  onClick={onCartClick}
                  className="p-3 rounded-full bg-hot-pink/10 text-hot-pink relative"
                >
                  <ShoppingBag className="w-5 h-5" />
                  {cartCount > 0 && (
                    <span className="absolute -top-1 -right-1 w-5 h-5 bg-hot-pink text-white text-xs rounded-full flex items-center justify-center">
                      {cartCount}
                    </span>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
