import React, { useState } from "react";

export default function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image or Video Section */}
      <div className="relative w-full h-72 flex items-center justify-center overflow-hidden">
        {product.media.video ? (
          <video
            className="w-full h-full object-cover transition-transform duration-500 scale-95"
            src={product.media.video}
            autoPlay={false}
            controls
            loop={false}
            muted={false}
          />
        ) : (
          <img
            src={product.media.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 scale-95"
          />
        )}
      </div>

      {/* Product Info */}
      <div className="p-6 pb-14 transition-opacity duration-300 relative">
        <h3 className="text-xl font-semibold text-[#444444] mb-2">{product.name}</h3>
        <p className="text-sm text-gray-600">{product.description}</p>
      </div>

      {/* Feature Overlay (Appears at Bottom Only on Hover) */}
      <div
        className={`absolute bottom-0 left-0 w-full bg-black bg-opacity-70 text-white p-4 transition-transform duration-300 ${
          hovered ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <h4 className="font-bold text-lg mb-2">Features:</h4>
        <ul className="list-disc pl-4 space-y-1">
          {product.features.map((feature, index) => (
            <li key={index} className="text-sm">{feature}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
