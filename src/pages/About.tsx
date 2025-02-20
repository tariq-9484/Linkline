import React from 'react';
import { Shield, Users, Target } from 'lucide-react';

const About = () => {
  return (
    <div className="bg-[#EBEEFE] py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-[#444444] mb-4">About Link-Line Solutions</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We specialize in designing customized security systems tailored to meet the unique needs of our clients.
          </p>
        </div>

        {/* Mission Section */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-16">
          <div className="flex items-center mb-6">
            <Target className="w-8 h-8 text-[#6A88D0] mr-4" />
            <h2 className="text-2xl font-bold text-[#444444]">Our Mission</h2>
          </div>
          <p className="text-gray-600">
            We strive to employ innovative and cutting-edge technologies to meet our clients' requirements, 
            addressing the evolving challenges of the modern era. Our mission is to provide comprehensive 
            security solutions that safeguard our clients' assets, personnel, and operations.
          </p>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <div className="flex items-center mb-8">
            <Users className="w-8 h-8 text-[#6A88D0] mr-4" />
            <h2 className="text-2xl font-bold text-[#444444]">Our Team</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-[#444444] mb-4">Engineers & Technicians</h3>
              <p className="text-gray-600">
                Experienced professionals with expertise in security system design, installation, and maintenance.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-[#444444] mb-4">Security Specialists</h3>
              <p className="text-gray-600">
                Skilled professionals with enhanced knowledge in their respective fields.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-[#444444] mb-4">Military Veterans</h3>
              <p className="text-gray-600">
                Retired military personnel with extensive experience in security operations and risk management.
              </p>
            </div>
          </div>
        </div>

        {/* Leadership Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <img
              src="/src/assets/face.jpg"
              alt="CEO"
              className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="text-xl font-semibold text-[#444444] text-center mb-2">Ali Tariq</h3>
            <p className="text-[#6A88D0] font-bold  text-center mb-4">CEO</p>
            <p className="text-gray-600 text-center">
              Leading our company with vision and expertise in security solutions.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <img
              src="/src/assets/face.jpg"
              alt="Managing Director"
              className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="text-xl font-semibold text-[#444444] text-center mb-2">Captain (R) Muhammad Talha Khaliq</h3>
            <p className="text-[#6A88D0] font-bold text-center mb-4">Managing Director</p>
            <p className="text-gray-600 text-center">
              Bringing military expertise and strategic planning to our operations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;