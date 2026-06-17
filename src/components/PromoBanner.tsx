import { useRef, useState, useEffect } from 'react';
import { Clock, ArrowRight } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useScrollAnimation';

export default function PromoBanner() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(sectionRef);

  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return { hours: 23, minutes: 59, seconds: 59 };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleShopNow = () => {
    const element = document.querySelector('#products');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      ref={sectionRef}
      className="py-20 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/2589018/pexels-photo-2589018.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-hot-pink/90 via-hot-pink-dark/80 to-rose-gold/90" />
      </div>

      {/* Content */}
      <div
        className={`relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="text-center text-white">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 mb-6">
            <span className="text-sm font-semibold">Limited Time Offer</span>
          </div>

          {/* Heading */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-6">
            Flat <span className="text-yellow-300">25% Off</span>
            <br />
            On New Collection
          </h2>

          {/* Countdown Timer */}
          <div className="flex justify-center items-center gap-4 mb-8">
            <div className="flex items-center space-x-2 text-white/80">
              <Clock className="w-5 h-5" />
              <span className="font-medium">Ends in:</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-white/20 backdrop-blur-sm rounded-xl px-4 py-3 min-w-[80px] border border-white/30">
                <div className="text-2xl font-bold">
                  {String(timeLeft.hours).padStart(2, '0')}
                </div>
                <div className="text-xs opacity-80">Hours</div>
              </div>
              <span className="text-2xl font-bold">:</span>
              <div className="bg-white/20 backdrop-blur-sm rounded-xl px-4 py-3 min-w-[80px] border border-white/30">
                <div className="text-2xl font-bold">
                  {String(timeLeft.minutes).padStart(2, '0')}
                </div>
                <div className="text-xs opacity-80">Minutes</div>
              </div>
              <span className="text-2xl font-bold">:</span>
              <div className="bg-white/20 backdrop-blur-sm rounded-xl px-4 py-3 min-w-[80px] border border-white/30">
                <div className="text-2xl font-bold">
                  {String(timeLeft.seconds).padStart(2, '0')}
                </div>
                <div className="text-xs opacity-80">Seconds</div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <button
            onClick={handleShopNow}
            className="group inline-flex items-center space-x-2 px-8 py-4 bg-white text-hot-pink rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
          >
            <span>Shop Now</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 border-4 border-white/20 rounded-full animate-pulse-slow" />
      <div className="absolute bottom-10 right-10 w-32 h-32 border-4 border-white/20 rounded-full animate-pulse-slow" style={{ animationDelay: '1s' }} />
    </section>
  );
}
