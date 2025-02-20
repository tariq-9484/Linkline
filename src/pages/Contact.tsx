import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const Contact = () => {
  // Ensure the formRef is correctly initialized
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
  
    setMessage(""); // ✅ Clear previous message when sending starts
    setLoading(true);
  
    emailjs
      .sendForm(
        "service_95ojpq5",  // Replace with your EmailJS service ID
        "template_280oamp", // Replace with your EmailJS template ID
        formRef.current,
        "1MUtZ-5rCysD41Mbo"  // Replace with your EmailJS public key
      )
      .then(
        () => {
          setMessage("Your message has been sent successfully!");
          setLoading(false);
          formRef.current.reset();
  
          // ✅ Make message disappear after 1 second
          setTimeout(() => {
            setMessage("");
          }, 1000);
        },
        (error) => {
          console.error("Error sending email:", error);
          setMessage("Failed to send the message. Please try again.");
          setLoading(false);
        }
      );
  };
  
  
  
  return (
    <div className="bg-[#EBEEFE] py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-[#444444] mb-4">Contact Us</h1>
          <p className="text-lg text-gray-600">Get in touch with our team of security experts</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-[#444444] mb-6">Send us a Message</h2>
            <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
    <input
      type="text"
      name="from_name"  // ✅ Must match `{{from_name}}` in EmailJS
      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#6A88D0] focus:border-[#6A88D0]"
      placeholder="Your name"
      required
    />
  </div>
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
    <input
      type="email"
      name="from_email"  // ✅ Must match `{{from_email}}` in EmailJS
      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#6A88D0] focus:border-[#6A88D0]"
      placeholder="your@email.com"
      required
    />
  </div>
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
    <textarea
      name="message"  // ✅ Must match `{{message}}` in EmailJS
      rows={4}
      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#6A88D0] focus:border-[#6A88D0]"
      placeholder="Your message"
      required
    ></textarea>
  </div>
  
  <button
    type="submit"
    className={`w-full text-white py-2 px-4 rounded-md flex justify-center items-center ${
      loading ? "bg-gray-400 cursor-not-allowed" : "bg-[#6A88D0] hover:bg-[#6686CF]"
    }`}
    disabled={loading}
  >
    {loading ? "Sending..." : "Send Message"}
  </button>

  {/* ✅ Success Message (Only Visible When Sent) */}
  {message && (
    <p className={`text-center mt-4 font-semibold ${message.includes("successfully") ? "text-green-600" : "text-red-600"}`}>
      {message}
    </p>
  )}
</form>



            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold text-[#444444] mb-6">Location</h2>
              <div className="w-full h-80 rounded-lg overflow-hidden shadow-lg">
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d54416.31291543518!2d74.31021617189458!3d31.52362279809447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x391905016e9a8021%3A0x399607d6dab76c79!2sSky%20Glow%20Pvt%20Ltd%2C%20Raja%20Center%20second%20floor%2C%20Gulberg%202%2C%20Lahore%2C%2054000%2C%20Pakistan!3m2!1d31.523629399999997!2d74.35141589999999!5e0!3m2!1sen!2s!4v1738432772784!5m2!1sen!2s"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
            </div>
          
          </div>

          

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold text-[#444444] mb-6">Contact Information</h2>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="w-6 h-6 text-[#6A88D0] mr-4" />
                  <div>
                    <h3 className="font-medium text-[#444444]">Phone</h3>
                    <p className="text-gray-600">+92 323 7391235</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Mail className="w-6 h-6 text-[#6A88D0] mr-4" />
                  <div>
                    <h3 className="font-medium text-[#444444]">Email</h3>
                    <p className="text-gray-600">ali.info.com.pk@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-6 h-6 text-[#6A88D0] mr-4" />
                  <div>
                    <h3 className="font-medium text-[#444444]">Address</h3>
                    <p className="text-gray-600">
                      Office # 102-F, 1st Floor, Raja Center, Main Market, Gulberg-II, Lahore
                    </p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Clock className="w-6 h-6 text-[#6A88D0] mr-4" />
                  <div>
                    <h3 className="font-medium text-[#444444]">Business Hours</h3>
                    <p className="text-gray-600">Monday - Friday: 9:00 AM - 8:00 PM</p>
                  </div>
                </div>
                <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold text-[#444444] mb-6">Emergency Support</h2>
              <p className="text-gray-600 mb-4">
                For urgent security concerns or emergency support, please contact our 24/7 helpline:
              </p>
              <div className="flex items-center justify-center bg-[#EBEEFE] p-4 rounded-md">
                <Phone className="w-6 h-6 text-[#6A88D0] mr-2" />
                <span className="text-xl font-bold text-[#444444]">+92 323 7391235</span>
              </div>
            </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
