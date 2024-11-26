'use client'
import { ChangeEvent, FormEvent, useState } from "react";

const RequestForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    address: "",
    instructions: "",
    services: {
      iron: 0,
      drywash: 0,
      rolling: 0,
      shining: 0,
    },
  });

  // Handle input and textarea changes
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    if (["iron", "drywash", "rolling", "shining"].includes(name)) {
      setFormData({
        ...formData,
        services: {
          ...formData.services,
          [name]: parseInt(value) || 0,
        },
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  // Handle form submission
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const message = `
      New Dry Wash Request:
      Name: ${formData.name}
      Phone: ${formData.phone}
      Date: ${formData.date}
      Address: ${formData.address}
      Instructions: ${formData.instructions}

      Services Requested:
      Iron: ${formData.services.iron} items
      Dry Wash: ${formData.services.drywash} items
      Rolling: ${formData.services.rolling} items
      Shining: ${formData.services.shining} items
    `;

    // Redirect to WhatsApp with the pre-filled message
    const whatsappUrl = `https://api.whatsapp.com/send?phone=YOUR_PHONE_NUMBER&text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4 sm:p-6 lg:p-12">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-white rounded-lg shadow-lg p-6 sm:p-8 space-y-6"
      >
        <h1 className="text-2xl font-bold text-gray-800 text-center">
          Request Dry Wash
        </h1>
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            id="name"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="Enter your phone number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label htmlFor="date" className="block text-sm font-medium text-gray-700">
            Service Date & Time
          </label>
          <input
            id="date"
            name="date"
            type="datetime-local"
            value={formData.date}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <h2 className="text-lg font-medium text-gray-800">Services</h2>
          <div className="space-y-4">
            <div>
              <label htmlFor="iron" className="block text-sm font-medium text-gray-700">
                Iron (Quantity)
              </label>
              <input
                id="iron"
                name="iron"
                type="number"
                min="0"
                value={formData.services.iron}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="drywash" className="block text-sm font-medium text-gray-700">
                Dry Wash (Quantity)
              </label>
              <input
                id="drywash"
                name="drywash"
                type="number"
                min="0"
                value={formData.services.drywash}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="rolling" className="block text-sm font-medium text-gray-700">
                Rolling (Quantity)
              </label>
              <input
                id="rolling"
                name="rolling"
                type="number"
                min="0"
                value={formData.services.rolling}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="shining" className="block text-sm font-medium text-gray-700">
                Shining (Quantity)
              </label>
              <input
                id="shining"
                name="shining"
                type="number"
                min="0"
                value={formData.services.shining}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>
        <div>
          <label htmlFor="instructions" className="block text-sm font-medium text-gray-700">
            Special Instructions
          </label>
          <textarea
            id="instructions"
            name="instructions"
            placeholder="Any special requests?"
            value={formData.instructions}
            onChange={handleChange}
            rows={3}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-bold py-2 rounded-md hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:outline-none"
        >
          Request Service
        </button>
      </form>
    </div>
  );
};

export default RequestForm;
