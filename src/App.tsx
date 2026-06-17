import { useState, useEffect } from 'react';
import { useLocalStorage } from './hooks/useLocalStorage';
import { CartItem, Product, Theme } from './types';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Categories from './components/Categories';
import Products from './components/Products';
import PromoBanner from './components/PromoBanner';
import WhyChooseUs from './components/WhyChooseUs';
import ShadeFinder from './components/ShadeFinder';
import Reviews from './components/Reviews';
import Newsletter from './components/Newsletter';
import Blog from './components/Blog';
import Instagram from './components/Instagram';
import Footer from './components/Footer';
import Cart from './components/Cart';
import Search from './components/Search';
import BackToTop from './components/BackToTop';
import Loading from './components/Loading';

function App() {
  const [theme, setTheme] = useLocalStorage<Theme>('luxe-lips-theme', 'light');
  const [cart, setCart] = useLocalStorage<CartItem[]>('luxe-lips-cart', []);
  const [wishlist, setWishlist] = useLocalStorage<string[]>('luxe-lips-wishlist', []);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const addToCart = (product: Product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const updateCartQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const removeFromCart = (productId: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const toggleWishlist = (productId: string) => {
    setWishlist((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    );
  };

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const wishlistCount = wishlist.length;

  const handleShopNow = () => {
    const element = document.querySelector('#products');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    const element = document.querySelector('#products');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const clearCategory = () => {
    setSelectedCategory(null);
  };

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'dark' : ''}`}>
      <Loading />

      <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        <Navbar
          theme={theme}
          toggleTheme={toggleTheme}
          cartCount={cartCount}
          wishlistCount={wishlistCount}
          onCartClick={() => setIsCartOpen(true)}
          onSearchClick={() => setIsSearchOpen(true)}
        />

        <main>
          <Hero onShopNow={handleShopNow} />
          <Categories onCategorySelect={handleCategorySelect} />
          <Products
            onAddToCart={addToCart}
            onToggleWishlist={toggleWishlist}
            wishlistItems={wishlist}
            selectedCategory={selectedCategory}
            onClearCategory={clearCategory}
          />
          <PromoBanner />
          <WhyChooseUs />
          <ShadeFinder />
          <Reviews />
          <Newsletter />
          <Blog />
          <Instagram />
          <Footer />
        </main>

        <Cart
          isOpen={isCartOpen}
          onClose={() => setIsCartOpen(false)}
          items={cart}
          onUpdateQuantity={updateCartQuantity}
          onRemoveItem={removeFromCart}
        />

        <Search
          isOpen={isSearchOpen}
          onClose={() => setIsSearchOpen(false)}
          onAddToCart={addToCart}
        />

        <BackToTop />
      </div>
    </div>
  );
}

export default App;
