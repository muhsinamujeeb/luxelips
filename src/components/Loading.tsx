import { useEffect, useState } from 'react';
import { Sparkles } from 'lucide-react';

export default function Loading() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`fixed inset-0 z-[100] bg-white dark:bg-gray-900 flex flex-col items-center justify-center transition-all duration-500 ${
        isLoaded ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Logo */}
      <div className="relative mb-8">
        <div className="w-20 h-20 rounded-full bg-gradient-luxe flex items-center justify-center animate-pulse">
          <span className="text-white font-display font-bold text-3xl">L</span>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <Sparkles className="w-24 h-24 text-hot-pink/20 animate-spin" style={{ animationDuration: '3s' }} />
        </div>
      </div>

      {/* Brand Name */}
      <h1 className="font-display text-3xl font-bold text-gradient-luxe mb-8">
        Luxe Lips
      </h1>

      {/* Loading Bar */}
      <div className="w-48 h-1 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
        <div className="h-full bg-gradient-luxe rounded-full animate-loading-bar" />
      </div>

      <style>{`
        @keyframes loadingBar {
          0% { width: 0; transform: translateX(0); }
          50% { width: 100%; transform: translateX(0); }
          100% { width: 100%; transform: translateX(100%); }
        }
        .animate-loading-bar {
          animation: loadingBar 1.5s ease-in-out forwards;
        }
      `}</style>
    </div>
  );
}
