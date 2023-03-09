export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: number;

  images: string[];
}

export interface PRODUCTS_API_RESPONSE {
  limit: number;
  products: Product[];
  skip: number;
  total: number;
}

export interface CartItem {
  Product: Product;
  quantity: number;
}
