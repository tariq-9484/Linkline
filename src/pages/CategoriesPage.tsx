import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { categories } from '../data';

export default function CategoriesPage() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <div className="bg-[#EBEEFE] min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-[#444444] text-center mb-16">Our Product Categories</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/products/${category.id}`}
              onClick={() => setSelectedCategory(category.id)}
              className={`relative bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105 ${
                selectedCategory === category.id ? "bg-[#6A88D0] text-white" : "hover:bg-[#6A88D0] hover:text-white"
              }`}
            >
              {/* Image Section */}
              <div className="relative w-full h-72 flex items-center justify-center overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-500 scale-95"
                />
              </div>

              {/* Category Info */}
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-center">{category.name}</h2>
                <p className="text-sm text-center mt-2">{category.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
