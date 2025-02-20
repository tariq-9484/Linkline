import React from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../data';
import BackButton from '../components/BackButton';
import ProductCard from '../components/ProductCard';

export default function ProductsPage() {
  const { categoryId, subCategoryId } = useParams();
  const filteredProducts = products.filter((p) => p.subCategory === subCategoryId);

  if (!filteredProducts.length) 
    return <div className="text-center text-gray-600">No products found</div>;

  return (
    <div className="bg-[#EBEEFE] min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4">
        <BackButton />
        <h1 className="text-4xl font-bold text-[#444444] text-center mb-8">Products</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
