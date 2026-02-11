import { useState, lazy, Suspense } from "react";
import { FiUser, FiMail, FiPhone, FiMessageSquare } from "react-icons/fi";
import { submitContactForm } from "../../api/contactApi";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile_number: "",
    subject: "",
    notes: "",
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError("");

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
    } catch (err) {
      console.error(err.response?.data || err.message);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-2xl p-10 text-center animate-fadeIn">
        <h3 className="text-2xl font-semibold text-green-700 mb-2">
          Thank you for contacting us
        </h3>
        <p className="text-sm text-green-600">
          Our team will reach out to you shortly.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white border border-gray-200 rounded-2xl shadow-xl p-8 sm:p-10">
      {/* Header */}
      <div className="mb-8">
        <h3 className="text-2xl font-semibold text-gray-900">
          Send Us a Message
        </h3>
        <p className="text-sm text-gray-500 mt-1">
          Fill out the form and our team will get back to you.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name */}
        <Input
          icon={<FiUser />}
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
        />

        {/* Email */}
        <Input
          icon={<FiMail />}
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
        />

        {/* Mobile */}
        <Input
          icon={<FiPhone />}
          type="tel"
          name="mobile_number"
          placeholder="Mobile Number"
          value={formData.mobile_number}
          onChange={handleChange}
        />

         {/* Subject */}
        <Input
          icon={<FiMessageSquare />}
          name="subject"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleChange}
        />

        {/* Message */}
        <Textarea
          icon={<FiMessageSquare />}
          name="notes"
          placeholder="Your Message"
          value={formData.notes}
          onChange={handleChange}
        />

        {/* Error */}
        {error && <p className="text-sm text-red-600 text-center">{error}</p>}

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 rounded-xl font-semibold text-white
            bg-gray-900 hover:bg-black transition
            disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;

/* ---------- Small UI Components ---------- */

const Input = ({ icon, ...props }) => (
  <div className="relative">
    <span className="absolute left-4 top-4 text-gray-400">{icon}</span>
    <input
      required
      {...props}
      className="w-full pl-12 pr-4 py-3 border rounded-xl
        focus:ring-2 focus:ring-gray-900 focus:border-gray-900
        transition"
    />
  </div>
);

const Textarea = ({ icon, ...props }) => (
  <div className="relative">
    <span className="absolute left-4 top-4 text-gray-400">{icon}</span>
    <textarea
      required
      rows="4"
      {...props}
      className="w-full pl-12 pr-4 py-3 border rounded-xl resize-none
        focus:ring-2 focus:ring-gray-900 focus:border-gray-900
        transition"
    />
  </div>
);
