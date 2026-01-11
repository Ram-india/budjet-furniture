import { FiPhone, FiMail, FiMapPin, FiClock, FiCheckCircle, FiChevronDown } from "react-icons/fi";
import PageHeader from "../components/common/PageHeader";
import PageLayout from "../components/common/PageLayout";
import { useState } from "react";
import { useSettings } from "../context/SettingsContext";

export default function Contact() {
    const { settings } = useSettings();
  const [formData, setFormData] = useState({ name: "", email: "", mobile_number: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [openFAQ, setOpenFAQ] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      setSubmitted(true);
      setFormData({ name: "", email: "", mobile_number: "", message: "" });
      setLoading(false);
      
      // Reset message after 5 seconds
      setTimeout(() => setSubmitted(false), 5000);
    }, 1000);
  };

  const faqItems = [
    {
      id: 1,
      question: "What are your official business hours?",
      answer: "Our office operates Monday through Saturday, 10:00 AM to 6:00 PM (Indian Standard Time). We remain closed on Sundays and nationally recognized public holidays."
    },
    {
      id: 2,
      question: "What is your standard response timeframe?",
      answer: "We endeavor to respond to all inquiries within one business day. For matters requiring immediate attention, we recommend contacting us via telephone during business hours."
    },
    {
      id: 3,
      question: "Do you provide customized furniture solutions?",
      answer: "Yes. We offer comprehensive customization services for furniture requirements. Please submit your specifications via the inquiry form or contact our office directly, and our team will provide professional consultation and recommendations."
    },
    {
      id: 4,
      question: "What is your delivery and shipping policy?",
      answer: "Complimentary delivery is available for orders meeting specified criteria. For detailed information regarding delivery terms, service areas, and applicable charges, please reach out to our team or review the terms during the order process."
    }
  ];

  return (
    <section className="bg-white">
      {/* HEADER */}
      <PageHeader
        title="Contact Us"
        subtitle="Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible."
      />

      {/* INTRO SECTION */}
      <PageLayout className="py-16 sm:py-20">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">Contact Information</h1>
          <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed font-light">
            For inquiries regarding our products and services, please contact us using any of the methods below. We maintain professional correspondence standards and will address your inquiry in a timely manner.
          </p>
        </div>
      </PageLayout>

      {/* CONTENT */}
      <PageLayout className="pb-20">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* LEFT: CONTACT INFO */}
          <div className="space-y-6">
            {/* Address Card */}
            <div className="bg-white rounded-lg p-6 sm:p-8 border border-gray-300 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <FiMapPin className="w-6 h-6 sm:w-7 sm:h-7 text-gray-800 mt-1" />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-base sm:text-lg text-gray-900 mb-3">Registered Office</h4>
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-light">
                    {settings?.address}
                  </p>
                </div>
              </div>
            </div>

            {/* Phone Card */}
            <div className="bg-white rounded-lg p-6 sm:p-8 border border-gray-300 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <FiPhone className="w-6 h-6 sm:w-7 sm:h-7 text-gray-800 mt-1" />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-base sm:text-lg text-gray-900 mb-3">Telephone</h4>
                  <p className="text-sm sm:text-base text-gray-900 font-semibold">{settings?.mobile}</p>
                  <p className="text-xs sm:text-sm text-gray-600 mt-2 font-light">Monday through Saturday, 10:00 AM to 6:00 PM (IST)</p>
                </div>
              </div>
            </div>

            {/* Email Card */}
            <div className="bg-white rounded-lg p-6 sm:p-8 border border-gray-300 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <FiMail className="w-6 h-6 sm:w-7 sm:h-7 text-gray-800 mt-1" />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-base sm:text-lg text-gray-900 mb-3">Electronic Mail</h4>
                  <p className="text-sm sm:text-base text-gray-900 font-semibold break-all">{settings?.email}</p>
                  <p className="text-xs sm:text-sm text-gray-600 mt-2 font-light">Response time: Within 24 business hours</p>
                </div>
              </div>
            </div>

            {/* MAP */}
            <div className="w-full h-64 sm:h-72 rounded-2xl overflow-hidden border-2 border-gray-200 shadow-md">
              <iframe
                title="map"
                className="w-full h-full"
                loading="lazy"
                src="https://www.google.com/maps?q=Ramanathapuram&output=embed"
              />
            </div>
          </div>

          {/* RIGHT: CONTACT FORM */}
          <div className="bg-white rounded-lg p-8 sm:p-10 border border-gray-300 shadow-sm">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Inquiry Form</h3>
            <p className="text-sm sm:text-base text-gray-700 mb-8 font-light">Please complete the following form with your inquiry details. All marked fields are required for processing.</p>

            {/* Success Message */}
            {submitted && (
              <div className="mb-6 p-4 bg-blue-50 border border-blue-300 rounded-lg flex items-start gap-3">
                <FiCheckCircle className="w-5 h-5 text-blue-700 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-blue-900 text-sm sm:text-base">Submission Confirmed</h4>
                  <p className="text-xs sm:text-sm text-blue-800">Your inquiry has been successfully received. We will review your message and respond accordingly within one business day.</p>
                </div>
              </div>
            )}

            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* FULL NAME */}
              <div>
                <label className="block text-sm sm:text-base font-semibold text-gray-900 mb-2">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <div className="relative group">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your full name"
                    className="w-full bg-transparent px-0 py-3 sm:py-3.5 text-sm sm:text-base border-b-2 border-gray-300 outline-none focus:border-gray-900 transition"
                  />
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-900 transition-all duration-300 group-focus-within:w-full"></span>
                </div>
              </div>

              {/* EMAIL */}
              <div>
                <label className="block text-sm sm:text-base font-semibold text-gray-900 mb-2">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <div className="relative group">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your@organization.com"
                    className="w-full bg-transparent px-0 py-3 sm:py-3.5 text-sm sm:text-base border-b-2 border-gray-300 outline-none focus:border-gray-900 transition"
                  />
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-900 transition-all duration-300 group-focus-within:w-full"></span>
                </div>
              </div>

              {/* PHONE */}
              <div>
                <label className="block text-sm sm:text-base font-semibold text-gray-900 mb-2">
                  Contact Number
                </label>
                <div className="relative group">
                  <input
                    type="tel"
                    name="mobile_number"
                    value={formData.mobile_number}
                    onChange={handleChange}
                    placeholder="+91 XXXXX XXXXX"
                    className="w-full bg-transparent px-0 py-3 sm:py-3.5 text-sm sm:text-base border-b-2 border-gray-300 outline-none focus:border-gray-900 transition"
                  />
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-900 transition-all duration-300 group-focus-within:w-full"></span>
                </div>
              </div>

              {/* MESSAGE */}
              <div>
                <label className="block text-sm sm:text-base font-semibold text-gray-900 mb-2">
                  Message <span className="text-red-500">*</span>
                </label>
                <div className="relative group">
                  <textarea
                    required
                    rows="5"
                    placeholder="Please provide details regarding your inquiry..."
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-transparent px-0 py-3 sm:py-3.5 text-sm sm:text-base border-b-2 border-gray-300 outline-none focus:border-gray-900 transition resize-none"
                  />
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-900 transition-all duration-300 group-focus-within:w-full"></span>
                </div>
                <p className="text-xs sm:text-sm text-gray-600 mt-2 font-light">Please provide sufficient detail to allow us to address your inquiry effectively.</p>
              </div>

              {/* SUBMIT */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gray-900 text-white py-3 sm:py-4 rounded-lg font-semibold text-sm sm:text-base hover:bg-gray-800 transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "Processing..." : "Submit Inquiry"}
              </button>

              {/* Help Text */}
              <p className="text-xs sm:text-sm text-gray-600 text-center font-light">
                Expected response time: One business day
              </p>
            </form>
          </div>
        </div>
      </PageLayout>

      {/* FAQ SECTION */}
      <PageLayout className="py-16 sm:py-20 border-t border-gray-300">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {faqItems.map((item) => (
              <div 
                key={item.id}
                className="bg-gray-50 border border-gray-300 rounded-lg overflow-hidden hover:bg-gray-100 transition"
              >
                <button
                  onClick={() => setOpenFAQ(openFAQ === item.id ? null : item.id)}
                  className="w-full text-left font-semibold text-sm sm:text-base text-gray-900 p-6 flex items-center justify-between hover:text-gray-700 transition"
                >
                  {item.question}
                  <FiChevronDown 
                    className={`w-5 h-5 text-gray-600 flex-shrink-0 transition-transform duration-300 ${
                      openFAQ === item.id ? 'transform rotate-180' : ''
                    }`}
                  />
                </button>
                {openFAQ === item.id && (
                  <div className="px-6 pb-6 border-t border-gray-300 animate-fadeIn">
                    <p className="text-sm sm:text-base text-gray-700 font-light leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </PageLayout>
    </section>
  );
}
