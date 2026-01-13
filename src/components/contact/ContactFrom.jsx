import React, { useState } from "react";
import { FiCheckCircle } from "react-icons/fi";
import { submitContactForm } from "../../api/contactApi";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile_number: "",
    notes: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await submitContactForm(formData);
      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        mobile_number: "",
        subject: "",
        notes: "",
      });
    } catch (error) {
      console.error("API Error:", error.response?.data || error.message);
      alert(
        error.response?.data?.message ||
          "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-lg p-8 sm:p-10 border border-gray-300 shadow-sm">
      {/* Success Message */}
      {submitted && (
        <div className="mb-6 p-4 bg-blue-50 border border-blue-300 rounded-lg flex items-start gap-3">
          <FiCheckCircle className="w-5 h-5 text-blue-700 mt-0.5" />
          <div>
            <h4 className="font-semibold text-blue-900">
              Submission Confirmed
            </h4>
            <p className="text-sm text-blue-800">
              Your inquiry has been received. We will respond within one
              business day.
            </p>
          </div>
        </div>
      )}

      <form className="space-y-6" onSubmit={handleSubmit}>
        {/* Name */}
        <div>
          <label className="block text-sm font-medium mb-1">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Your Name"
            className="w-full border-0 border-b border-gray-400 bg-transparent py-2
             focus:outline-none focus:border-blue-600
             hover:border-blue-500 transition-colors duration-300"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Email Address"
            className="w-full border-0 border-b border-gray-400 bg-transparent py-2
             focus:outline-none focus:border-blue-600
             hover:border-blue-500 transition-colors duration-300"
          />
        </div>

        {/* Mobile Number */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Mobile Number
          </label>
          <input
            type="text"
            name="mobile_number"
            value={formData.mobile_number}
            onChange={handleChange}
            required
            placeholder="Mobile Number"
            className="w-full border-0 border-b border-gray-400 bg-transparent py-2
             focus:outline-none focus:border-blue-600
             hover:border-blue-500 transition-colors duration-300"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">
            Subject
          </label>
        <input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          placeholder="Subject"
          className="w-full border-0 border-b border-gray-400 bg-transparent py-2
             focus:outline-none focus:border-blue-600
             hover:border-blue-500 transition-colors duration-300"
        />
        </div>

        {/* Message */}
        <div>
          <label className="block text-sm font-medium mb-1">Message</label>
          <textarea
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            required
            rows="3"
            placeholder="Your Message"
            className="w-full border-0 border-b border-gray-400 bg-transparent py-2 resize-none
             focus:outline-none focus:border-blue-600
             hover:border-blue-500 transition-colors duration-300"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="mt-6 px-6 py-3 bg-blue-600 text-white font-medium rounded
             hover:bg-blue-700 transition"
        >
          {loading ? "Submitting..." : "Send Message"}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
