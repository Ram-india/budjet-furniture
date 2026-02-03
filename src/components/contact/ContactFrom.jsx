import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { submitContactForm } from "../../api/contactApi";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile_number: "",
    message: "",
    company: "", // honeypot
  });

  const [captchaVerified, setCaptchaVerified] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Honeypot check (frontend-only anti-bot)
    if (formData.company) return;

    if (!captchaVerified) {
      alert("Please verify you are not a robot");
      return;
    }

    setLoading(true);

    try {
      await submitContactForm({
        name: formData.name,
        email: formData.email,
        mobile_number: formData.mobile_number,
        message: formData.message,
      });

      setSubmitted(true);
    } catch (error) {
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="text-center py-10">
        <h3 className="text-2xl font-semibold text-green-600">
          Thank you! We’ll contact you soon.
        </h3>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">

      {/* Name */}
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        required
        value={formData.name}
        onChange={handleChange}
        className="w-full border px-4 py-3 rounded"
      />

      {/* Email */}
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        required
        value={formData.email}
        onChange={handleChange}
        className="w-full border px-4 py-3 rounded"
      />

      {/* Mobile */}
      <input
        type="tel"
        name="mobile_number"
        placeholder="Mobile Number"
        required
        value={formData.mobile_number}
        onChange={handleChange}
        className="w-full border px-4 py-3 rounded"
      />

      {/* Message */}
      <textarea
        name="message"
        placeholder="Your Message"
        rows="4"
        required
        value={formData.message}
        onChange={handleChange}
        className="w-full border px-4 py-3 rounded"
      />

      {/* 🕵️ Honeypot Field (Hidden) */}
      <input
        type="text"
        name="company"
        tabIndex="-1"
        autoComplete="off"
        className="hidden"
        onChange={handleChange}
      />

      {/* CAPTCHA */}
      <div className="flex justify-center">
        <ReCAPTCHA
          sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
          onChange={() => setCaptchaVerified(true)}
          onExpired={() => setCaptchaVerified(false)}
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={loading || !captchaVerified}
        className="w-full bg-blue-600 text-white py-3 rounded
                   hover:bg-blue-700 transition
                   disabled:opacity-50"
      >
        {loading ? "Submitting..." : "Send Message"}
      </button>

    </form>
  );
};

export default ContactForm;