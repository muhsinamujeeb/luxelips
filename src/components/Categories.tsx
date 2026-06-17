import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { categories } from '../data/products';
import { useIntersectionObserver } from '../hooks/useScrollAnimation';

interface CategoriesProps {
  onCategorySelect: (category: string) => void;
}

export default function Categories({ onCategorySelect }: CategoriesProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(sectionRef);

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-pink-50/30 to-white dark:from-gray-900 dark:via-gray-800/50 dark:to-gray-900" />

      <div ref={sectionRef} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <span className="inline-block px-4 py-2 rounded-full bg-hot-pink/10 text-hot-pink text-sm font-semibold mb-4">
            Explore Our Collections
          </span>
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-gray-900 dark:text-white mb-4">
            Featured <span className="text-gradient-luxe">Categories</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Discover our carefully curated collections designed for every mood,
            occasion, and style.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <div
              key={category.id}
              onClick={() => onCategorySelect(category.id)}
              className={`group relative overflow-hidden rounded-3xl cursor-pointer transition-all duration-700 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="aspect-[3/4] relative">
                {/* Image */}
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Glassmorphism Card */}
                <div
                  className="absolute inset-x-4 bottom-4 p-5 rounded-2xl glass dark:glass-dark transform transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-luxe"
                  style={{
                    backdropFilter: 'blur(20px)',
                  }}
                >
                  <h3 className="text-xl font-display font-bold text-gray-900 dark:text-white mb-2">
                    {category.name}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 line-clamp-2">
                    {category.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-hot-pink">
                      {category.productCount} Products
                    </span>
                    <div className="w-8 h-8 rounded-full bg-hot-pink/10 text-hot-pink flex items-center justify-center transition-all duration-300 group-hover:bg-hot-pink group-hover:text-white">
                      <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
