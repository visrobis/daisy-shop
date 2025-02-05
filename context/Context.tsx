"use client";
import { createContext, ReactNode, useState } from "react";
import { DaisyProducts } from "../public/data/DaisyProducts"; // Adjust the path if needed

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  video: string;
  type: string;
  description: string;
}

interface ProductContextType {
  products: Product[];
  setProducts: (products: Product[]) => void;
}

// Create the context
export const ProductContext = createContext<ProductContextType | undefined>(
  undefined
);

interface ProductProviderProps {
  children: ReactNode;
}

export const ProductProvider: React.FC<ProductProviderProps> = ({
  children,
}) => {
  const [products, setProducts] = useState<Product[]>(DaisyProducts); // Use initial data

  return (
    <ProductContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductContext.Provider>
  );
};
