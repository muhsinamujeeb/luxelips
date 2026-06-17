import { useRef, useState, useMemo } from 'react';
import { Star, Heart, ShoppingCart, Eye, Filter, X, ChevronDown } from 'lucide-react';
import { products } from '../data/products';
import { useIntersectionObserver } from '../hooks/useScrollAnimation';
import { Product } from '../types';

interface ProductsProps {
  onAddToCart: (product: Product) => void;
  onToggleWishlist: (productId: string) => void;
  wishlistItems: string[];
  selectedCategory: string | null;
  onClearCategory: () => void;
}

export default function Products({
  onAddToCart,
  onToggleWishlist,
  wishlistItems,
  selectedCategory,
  onClearCategory,
}: ProductsProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(sectionRef);

  const [sortBy, setSortBy] = useState<'price-low' | 'price-high' | 'rating' | 'newest'>('newest');
  const [filterFinish, setFilterFinish] = useState<string>('all');
  const [showFilters, setShowFilters] = useState(false);

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = [...products];

    if (selectedCategory) {
      filtered = filtered.filter((p) => p.category === selectedCategory);
    }

    if (filterFinish !== 'all') {
      filtered = filtered.filter((p) => p.finish === filterFinish);
    }

    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'newest':
        filtered.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
        break;
    }

    return filtered;
  }, [selectedCategory, filterFinish, sortBy]);

  const handleQuickView = (product: Product) => {
    alert(`Quick View: ${product.name}\n\n${product.description}\n\nPrice: $${product.price}`);
  };

  return (
    <section id="products" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div ref={sectionRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-12 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <span className="inline-block px-4 py-2 rounded-full bg-hot-pink/10 text-hot-pink text-sm font-semibold mb-4">
            Shop Now
          </span>
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-gray-900 dark:text-white mb-4">
            Best <span className="text-gradient-luxe">Sellers</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Discover our most-loved lipsticks, adored by thousands of beauty
            enthusiasts worldwide.
          </p>
        </div>

        {/* Filter Bar */}
        <div
          className={`mb-8 transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="flex flex-wrap items-center justify-between gap-4 p-4 bg-white dark:bg-gray-800 rounded-2xl shadow-sm">
            {/* Left: Active Filters */}
            <div className="flex flex-wrap items-center gap-3">
              {selectedCategory && (
                <button
                  onClick={onClearCategory}
                  className="flex items-center space-x-2 px-3 py-1.5 bg-hot-pink/10 text-hot-pink rounded-full text-sm font-medium hover:bg-hot-pink hover:text-white transition-colors"
                >
                  <span className="capitalize">{selectedCategory}</span>
                  <X className="w-4 h-4" />
                </button>
              )}
              {filterFinish !== 'all' && (
                <button
                  onClick={() => setFilterFinish('all')}
                  className="flex items-center space-x-2 px-3 py-1.5 bg-rose-gold/10 text-rose-gold dark:text-rose-gold-light rounded-full text-sm font-medium hover:bg-rose-gold hover:text-white transition-colors"
                >
                  <span className="capitalize">{filterFinish}</span>
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Right: Filters & Sort */}
            <div className="flex items-center gap-4">
              {/* Finish Filter */}
              <div className="relative">
                <select
                  value={filterFinish}
                  onChange={(e) => setFilterFinish(e.target.value)}
                  className="appearance-none px-4 py-2 pr-8 bg-gray-100 dark:bg-gray-700 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-hot-pink"
                >
                  <option value="all">All Finishes</option>
                  <option value="matte">Matte</option>
                  <option value="glossy">Glossy</option>
                  <option value="satin">Satin</option>
                  <option value="creme">Creme</option>
                </select>
                <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
              </div>

              {/* Sort */}
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
                  className="appearance-none px-4 py-2 pr-8 bg-gray-100 dark:bg-gray-700 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-hot-pink"
                >
                  <option value="newest">Newest</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                </select>
                <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
              </div>

              {/* Mobile Filter Toggle */}
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="lg:hidden p-2 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
              >
                <Filter className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredAndSortedProducts.map((product, index) => (
            <div
              key={product.id}
              className={`group relative bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-sm hover:shadow-luxe transition-all duration-700 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${(index + 3) * 100}ms` }}
            >
              {/* Badges */}
              <div className="absolute top-3 left-3 z-20 flex flex-col gap-2">
                {product.isNew && (
                  <span className="px-3 py-1 bg-rose-gold text-white text-xs font-semibold rounded-full">
                    New
                  </span>
                )}
                {product.isBestSeller && (
                  <span className="px-3 py-1 bg-hot-pink text-white text-xs font-semibold rounded-full">
                    Best Seller
                  </span>
                )}
                {product.originalPrice && (
                  <span className="px-3 py-1 bg-green-500 text-white text-xs font-semibold rounded-full">
                    Sale
                  </span>
                )}
              </div>

              {/* Wishlist Button */}
              <button
                onClick={() => onToggleWishlist(product.id)}
                className={`absolute top-3 right-3 z-20 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                  wishlistItems.includes(product.id)
                    ? 'bg-hot-pink text-white'
                    : 'bg-white/80 dark:bg-gray-800/80 text-gray-600 dark:text-gray-400 hover:bg-hot-pink hover:text-white'
                }`}
              >
                <Heart
                  className={`w-5 h-5 ${
                    wishlistItems.includes(product.id) ? 'fill-current' : ''
                  }`}
                />
              </button>

              {/* Image */}
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Quick View Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button
                    onClick={() => handleQuickView(product)}
                    className="px-4 py-2 bg-white text-gray-900 rounded-full font-medium transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 flex items-center space-x-2"
                  >
                    <Eye className="w-4 h-4" />
                    <span>Quick View</span>
                  </button>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-5">
                {/* Shade Color */}
                <div className="flex items-center space-x-2 mb-2">
                  <div
                    className="w-4 h-4 rounded-full border border-gray-200"
                    style={{ backgroundColor: product.color }}
                  />
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {product.shade}
                  </span>
                </div>

                {/* Name */}
                <h3 className="text-lg font-display font-bold text-gray-900 dark:text-white mb-2">
                  {product.name}
                </h3>

                {/* Rating */}
                <div className="flex items-center space-x-2 mb-3">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(product.rating)
                            ? 'text-yellow-400 fill-current'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    ({product.reviews})
                  </span>
                </div>

                {/* Price & Add to Cart */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-xl font-bold text-gray-900 dark:text-white">
                      ${product.price}
                    </span>
                    {product.originalPrice && (
                      <span className="text-sm text-gray-400 line-through">
                        ${product.originalPrice}
                      </span>
                    )}
                  </div>
                  <button
                    onClick={() => onAddToCart(product)}
                    disabled={!product.inStock}
                    className="w-10 h-10 rounded-full bg-hot-pink text-white flex items-center justify-center transition-all duration-300 hover:bg-hot-pink-dark hover:scale-110 disabled:bg-gray-300 disabled:cursor-not-allowed"
                  >
                    <ShoppingCart className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredAndSortedProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-gray-400 text-lg">
              No products found matching your criteria.
            </p>
            <button
              onClick={() => {
                setFilterFinish('all');
                onClearCategory();
              }}
              className="mt-4 px-6 py-2 bg-hot-pink text-white rounded-full font-medium hover:bg-hot-pink-dark transition-colors"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
