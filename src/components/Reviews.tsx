import { useRef, useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { reviews } from '../data/products';
import { useIntersectionObserver } from '../hooks/useScrollAnimation';

export default function Reviews() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(sectionRef);

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section id="reviews" className="py-20 bg-white dark:bg-gray-900">
      <div ref={sectionRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-12 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <span className="inline-block px-4 py-2 rounded-full bg-hot-pink/10 text-hot-pink text-sm font-semibold mb-4">
            Testimonials
          </span>
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-gray-900 dark:text-white mb-4">
            What Our Customers <span className="text-gradient-luxe">Say</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Real stories from real beauty lovers who found their perfect shade with Luxe Lips.
          </p>
        </div>

        {/* Reviews Carousel */}
        <div
          className={`relative max-w-4xl mx-auto transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Main Review Card */}
          <div className="bg-gradient-to-br from-pink-50 to-rose-50 dark:from-gray-800 dark:to-gray-800 rounded-3xl p-8 lg:p-12 relative overflow-hidden">
            {/* Quote Icon */}
            <Quote className="absolute top-8 right-8 w-16 h-16 text-hot-pink/10" />

            {/* Review Content */}
            <div className="relative">
              {/* Stars */}
              <div className="flex items-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-6 h-6 ${
                      i < reviews[currentIndex].rating
                        ? 'text-yellow-400 fill-current'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-xl lg:text-2xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8 font-display italic">
                "{reviews[currentIndex].reviewText}"
              </p>

              {/* Customer Info */}
              <div className="flex items-center gap-4">
                <img
                  src={reviews[currentIndex].customerImage}
                  alt={reviews[currentIndex].customerName}
                  className="w-14 h-14 rounded-full object-cover ring-4 ring-white dark:ring-gray-700 shadow-lg"
                />
                <div>
                  <div className="text-lg font-bold text-gray-900 dark:text-white">
                    {reviews[currentIndex].customerName}
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    Verified Buyer
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
              {/* Pagination Dots */}
              <div className="flex items-center gap-2">
                {reviews.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? 'w-8 bg-hot-pink'
                        : 'bg-gray-300 dark:bg-gray-600 hover:bg-hot-pink/50'
                    }`}
                  />
                ))}
              </div>

              {/* Arrow Buttons */}
              <div className="flex items-center gap-2">
                <button
                  onClick={prevReview}
                  className="w-10 h-10 rounded-full bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 shadow-lg hover:shadow-xl hover:bg-hot-pink hover:text-white transition-all duration-300 flex items-center justify-center"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextReview}
                  className="w-10 h-10 rounded-full bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 shadow-lg hover:shadow-xl hover:bg-hot-pink hover:text-white transition-all duration-300 flex items-center justify-center"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Decorative Cards */}
          <div className="hidden lg:block absolute -left-20 top-1/4 w-48 h-32 bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-4 -rotate-6 animate-float">
            <div className="flex items-center gap-2 mb-2">
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
              <span className="text-sm font-bold text-gray-900 dark:text-white">5.0</span>
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400 line-clamp-3">
              "Absolutely love this lipstick! Best purchase ever."
            </p>
          </div>

          <div className="hidden lg:block absolute -right-16 bottom-1/4 w-48 h-32 bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-4 rotate-6 animate-float-delayed">
            <div className="flex items-center gap-2 mb-2">
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
              <span className="text-sm font-bold text-gray-900 dark:text-white">4.9</span>
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400 line-clamp-3">
              "The colors are stunning and last all day!"
            </p>
          </div>
        </div>

        {/* Rating Summary */}
        <div
          className={`mt-12 grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto transition-all duration-1000 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-2xl">
            <div className="text-3xl font-bold text-gradient-luxe mb-1">4.9</div>
            <div className="flex items-center justify-center gap-1 mb-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-4 h-4 text-yellow-400 fill-current"
                />
              ))}
            </div>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              Average Rating
            </div>
          </div>
          <div className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-2xl">
            <div className="text-3xl font-bold text-gradient-luxe mb-1">50K+</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              Happy Customers
            </div>
          </div>
          <div className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-2xl">
            <div className="text-3xl font-bold text-gradient-luxe mb-1">12K+</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              5-Star Reviews
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
