import React from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../data';
import BackButton from '../components/BackButton';

export default function ProductDetails() {
  const { productId } = useParams();
  const product = products.find((p) => p.id === productId);

  if (!product) return <div className="text-center text-gray-600">Product not found</div>;

  return (
    <div className="bg-[#EBEEFE] min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4">
        <BackButton />
        <h1 className="text-4xl font-bold text-[#444444] text-center mb-8">{product.name}</h1>
        <img src={product.media.image} alt={product.name} className="w-full h-64 object-contain mx-auto mb-6" />
        <p className="text-lg text-gray-600">{product.description}</p>
      </div>
    </div>
  );
}
