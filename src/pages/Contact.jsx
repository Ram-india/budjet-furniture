import { FiPhone, FiMail, FiMapPin, FiClock, FiCheckCircle, FiChevronDown } from "react-icons/fi";
import PageHeader from "../components/common/PageHeader";
import PageLayout from "../components/common/PageLayout";
import { useState } from "react";
import { useSettings } from "../context/SettingsContext";
import ContactForm from "../components/contact/ContactFrom";


export default function Contact() {
    const { settings } = useSettings();


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
          <ContactForm/>
          
        </div>
      </PageLayout>

      
    </section>
  );
}
