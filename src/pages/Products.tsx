import React, { useState } from 'react';
import { Shield, Camera, Radio, Package } from 'lucide-react';
import { categories, products } from '../data';

const getCategoryIcon = (categoryId: string) => {
  switch (categoryId) {
    case 'security-products':
      return Shield;
    case 'walkie-talkie-accessories':
      return Radio;
    case 'other-products':
      return Package;
    default:
      return Camera;
  }
};

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubCategory, setSelectedSubCategory] = useState(null);
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null);

  const getFilteredProducts = () => {
    if (!selectedSubCategory) return [];
    return products.filter((product) => product.subCategory === selectedSubCategory.id);
  };

  return (
    <div className="bg-[#EBEEFE] min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-[#444444] text-center mb-16">Our Products</h1>

        {/* Categories with Images */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {categories.map((category) => {
            const Icon = getCategoryIcon(category.id);
            return (
              <button
                key={category.id}
                onClick={() => {
                  setSelectedCategory(category);
                  setSelectedSubCategory(null);
                }}
                className={`p-6 rounded-lg shadow-md text-center transition-all ${
                  selectedCategory?.id === category.id
                    ? 'bg-[#6A88D0] text-white'
                    : 'bg-white hover:bg-[#6A88D0] hover:text-white'
                }`}
              >
              <div className="relative w-full h-32 mb-4 overflow-hidden flex items-center justify-center">
  <img
    src={category.image}
    alt={category.name}
    className="w-[150%] h-[150%] object-cover transition-transform duration-500 scale-95 group-hover:scale-100 rounded-md"
  />
</div>

                <Icon className="w-8 h-8 mx-auto mb-2" />
                <h2 className="font-semibold">{category.name}</h2>
                <p className="text-sm mt-2 opacity-80">{category.description}</p>
              </button>
            );
          })}
        </div>

        {/* Subcategories with Images */}
        {selectedCategory && (
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-[#444444] mb-4">{selectedCategory.name} Categories</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {selectedCategory.subCategories.map((subCategory) => (
                <button
                  key={subCategory.id}
                  onClick={() => setSelectedSubCategory(subCategory)}
                  className={`p-6 rounded-lg shadow-md text-center transition-all ${
                    selectedSubCategory?.id === subCategory.id
                      ? 'bg-[#6A88D0] text-white'
                      : 'bg-white hover:bg-[#6A88D0] hover:text-white'
                  }`}
                >
                  <div className="relative w-full h-24 mb-3">
                  <img
  src={subCategory.image}
  alt={subCategory.name}
  className="w-full h-full object-contain scale-160 transition-transform duration-500 group-hover:scale-120 rounded-md"
/>

                  </div>
                  <h3 className="font-semibold">{subCategory.name}</h3>
                  <p className="text-sm mt-2 opacity-80">{subCategory.description}</p>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Products */}
        {selectedSubCategory && (
          <div>
            <h2 className="text-2xl font-bold text-[#444444] mb-4">{selectedSubCategory.name} Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {getFilteredProducts().map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden relative group"
                  onMouseEnter={() => setHoveredProduct(product.id)}
                  onMouseLeave={() => setHoveredProduct(null)}
                >
                  {/* Display Image or Video */}
                  <div className="relative w-full h-56 overflow-hidden flex items-center justify-center"> 
  {product.media.video ? (
    <video
      className="w-full h-full object-cover transition-transform duration-500 scale-95 group-hover:scale-100"
      controls // ✅ Enables play/pause, fullscreen, and volume controls
      controlsList="nodownload" // ✅ Prevents video downloading
      preload="none" // ✅ Prevents automatic loading of the video
      playsInline // ✅ Ensures it does not go fullscreen on mobile
      disablePictureInPicture={false} // ✅ Allows Picture-in-Picture mode
      autoPlay={false} // ✅ Ensures autoplay is completely off
    >
      <source src={product.media.video} type="video/mp4" /> 
      Your browser does not support the video tag.
    </video>
  ) : (
    <img
      src={product.media.image}
      alt={product.name}
      className="w-full h-full object-cover transition-transform duration-500 scale-95 group-hover:scale-100"
    />
  )}
</div>
 




                  {/* Product Info */}
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-[#444444] mb-2">{product.name}</h3>
                    <p className="text-gray-600 mb-4">{product.description}</p>
                  </div>

                  {/* Feature Overlay (Gray Background on Hover) */}
                  <div
                    className={`absolute bottom-0 left-0 w-full bg-[#4A4A4A] text-white text-sm px-4 py-3 transition-all duration-300 ${
                      hoveredProduct === product.id ? 'opacity-100 h-auto' : 'opacity-0 h-0'
                    }`}
                  >
                    <h4 className="font-bold text-lg">Features:</h4>
                    <ul className="list-disc pl-4">
                      {product.features.map((feature, index) => (
                        <li key={index} className="text-sm">{feature}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* No Selection State */}
        {!selectedCategory && (
          <div className="text-center text-gray-600">
            <p>Please select a category to view our products</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
