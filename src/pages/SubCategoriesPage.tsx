import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { categories } from '../data';
import BackButton from '../components/BackButton';

export default function SubCategoriesPage() {
  const { categoryId } = useParams();
  const category = categories.find((cat) => cat.id === categoryId);
  const [selectedSubCategory, setSelectedSubCategory] = useState(null);

  if (!category) return <div className="text-center text-gray-600">Category not found</div>;

  return (
    <div className="bg-[#EBEEFE] min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4">
        <BackButton />
        <h1 className="text-4xl font-bold text-[#444444] text-center mb-8">{category.name} Subcategories</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {category.subCategories.map((subCategory) => (
            <Link
              key={subCategory.id}
              to={`/products/${category.id}/${subCategory.id}`}
              onClick={() => setSelectedSubCategory(subCategory.id)}
              className={`relative bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105 ${
                selectedSubCategory === subCategory.id ? "bg-[#6A88D0] text-white" : "hover:bg-[#6A88D0] hover:text-white"
              }`}
            >
              {/* Image Section */}
              <div className="relative w-full h-72 flex items-center justify-center overflow-hidden">
                <img
                  src={subCategory.image}
                  alt={subCategory.name}
                  className="w-full h-full object-cover transition-transform duration-500 scale-95"
                />
              </div>

              {/* Subcategory Info */}
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-center">{subCategory.name}</h3>
                <p className="text-sm text-center mt-2">{subCategory.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
