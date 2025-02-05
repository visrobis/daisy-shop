"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

// Define the Product interface
interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  video: string;
  type: string;
  description: string;
}

// Define props interface to accept products array
interface Props {
  products: Product[];
}

// Fix function component syntax and properly accept props
export const ProductItem: React.FC<Props> = ({ products }) => {
  return (
    <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 w-full px-4 py-6">
      {products.map((product) => (
        <article
          key={product.id}
          className="relative w-full rounded-lg shadow-md overflow-hidden border border-gray-200"
        >
          <Image
            className="w-full h-56 object-cover"
            src={product.image}
            width={260}
            height={270}
            alt={product.name}
          />
          <div className="absolute bottom-0 left-0 w-full bg-white bg-opacity-80 p-3 backdrop-blur-sm">
            <div className="flex justify-between items-center">
              <div className="text-gray-700">
                <strong className="font-semibold">{product.name}</strong>
                <p className="text-sm text-gray-600">₱{product.price}</p>
              </div>
              <div className="border-l-2 border-gray-300 pl-3">
                <Link
                  href={`/product/${product.id}`}
                  className="text-blue-500 hover:underline text-sm"
                >
                  Details
                </Link>
              </div>
            </div>
          </div>
        </article>
      ))}
    </section>
  );
};
