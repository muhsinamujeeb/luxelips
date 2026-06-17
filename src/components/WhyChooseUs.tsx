import { useRef } from 'react';
import { Heart, Leaf, Clock, Sparkles } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useScrollAnimation';

const features = [
  {
    icon: Heart,
    title: 'Cruelty Free',
    description: 'We never test on animals. Beauty without cruelty is our promise.',
    color: 'bg-red-500/10 text-red-500',
  },
  {
    icon: Leaf,
    title: 'Vegan Formula',
    description: '100% vegan ingredients. Pure beauty that aligns with your values.',
    color: 'bg-green-500/10 text-green-500',
  },
  {
    icon: Clock,
    title: 'Long Lasting',
    description: 'Up to 12 hours of wear. From morning coffee to evening events.',
    color: 'bg-blue-500/10 text-blue-500',
  },
  {
    icon: Sparkles,
    title: 'Premium Ingredients',
    description: 'Infused with vitamin E and argan oil for hydrated, soft lips.',
    color: 'bg-purple-500/10 text-purple-500',
  },
];

export default function WhyChooseUs() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(sectionRef);

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div ref={sectionRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <span className="inline-block px-4 py-2 rounded-full bg-hot-pink/10 text-hot-pink text-sm font-semibold mb-4">
            Why Choose Us
          </span>
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-gray-900 dark:text-white mb-4">
            Beauty With <span className="text-gradient-luxe">Purpose</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            We believe in creating products that not only make you look beautiful
            but also feel good about your choices.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`group relative p-8 rounded-3xl bg-gray-50 dark:bg-gray-800 hover:bg-white dark:hover:bg-gray-750 transition-all duration-700 hover:shadow-luxe ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${(index + 1) * 150}ms` }}
            >
              {/* Icon */}
              <div
                className={`w-16 h-16 rounded-2xl ${feature.color} flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300`}
              >
                <feature.icon className="w-8 h-8" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-display font-bold text-gray-900 dark:text-white mb-3">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 dark:text-gray-400">
                {feature.description}
              </p>

              {/* Hover Effect Line */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-gradient-luxe rounded-full group-hover:w-3/4 transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
