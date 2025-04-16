"use client";  // Ensure this component runs as a client component

import React, { useState } from "react";
import Button from "@/components/atoms/button";
import { images, pricing } from "@/constants";
import Image from "next/image";

const PricingList: React.FC = () => {
  const [showForm, setShowForm] = useState(false);  // State to show/hide form
  const [formData, setFormData] = useState({ name: '', email: '', message: '' }); // Form data state
  const [isSubmitting, setIsSubmitting] = useState(false);  // Submission status

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const GOOGLE_SHEET_WEBHOOK_URL = "https://script.google.com/macros/s/AKfycbzTl8vG34MxxX3P-ehZWedqUVuWLyCe2QUSfrZA24PDvWoq078W_qaYDu96G0FLZaFW/exec";
  
    // Cast e.target to HTMLFormElement
    const form = e.target as HTMLFormElement;
  
    try {
      const response = await fetch(GOOGLE_SHEET_WEBHOOK_URL, {
        method: "POST",
        body: new FormData(form),  // Use FormData from the form directly
      });
  
      if (response.ok) {
        alert("Thank you! Your form is submitted successfully.");
        setFormData({ name: "", email: "", message: "" });  // Clear form
        setShowForm(false);  // Close the form
        window.location.reload(); // Reload the page
      } else {
        console.error("Failed to submit the form");
        alert("Failed to submit the form. Please check the console for details.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };
  
  
  return (
    <>
      <div className="flex gap-4 max-lg:flex-wrap">
        {pricing.map((item) => (
          <div
            key={item.id}
            className="h-full w-[19rem] rounded-[2rem] border border-n-6 bg-n-8 px-6 odd:my-4 odd:py-8 even:py-14 max-lg:w-full lg:w-auto [&>h4]:first:text-color-2 [&>h4]:last:text-color-3 [&>h4]:even:text-color-1"
            >
            <h4 className="h4 mb-4">{item.title}</h4>
            <p className="body-2 mb-3 min-h-16 text-n-1/50">{item.description}</p>

            <div className="mb-6 flex h-[5.5rem] items-center">
              {item.price && (
                <>
                  <span className="h3">$</span>
                  <span className="text-[5.5rem] font-bold leading-none">{item.price}</span>
              </>
              )}
            </div>

            <Button
              className="mb-6 w-full"
              onClick={() => {
                if (item.price) {
                  setShowForm(true);  // Show form on "Get started"
                } else {
                  window.location.href = "mailto:scriper.ai@gmail.com";  // Direct to email on "Contact us"
                }
              }}
              white={!!item.price}
            >
              {item.price ? "Pre-Register Now" : "Contact us"}
            </Button>
            

            <ul>
              {item.features.map((feature, index) => (
                <li key={index} className="flex items-start border-t border-n-6 py-5">
                  <Image src={images.check} width={24} height={24} alt="check" />
                  <p className="body-2 ml-4">{feature}</p>
                </li>
              ))}
            </ul>
          </div>
          ))}
      </div>

      {/* Registration Form Modal */}
      {showForm && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg w-[400px]">
            <h2 className="text-xl text-gray-900 font-bold mb-4">Register</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  className="border w-full p-2 text-gray-900 bg-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  className="border w-full p-2 text-gray-900 bg-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block font-medium text-gray-700">Message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Enter your message"
                  className="border w-full p-2 text-gray-900 bg-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="flex justify-between">
                <button
                  type="submit"
                  className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
                </button>
                <button
                  type="button"
                  className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600"
                  onClick={() => setShowForm(false)}
                >
                  Close
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default PricingList;
