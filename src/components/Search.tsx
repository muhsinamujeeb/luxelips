import { useState, useEffect, useRef } from 'react';
import { Search as SearchIcon, X, Star } from 'lucide-react';
import { products } from '../data/products';
import { Product } from '../types';

interface SearchProps {
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (product: Product) => void;
}

export default function Search({ isOpen, onClose, onAddToCart }: SearchProps) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Product[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
    if (!isOpen) {
      setQuery('');
      setResults([]);
    }
  }, [isOpen]);

  const handleSearch = (searchQuery: string) => {
    setQuery(searchQuery);
    if (searchQuery.trim()) {
      const filtered = products.filter(
        (product) =>
          product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.shade.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.finish.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setResults(filtered);
    } else {
      setResults([]);
    }
  };

  return (
    <div
      className={`fixed inset-0 z-50 transition-all duration-500 ${
        isOpen ? 'visible' : 'invisible'
      }`}
    >
      {/* Backdrop */}
      <div
        className={`absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={onClose}
      />

      {/* Search Panel */}
      <div
        className={`absolute top-0 left-0 right-0 bg-white dark:bg-gray-900 transition-all duration-500 ${
          isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
        }`}
      >
        <div className="max-w-3xl mx-auto p-6">
          {/* Search Input */}
          <div className="relative">
            <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => handleSearch(e.target.value)}
              placeholder="Search for lipsticks, shades, or categories..."
              className="w-full pl-12 pr-12 py-4 bg-gray-100 dark:bg-gray-800 rounded-2xl text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-hot-pink/50 text-lg"
            />
            <button
              onClick={onClose}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              <X className="w-5 h-5 text-gray-500" />
            </button>
          </div>

          {/* Quick Search Tags */}
          {query === '' && (
            <div className="mt-6">
              <div className="text-sm text-gray-500 mb-3">Popular Searches</div>
              <div className="flex flex-wrap gap-2">
                {['Matte', 'Glossy', 'Red', 'Nude', 'New Collection'].map((tag) => (
                  <button
                    key={tag}
                    onClick={() => handleSearch(tag)}
                    className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm hover:bg-hot-pink hover:text-white transition-colors"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Results */}
          {query && (
            <div className="mt-6">
              {results.length > 0 ? (
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {results.map((product) => (
                    <div
                      key={product.id}
                      className="p-4 bg-gray-50 dark:bg-gray-800 rounded-xl hover:shadow-luxe transition-shadow cursor-pointer"
                      onClick={() => {
                        onAddToCart(product);
                        onClose();
                      }}
                    >
                      <div className="aspect-square rounded-lg overflow-hidden mb-3">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h3 className="font-medium text-gray-900 dark:text-white text-sm">
                        {product.name}
                      </h3>
                      <div className="flex items-center gap-1 mt-1">
                        <div
                          className="w-2 h-2 rounded-full"
                          style={{ backgroundColor: product.color }}
                        />
                        <span className="text-xs text-gray-500">{product.shade}</span>
                      </div>
                      <div className="flex items-center justify-between mt-2">
                        <span className="font-bold text-hot-pink">${product.price}</span>
                        <div className="flex items-center gap-1">
                          <Star className="w-3 h-3 text-yellow-400 fill-current" />
                          <span className="text-xs text-gray-500">{product.rating}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <p className="text-gray-500 dark:text-gray-400">
                    No products found for "{query}"
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
