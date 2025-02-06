"use client";
import { ProductContext } from "@/context/Context";
import { useParams } from "next/navigation";
import React, { useContext } from "react";

const ProductDetails = () => {
  const { id } = useParams(); // Get the id from the URL
  const productContext = useContext(ProductContext);

  if (!productContext)
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-lg font-semibold text-gray-600">
          Loading products...
        </p>
      </div>
    );

  // Find the product using the id
  const product = productContext.products.find(
    (p) => p.id.toString() === id // Ensure `id` matches as a string
  );

  // If product is not found
  if (!product) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-lg font-semibold text-red-500">Product not found!</p>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-5 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
      <p className="text-gray-600 mt-2">{product.description}</p>
      <p className="mt-3 font-semibold text-xl text-gray-800">
        Price: ${product.price}
      </p>

      {/* Updated Image for Enhanced Visibility */}
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-[600px] object-cover mt-4 rounded-lg shadow-2xl transform transition-all duration-500 ease-in-out hover:scale-110"
      />

      <div className="mt-6 text-center">
        <a
          href="https://business.facebook.com/latest/inbox/all?asset_id=101614795300131&mailbox_id=&selected_item_id=100006817980194&thread_type=FB_MESSAGE"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 mt-4 bg-blue-500 text-white text-lg font-semibold rounded-lg hover:bg-blue-600"
        >
          Message us on Facebook
        </a>
      </div>
    </div>
  );
};

export default ProductDetails;
