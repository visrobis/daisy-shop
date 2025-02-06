"use client";
import { ProductItem } from "@/components/products/ProductItem";
import { ProductContext } from "@/context/Context";
import React, { useContext, useState, useMemo } from "react";

const ProductsPage = () => {
  const productContext = useContext(ProductContext);

  // Define states BEFORE any conditional return
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const productsPerPage = 10;

  if (!productContext)
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-lg font-semibold text-gray-600">
          Loading products...
        </p>
      </div>
    );

  const { products } = productContext;

  // Filtered products based on search query
  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.type.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Shuffle function using Fisher-Yates algorithm
  const shuffleArray = (array: typeof products) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  // Use useMemo to shuffle products when `filteredProducts` changes
  const shuffledProducts = useMemo(
    () => shuffleArray(filteredProducts),
    [filteredProducts]
  );

  // Calculate total pages
  const totalPages = Math.ceil(shuffledProducts.length / productsPerPage);

  // Get current products for the page
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = shuffledProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  // Handle pagination navigation
  const goToNextPage = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  const goToPrevPage = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  return (
    <main className="mt-5 px-4 md:px-10 lg:px-20">
      {/* Search Input */}
      <input
        type="text"
        placeholder="Search by name or type..."
        className="w-full p-3 mb-4 border-2 rounded-md text-sizeParagraphSm md:text-sizeParagraphBase outline-none"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      {/* Products Section */}
      <article className="flex justify-center items-center my-10">
        <ProductItem products={currentProducts} />
      </article>

      {/* Pagination Controls */}
      <div className="flex justify-center gap-4 mt-6">
        <button
          onClick={goToPrevPage}
          disabled={currentPage === 1}
          className="px-4 py-2 border rounded-md bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
        >
          Previous
        </button>

        {/* Page Numbers */}
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => setCurrentPage(index + 1)}
            className={`px-3 py-2 border rounded-md ${
              currentPage === index + 1
                ? "bg-blue-500 text-white"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            {index + 1}
          </button>
        ))}

        <button
          onClick={goToNextPage}
          disabled={currentPage === totalPages}
          className="px-4 py-2 border rounded-md bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </main>
  );
};

export default ProductsPage;
