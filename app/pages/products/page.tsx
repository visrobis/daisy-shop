"use client";
import { ProductItem } from "@/components/products/ProductItem";
import { ProductContext } from "@/context/Context";
import React, { useContext, useState } from "react";

const ProductsPage = () => {
  const productContext = useContext(ProductContext);

  if (!productContext)
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-lg font-semibold text-gray-600">
          Loading products...
        </p>
      </div>
    );

  const { products } = productContext;

  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 10;

  // Search state
  const [searchQuery, setSearchQuery] = useState("");

  // Filtered products based on search query
  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.type.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Calculate total pages
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  // Get current products for the page
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
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
        className="w-full p-3 mb-4 border-2 rounded-md text-sizeParagraphSm md:text-sizeParagraphBase"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      {/* Category Dropdown */}
      <select
        className="p-3 border-2 rounded-md text-sizeParagraphSm md:text-sizeParagraphBase"
        defaultValue=""
      >
        <option value="" disabled>
          Category
        </option>
        <option value="printings">Printings</option>
        <option value="cooking">Cooking</option>
      </select>

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
