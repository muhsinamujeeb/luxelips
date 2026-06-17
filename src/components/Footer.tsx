import { useRef } from 'react';
import {
  Instagram,
  Facebook,
  Youtube,
  MapPin,
  Phone,
  Mail,
  ChevronRight,
} from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useScrollAnimation';

export default function Footer() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(sectionRef);

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Products', href: '#products' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' },
  ];

  const categories = [
    { name: 'Matte Lipsticks', href: '#' },
    { name: 'Glossy Lipsticks', href: '#' },
    { name: 'Nude Collection', href: '#' },
    { name: 'Premium Collection', href: '#' },
  ];

  return (
    <footer
      id="contact"
      className="bg-gray-900 text-white relative overflow-hidden"
    >
      {/* Decorative gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-hot-pink/50 to-transparent" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-hot-pink/10 rounded-full filter blur-3xl -translate-y-1/2 translate-x-1/2" />

      <div ref={sectionRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Contact Form Section */}
        <div
          className={`mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-display font-bold mb-2">
              Get In <span className="text-gradient-luxe">Touch</span>
            </h2>
            <p className="text-gray-400">Have questions? We'd love to hear from you.</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert('Thank you for your message! We will get back to you soon.');
              }}
              className="space-y-6"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl focus:border-hot-pink focus:ring-2 focus:ring-hot-pink/20 outline-none transition-all"
                  required
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl focus:border-hot-pink focus:ring-2 focus:ring-hot-pink/20 outline-none transition-all"
                  required
                />
              </div>
              <input
                type="text"
                placeholder="Subject"
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl focus:border-hot-pink focus:ring-2 focus:ring-hot-pink/20 outline-none transition-all"
              />
              <textarea
                rows={5}
                placeholder="Your Message"
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl focus:border-hot-pink focus:ring-2 focus:ring-hot-pink/20 outline-none transition-all resize-none"
                required
              />
              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-3 bg-gradient-luxe text-white rounded-full font-semibold hover:shadow-luxe transition-all duration-300"
              >
                Send Message
              </button>
            </form>

            {/* Contact Info */}
            <div className="space-y-6">
              <h3 className="text-xl font-display font-bold">Contact Information</h3>
              <p className="text-gray-400">
                We're here to help with any questions about our products or orders.
                Reach out anytime!
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-hot-pink/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-hot-pink" />
                  </div>
                  <div>
                    <div className="font-medium">Address</div>
                    <div className="text-gray-400 text-sm">
                      123 Beauty Avenue, New York, NY 10001
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-hot-pink/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-hot-pink" />
                  </div>
                  <div>
                    <div className="font-medium">Phone</div>
                    <div className="text-gray-400 text-sm">+1 (555) 123-4567</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-hot-pink/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-hot-pink" />
                  </div>
                  <div>
                    <div className="font-medium">Email</div>
                    <div className="text-gray-400 text-sm">
                      hello@luxelips.com
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-4">
                <div className="font-medium mb-3">Follow Us</div>
                <div className="flex items-center gap-3">
                  {[
                    { icon: Instagram, href: 'https://instagram.com' },
                    { icon: Facebook, href: 'https://facebook.com' },
                    { icon: Youtube, href: 'https://youtube.com' },
                  ].map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-hot-pink hover:text-white transition-all duration-300"
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Links */}
        <div
          className={`border-t border-gray-800 pt-12 transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* About */}
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 rounded-full bg-gradient-luxe flex items-center justify-center">
                  <span className="text-white font-display font-bold text-sm">L</span>
                </div>
                <span className="font-display text-xl font-bold text-gradient-luxe">
                  Luxe Lips
                </span>
              </div>
              <p className="text-gray-400 text-sm mb-4">
                Premium luxury lipsticks designed to enhance your natural beauty.
                Cruelty-free, vegan, and long-lasting formulas.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-display font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-hot-pink transition-colors text-sm flex items-center space-x-1"
                    >
                      <ChevronRight className="w-3 h-3" />
                      <span>{link.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Categories */}
            <div>
              <h4 className="font-display font-bold mb-4">Categories</h4>
              <ul className="space-y-2">
                {categories.map((cat) => (
                  <li key={cat.name}>
                    <a
                      href={cat.href}
                      className="text-gray-400 hover:text-hot-pink transition-colors text-sm flex items-center space-x-1"
                    >
                      <ChevronRight className="w-3 h-3" />
                      <span>{cat.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Opening Hours */}
            <div>
              <h4 className="font-display font-bold mb-4">Opening Hours</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>9am - 6pm</span>
                </li>
                <li className="flex justify-between">
                  <span>Saturday</span>
                  <span>10am - 4pm</span>
                </li>
                <li className="flex justify-between">
                  <span>Sunday</span>
                  <span>Closed</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-400">
            <div>
              © 2026 Luxe Lips. All rights reserved. Made with love.
            </div>
            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-hot-pink transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-hot-pink transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
