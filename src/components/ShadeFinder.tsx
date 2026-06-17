import { useRef, useState } from 'react';
import { Sparkles, Wand2 } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useScrollAnimation';

const skinTones = [
  { id: 'fair', name: 'Fair', color: '#FFDFE5' },
  { id: 'light', name: 'Light', color: '#F0C8B6' },
  { id: 'medium', name: 'Medium', color: '#D4A574' },
  { id: 'olive', name: 'Olive', color: '#C19A6B' },
  { id: 'tan', name: 'Tan', color: '#A67B5B' },
  { id: 'deep', name: 'Deep', color: '#8D5524' },
];

const undertones = [
  { id: 'cool', name: 'Cool', description: 'Pink or blue undertones' },
  { id: 'warm', name: 'Warm', description: 'Yellow or golden undertones' },
  { id: 'neutral', name: 'Neutral', description: 'Mixed or balanced undertones' },
];

const shadeRecommendations: Record<string, Record<string, string[]>> = {
  fair: {
    cool: ['Peach Glow', 'Dusty Rose', 'Velvet Pink'],
    warm: ['Nude Brown', 'Coral Shine', 'Rose Gold Glow'],
    neutral: ['Mauve Magic', 'Peach Glow', 'Dusty Rose'],
  },
  light: {
    cool: ['Velvet Pink', 'Mauve Magic', 'Cherry Blossom'],
    warm: ['Nude Brown', 'Coral Shine', 'Rose Gold Glow'],
    neutral: ['Peach Glow', 'Dusty Rose', 'Mauve Magic'],
  },
  medium: {
    cool: ['Wine Berry', 'Velvet Pink', 'Mauve Magic'],
    warm: ['Ruby Red Matte', 'Coral Shine', 'Nude Brown'],
    neutral: ['Rose Gold Glow', 'Cherry Blossom', 'Peach Glow'],
  },
  olive: {
    cool: ['Wine Berry', 'Plum Luxe', 'Ruby Red Matte'],
    warm: ['Coral Shine', 'Nude Brown', 'Rose Gold Glow'],
    neutral: ['Crimson Classic', 'Wine Berry', 'Ruby Red Matte'],
  },
  tan: {
    cool: ['Wine Berry', 'Plum Luxe', 'Crimson Classic'],
    warm: ['Ruby Red Matte', 'Coral Shine', 'Wine Berry'],
    neutral: ['Crimson Classic', 'Rose Gold Glow', 'Ruby Red Matte'],
  },
  deep: {
    cool: ['Wine Berry', 'Plum Luxe', 'Crimson Classic'],
    warm: ['Ruby Red Matte', 'Crimson Classic', 'Wine Berry'],
    neutral: ['Plum Luxe', 'Wine Berry', 'Ruby Red Matte'],
  },
};

export default function ShadeFinder() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(sectionRef);

  const [selectedSkinTone, setSelectedSkinTone] = useState<string | null>(null);
  const [selectedUndertone, setSelectedUndertone] = useState<string | null>(null);
  const [showResults, setShowResults] = useState(false);

  const handleFindShade = () => {
    if (selectedSkinTone && selectedUndertone) {
      setShowResults(true);
    }
  };

  const recommendations =
    selectedSkinTone && selectedUndertone
      ? shadeRecommendations[selectedSkinTone]?.[selectedUndertone] || []
      : [];

  return (
    <section id="shades" className="py-20 bg-gray-50 dark:bg-gray-900/50">
      <div ref={sectionRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-12 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <span className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-hot-pink/10 text-hot-pink text-sm font-semibold mb-4">
            <Sparkles className="w-4 h-4" />
            <span>AI-Powered</span>
          </span>
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-gray-900 dark:text-white mb-4">
            Find Your <span className="text-gradient-luxe">Perfect Shade</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Answer two simple questions and let our intelligent shade finder
            recommend the perfect lipstick shades for your unique skin tone.
          </p>
        </div>

        {/* Shade Finder Interface */}
        <div
          className={`max-w-4xl mx-auto transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl">
            {/* Step 1: Skin Tone */}
            <div className="mb-8">
              <h3 className="text-xl font-display font-bold text-gray-900 dark:text-white mb-4">
                Step 1: Select Your Skin Tone
              </h3>
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
                {skinTones.map((tone) => (
                  <button
                    key={tone.id}
                    onClick={() => setSelectedSkinTone(tone.id)}
                    className={`group flex flex-col items-center p-4 rounded-2xl transition-all duration-300 ${
                      selectedSkinTone === tone.id
                        ? 'bg-hot-pink/10 ring-2 ring-hot-pink'
                        : 'bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600'
                    }`}
                  >
                    <div
                      className={`w-12 h-12 rounded-full mb-2 transition-transform duration-300 ${
                        selectedSkinTone === tone.id ? 'scale-110' : 'group-hover:scale-105'
                      }`}
                      style={{ backgroundColor: tone.color }}
                    />
                    <span
                      className={`text-sm font-medium ${
                        selectedSkinTone === tone.id
                          ? 'text-hot-pink'
                          : 'text-gray-700 dark:text-gray-300'
                      }`}
                    >
                      {tone.name}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Undertone */}
            <div className="mb-8">
              <h3 className="text-xl font-display font-bold text-gray-900 dark:text-white mb-4">
                Step 2: Select Your Undertone
              </h3>
              <div className="grid sm:grid-cols-3 gap-4">
                {undertones.map((tone) => (
                  <button
                    key={tone.id}
                    onClick={() => setSelectedUndertone(tone.id)}
                    className={`p-5 rounded-2xl text-left transition-all duration-300 ${
                      selectedUndertone === tone.id
                        ? 'bg-rose-gold/10 ring-2 ring-rose-gold'
                        : 'bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600'
                    }`}
                  >
                    <div
                      className={`text-lg font-display font-bold mb-1 ${
                        selectedUndertone === tone.id
                          ? 'text-rose-gold'
                          : 'text-gray-900 dark:text-white'
                      }`}
                    >
                      {tone.name}
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      {tone.description}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Find Shade Button */}
            <button
              onClick={handleFindShade}
              disabled={!selectedSkinTone || !selectedUndertone}
              className="w-full py-4 bg-gradient-luxe text-white rounded-full font-bold text-lg shadow-luxe hover:shadow-luxe-lg transform hover:-translate-y-1 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center space-x-2"
            >
              <Wand2 className="w-5 h-5" />
              <span>Find My Perfect Shade</span>
            </button>

            {/* Results */}
            {showResults && recommendations.length > 0 && (
              <div className="mt-8 p-6 bg-gradient-to-br from-pink-50 to-rose-50 dark:from-gray-700 dark:to-gray-700 rounded-2xl animate-fade-in-up">
                <h4 className="text-lg font-display font-bold text-gray-900 dark:text-white mb-4 flex items-center space-x-2">
                  <Sparkles className="w-5 h-5 text-hot-pink" />
                  <span>Your Perfect Shades</span>
                </h4>
                <div className="grid sm:grid-cols-3 gap-4">
                  {recommendations.map((shade, index) => (
                    <div
                      key={shade}
                      className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm hover:shadow-luxe transition-shadow duration-300"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                          #{index + 1} Pick
                        </span>
                        <span className="px-2 py-1 bg-hot-pink/10 text-hot-pink text-xs font-semibold rounded-full">
                          {Math.round(95 - index * 10)}% Match
                        </span>
                      </div>
                      <span className="text-lg font-bold text-gray-900 dark:text-white">
                        {shade}
                      </span>
                    </div>
                  ))}
                </div>
                <button
                  onClick={() => {
                    const productsSection = document.querySelector('#products');
                    productsSection?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="mt-4 text-hot-pink font-medium hover:underline inline-flex items-center space-x-1"
                >
                  <span>Shop These Shades</span>
                  <span>&rarr;</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
