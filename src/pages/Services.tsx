import React from 'react';
import { Shield, Settings, PenTool as Tool, Clock } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: 'Consultation',
      description: 'Our experts work closely with clients to understand their unique security needs and provide tailored solutions.',
      icon: Shield,
      image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
    },
    {
      title: 'Design',
      description: 'We design customized security systems that meet our clients\' specific requirements.',
      icon: Settings,
      image: 'https://images.unsplash.com/photo-1581092921461-eab62e97a780?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
    },
    {
      title: 'Installation',
      description: 'Our team installs security systems with precision and attention to detail.',
      icon: Tool,
      image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
    },
    {
      title: 'Maintenance',
      description: 'We provide regular maintenance and support to ensure our clients\' security systems operate at optimal levels.',
      icon: Clock,
      image: '/assets/mainenance.jpg'
    }
  ];

  return (
    <div className="bg-[#EBEEFE] py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-[#444444] mb-4">Our Services</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We offer comprehensive security solutions tailored to meet your specific needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 relative">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <service.icon className="w-16 h-16 text-white" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#444444] mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Case Studies Section */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-[#444444] mb-8 text-center">Case Studies</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-[#444444] mb-4">Access Control System for a Bank</h3>
              <p className="text-gray-600">
                We designed and installed an access control system for a bank, ensuring that only authorized personnel had access to sensitive areas.
              </p>
            </div>
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-[#444444] mb-4">CCTV Surveillance System for a Mall</h3>
              <p className="text-gray-600">
                We installed a CCTV surveillance system for a mall, providing real-time monitoring and recording of activities.
              </p>
            </div>
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-[#444444] mb-4">Intrusion Detection System for a Data Center</h3>
              <p className="text-gray-600">
                We designed and installed an intrusion detection system for a data center, detecting and alerting unauthorized access to sensitive areas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;