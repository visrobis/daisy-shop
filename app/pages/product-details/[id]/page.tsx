"use client";
import ProductDetails from "@/components/products/ProductDetails";
import { useParams } from "next/navigation";
import React from "react";

const ProductDetailsPage = () => {
  const params = useParams(); // Get dynamic route parameters
  const { id } = params as { id: string }; // Extract 'id' and type it

  return (
    <main>
      <ProductDetails />
    </main>
  );
};

export default ProductDetailsPage;
