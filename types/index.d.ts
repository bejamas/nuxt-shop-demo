// ./types/index.d.ts

export { Product, CartItem };

declare global {
  interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: string;
    category: string;
    thumbnail: string;
    images: string[];
  }

  interface CartItem {
    product: Product;
    quantity: number;
  }
}
