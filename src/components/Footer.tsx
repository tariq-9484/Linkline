import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { FaGoogle } from "react-icons/fa"; // Import Google icon

const Footer = () => {
  return (
    <footer className="bg-[#444444] text-white">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Link-Line Solutions</h3>
            <p className="text-sm">Security Solutions Experts</p>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-2">
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                <span className="text-sm">+92 323 7391235</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                <span className="text-sm">ali.info.com.pk@gmail.com</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                <span className="text-sm">
                  Office # 102-F, 1st Floor, Raja Center, Main Market, Gulberg-II, Lahore
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links & Follow Us Section */}
          <div className="flex justify-between items-start w-full">
            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="/about" className="text-sm hover:text-[#6A88D0]">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="/services" className="text-sm hover:text-[#6A88D0]">
                    Services
                  </a>
                </li>
                <li>
                  <a href="/products" className="text-sm hover:text-[#6A88D0]">
                    Products
                  </a>
                </li>
                <li>
                  <a href="/contact" className="text-sm hover:text-[#6A88D0]">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Follow Us On - Moved to the Right Side */}
            {/* Follow Us On - Moved to the Right Side */}
<div className="ml-12 flex flex-col items-center">
  <p className="text-lg font-semibold mb-4">Follow Us On</p>
  <a
    href="https://www.google.com/search?q=linkline+solutions&sca_esv=8a5f3c529fc99551&sxsrf=AHTn8zqvbiilQ7maweFSvWAp6z0nFDEvXg%3A1740080781262&ei=jYa3Z6_ID9q3wN4PpZTQkA8&ved=0ahUKEwjvwuOGgtOLAxXaG9AFHSUKFPIQ4dUDCBI&uact=5&oq=linkline+solutions&gs_lp=Egxnd3Mtd2l6LXNlcnAiEmxpbmtsaW5lIHNvbHV0aW9uczIEEAAYRzIEEAAYR0jhbFDZB1jZB3ABeAOQAQCYAQCgAQCqAQC4AQPIAQD4AQGYAgOgAhnCAgoQABiwAxjWBBhHwgINEAAYsAMY1gQYRxjJA8ICDhAAGIAEGLADGJIDGIoFmAMA4gMFEgExIECIBgGQBgKSBwEzoAcA&sclient=gws-wiz-serp"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:scale-110 transition-transform duration-200 mt-2"
  >
    <FaGoogle className="w-12 h-12 text-blue-500" />
  </a>
</div>

          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-8 pt-8 border-t border-gray-700">
          <p className="text-center text-sm">
            © {new Date().getFullYear()} Link-Line Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
