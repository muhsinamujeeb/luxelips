export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: 'matte' | 'glossy' | 'nude' | 'premium';
  finish: 'matte' | 'glossy' | 'satin' | 'creme';
  shade: string;
  color: string;
  rating: number;
  reviews: number;
  description: string;
  inStock: boolean;
  isNew?: boolean;
  isBestSeller?: boolean;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface Review {
  id: string;
  customerName: string;
  customerImage: string;
  rating: number;
  reviewText: string;
  date: string;
  productId?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  author: string;
  category: string;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  image: string;
  productCount: number;
}

export interface FilterState {
  category: string;
  finish: string;
  priceRange: [number, number];
  rating: number;
  sortBy: 'price-low' | 'price-high' | 'rating' | 'newest';
}

export type Theme = 'light' | 'dark';
