import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Shield } from 'lucide-react';
import logo from "/src/assets/final logo.jpeg"; // Import your logo image

const Navbar = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <nav className="bg-gradient-to-b from-[#9db1df] via-[#6787CC] to-[#9db1df] shadow-lg">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center h-20">
        
        {/* Left Section - Expanded Logo (Moved Further Left) */}
        <div className="flex items-center flex-grow">
        <Link to="/" className="flex items-center w-full ">

            <img 
              src={logo} 
              alt="Link-Line Solutions" 
              className="h-20 w-auto max-w-full object-contain ml-[-150px]" 
            />
          </Link>
        </div>
        <div className="flex items-center space-x-4">
  {[
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/services', label: 'Services' },
    { path: '/products', label: 'Products' },
    { path: '/contact', label: 'Contact' },
  ].map(({ path, label }) => (
    <Link
      key={path}
      to={path}
      className={`px-4 py-2 rounded-md text-lg font-bold transition-colors ${
        isActive(path)
          ? 'bg-[#444444] text-white'
          : 'text-white hover:bg-[#6686CF] hover:text-white'
      }`}
    >
      {label}
    </Link>
  ))}
</div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;