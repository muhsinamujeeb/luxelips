import { useRef } from 'react';
import { Instagram as InstagramIcon, ExternalLink } from 'lucide-react';
import { instagramImages } from '../data/products';
import { useIntersectionObserver } from '../hooks/useScrollAnimation';

export default function Instagram() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(sectionRef);

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div ref={sectionRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-12 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-gradient-luxe text-white text-sm font-semibold mb-4">
            <InstagramIcon className="w-4 h-4" />
            <span>@luxelips</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-gray-900 dark:text-white mb-4">
            Follow Us On <span className="text-gradient-luxe">Instagram</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Tag us with #LuxeLips for a chance to be featured!
          </p>
        </div>

        {/* Instagram Grid */}
        <div
          className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {instagramImages.map((image, index) => (
            <div
              key={index}
              className="group relative aspect-square overflow-hidden rounded-2xl cursor-pointer"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <img
                src={image}
                alt={`Instagram post ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center transform scale-50 group-hover:scale-100 transition-transform duration-300">
                  <ExternalLink className="w-5 h-5 text-hot-pink" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Follow Button */}
        <div
          className={`text-center mt-8 transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-luxe text-white rounded-full font-semibold shadow-luxe hover:shadow-luxe-lg transform hover:-translate-y-1 transition-all duration-300"
          >
            <InstagramIcon className="w-5 h-5" />
            <span>Follow @luxelips</span>
          </a>
        </div>
      </div>
    </section>
  );
}
