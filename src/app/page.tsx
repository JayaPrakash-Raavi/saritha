"use client";
import { ChangeEvent, FormEvent, useState } from "react";

const RequestForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    address: "",
    instructions: "",
  });

  // Handle input and textarea changes
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
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
    `;

    // Universal WhatsApp URL for both mobile and web
    const whatsappUrl = `https://wa.me/19016322989?text=${encodeURIComponent(
      message
    )}`;

    // Redirect the user
    window.location.href = whatsappUrl;
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <input
        name="phone"
        placeholder="Phone Number"
        value={formData.phone}
        onChange={handleChange}
        required
      />
      <input
        name="date"
        type="datetime-local"
        value={formData.date}
        onChange={handleChange}
        required
      />
      <textarea
        name="instructions"
        placeholder="Special Instructions"
        value={formData.instructions}
        onChange={handleChange}
      ></textarea>
      <button type="submit">Request Service</button>
    </form>
  );
};

export default RequestForm;
