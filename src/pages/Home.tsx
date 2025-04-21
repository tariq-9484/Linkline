import React from 'react';
import { Shield, Users, PenTool as Tool, Award } from 'lucide-react';

const Home = () => {
  return (
    <div className="bg-[#EBEEFE]">
      {/* Hero Section */}
      <section className="relative h-[600px]">
        <div className="absolute inset-0">
          <img
            src="/assets/fronee.webp"
            alt="Security Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-5xl font-bold mb-4">Link-Line Solutions</h1>
            <p className="text-xl mb-8">Your Trusted Partner in Security Solutions</p>
            <a href="/products" className="bg-[#6A88D0] text-white px-6 py-3 rounded-md hover:bg-[#6686CF]">
            Explore more
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#444444]">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                icon: Shield,
                title: 'Expert Security',
                description: 'Comprehensive security solutions tailored to your needs'
              },
              {
                icon: Users,
                title: 'Professional Team',
                description: 'Experienced security professionals at your service'
              },
              {
                icon: Tool,
                title: 'Advanced Technology',
                description: 'State-of-the-art security systems and equipment'
              },
              {
                icon: Award,
                title: 'Proven Track Record',
                description: 'Years of experience serving satisfied clients'
              }
            ].map((feature, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-lg shadow-md">
                <feature.icon className="w-12 h-12 mx-auto mb-4 text-[#6A88D0]" />
                <h3 className="text-xl font-semibold mb-2 text-[#444444]">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#6A88D0] py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Secure Your Future?</h2>
          <p className="text-white mb-8">Contact us today for a free consultation</p>
          <a href="/contact" className="bg-white text-[rgb(50 50 50)] px-6 py-3 rounded-md hover:bg-gray-100">
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;