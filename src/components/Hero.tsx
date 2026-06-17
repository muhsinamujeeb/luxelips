import { Sparkles, ArrowRight } from 'lucide-react';

interface HeroProps {
  onShopNow: () => void;
}

export default function Hero({ onShopNow }: HeroProps) {
  const handleExploreShades = () => {
    const element = document.querySelector('#shades');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-20"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-50 via-white to-rose-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-hero opacity-50" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-hot-pink/20 rounded-full filter blur-3xl animate-pulse-slow" />
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-rose-gold/20 rounded-full filter blur-3xl animate-pulse-slow delay-1000" />

      {/* Floating Particles */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-hot-pink/40 rounded-full animate-float" />
      <div className="absolute top-40 right-20 w-3 h-3 bg-rose-gold/40 rounded-full animate-float-delayed" />
      <div className="absolute bottom-40 left-1/4 w-2 h-2 bg-hot-pink/30 rounded-full animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/3 right-1/3 w-5 h-5 bg-rose-gold/30 rounded-full animate-float-delayed" style={{ animationDelay: '2s' }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left space-y-8 animate-fade-in-up">
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-hot-pink/10 border border-hot-pink/20">
              <Sparkles className="w-4 h-4 text-hot-pink" />
              <span className="text-sm font-medium text-hot-pink">
                New Collection 2026
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold leading-tight">
              <span className="text-gray-900 dark:text-white">Reveal Your</span>
              <br />
              <span className="text-gradient-luxe">Perfect Shade</span>
            </h1>

            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-xl mx-auto lg:mx-0">
              Luxury lipsticks designed to enhance your natural beauty.
              Experience the perfect blend of color, comfort, and lasting
              elegance.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <button
                onClick={onShopNow}
                className="group px-8 py-4 bg-gradient-luxe text-white rounded-full font-semibold text-lg shadow-luxe hover:shadow-luxe-lg transform hover:-translate-y-1 transition-all duration-300 btn-glow"
              >
                <span className="flex items-center space-x-2">
                  <span>Shop Now</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>

              <button
                onClick={handleExploreShades}
                className="group px-8 py-4 bg-transparent border-2 border-hot-pink text-hot-pink rounded-full font-semibold text-lg hover:bg-hot-pink hover:text-white transform hover:-translate-y-1 transition-all duration-300"
              >
                <span className="flex items-center space-x-2">
                  <span>Explore Shades</span>
                </span>
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200 dark:border-gray-700">
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-gradient-luxe">500+</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  Shades Available
                </div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-gradient-luxe">50K+</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  Happy Customers
                </div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-gradient-luxe">4.9</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  Average Rating
                </div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative lg:ml-12 animate-fade-in-down">
            <div className="relative">
              {/* Main Image Container */}
              <div className="relative w-full aspect-square max-w-lg mx-auto">
                {/* Background Glow */}
                <div className="absolute inset-0 bg-gradient-luxe rounded-full opacity-20 blur-3xl animate-pulse-slow" />

                {/* Lipstick Image */}
                <div className="relative z-10 w-full h-full flex items-center justify-center">
                  <div className="relative animate-float">
                    <img
                      src="https://images.pexels.com/photos/2589018/pexels-photo-2589018.jpeg?auto=compress&cs=tinysrgb&w=600"
                      alt="Luxury Lipstick"
                      className="w-full h-full object-cover rounded-3xl shadow-2xl"
                    />
                    {/* Shine Effect */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent rounded-3xl" />
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-4 flex flex-col items-center justify-center animate-float-delayed">
                  <div className="text-2xl font-bold text-hot-pink">25%</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">OFF</div>
                </div>

                <div className="absolute -bottom-4 -left-4 w-32 h-24 bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-4 animate-float">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 rounded-full bg-hot-pink" />
                    <div>
                      <div className="text-sm font-semibold text-gray-900 dark:text-white">
                        Ruby Red
                      </div>
                      <div className="text-xs text-gray-500">Best Seller</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-gray-400 mb-2">Scroll</span>
        <div className="w-6 h-10 rounded-full border-2 border-gray-300 dark:border-gray-600 flex items-start justify-center p-1">
          <div className="w-1.5 h-3 bg-hot-pink rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}
