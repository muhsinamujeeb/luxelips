import { useRef, useState } from 'react';
import { Mail, Gift, Check } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useScrollAnimation';

export default function Newsletter() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(sectionRef);

  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setTimeout(() => setIsSubscribed(false), 3000);
      setEmail('');
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-pink-50 via-white to-rose-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div ref={sectionRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`max-w-3xl mx-auto text-center transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-hot-pink/10 mb-6">
            <Mail className="w-8 h-8 text-hot-pink" />
          </div>

          {/* Heading */}
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-gray-900 dark:text-white mb-4">
            Subscribe To Our <span className="text-gradient-luxe">Beauty Updates</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
            Be the first to know about new collections, exclusive offers, and
            expert beauty tips delivered straight to your inbox.
          </p>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row items-center gap-4 max-w-xl mx-auto"
          >
            <div className="relative flex-1 w-full">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="w-full pl-12 pr-4 py-4 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:border-hot-pink focus:ring-2 focus:ring-hot-pink/20 outline-none transition-all duration-300 text-gray-900 dark:text-white"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full sm:w-auto px-8 py-4 bg-gradient-luxe text-white rounded-full font-semibold shadow-luxe hover:shadow-luxe-lg transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center space-x-2"
            >
              {isSubscribed ? (
                <>
                  <Check className="w-5 h-5" />
                  <span>Subscribed!</span>
                </>
              ) : (
                <>
                  <Gift className="w-5 h-5" />
                  <span>Subscribe</span>
                </>
              )}
            </button>
          </form>

          {/* Benefits */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500 dark:text-gray-400">
            <div className="flex items-center space-x-2">
              <Check className="w-4 h-4 text-green-500" />
              <span>Exclusive offers</span>
            </div>
            <div className="flex items-center space-x-2">
              <Check className="w-4 h-4 text-green-500" />
              <span>New arrivals first</span>
            </div>
            <div className="flex items-center space-x-2">
              <Check className="w-4 h-4 text-green-500" />
              <span>Beauty tips & tutorials</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
