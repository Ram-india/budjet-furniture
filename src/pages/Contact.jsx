import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import PageHeader from "../components/common/PageHeader";

export default function Contact() {
  return (
    <section className="bg-white">
      {/* HEADER */}
      {/* HERO */}
      <PageHeader
        title="Contact Us"
        subtitle=" Have questions? We’d love to hear from you. Send us a message and we’ll
      respond as soon as possible."
      />
      <div className="max-w-7xl mx-auto px-6 py-20 text-center">
        <h1 className="text-4xl font-bold text-primary">Contact Us</h1>
        <p className="text-theme mt-3 max-w-xl mx-auto"></p>
      </div>

      {/* CONTENT */}
      <div className="max-w-7xl mx-auto px-6 pb-24 grid gap-12 lg:grid-cols-2">
        {/* LEFT: CONTACT INFO */}
        <div className="space-y-8">
          <div className="flex items-start gap-4">
            <FiMapPin className="text-2xl text-primary mt-1" />
            <div>
              <h4 className="font-semibold text-primary">Address</h4>
              <p className="text-theme">
                Furniture Shop,
                <br />
                Ramanathapuram, Tamil Nadu
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <FiPhone className="text-2xl text-primary mt-1" />
            <div>
              <h4 className="font-semibold text-primary">Phone</h4>
              <p className="text-theme">+91 98765 43210</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <FiMail className="text-2xl text-primary mt-1" />
            <div>
              <h4 className="font-semibold text-primary">Email</h4>
              <p className="text-theme">info@example.com</p>
            </div>
          </div>

          {/* MAP */}
          <div className="w-full h-72 rounded-xl overflow-hidden border">
            <iframe
              title="map"
              className="w-full h-full"
              loading="lazy"
              src="https://www.google.com/maps?q=Ramanathapuram&output=embed"
            />
          </div>
        </div>

        {/* RIGHT: CONTACT FORM */}
        <div className="bg-theme/5 rounded-2xl p-8">
          <h3 className="text-2xl font-semibold text-primary mb-6">
            Send us a message
          </h3>
          <form className="space-y-6">
            {/* FULL NAME */}
            <div>
              <label className="block text-sm mb-1">Full Name *</label>
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your name"
                  className="peer w-full bg-transparent py-2
                   border-b border-gray-300
                   outline-none focus:border-transparent"
                />
                <span
                  className="absolute left-0 -bottom-[1px] h-[2px] w-0 bg-primary
                   transition-all duration-300
                   peer-focus:w-full"
                />
              </div>
            </div>

            {/* EMAIL */}
            <div>
              <label className="block text-sm mb-1">Email *</label>
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="your@email.com"
                  className="peer w-full bg-transparent py-2
                   border-b border-gray-300
                   outline-none focus:border-transparent"
                />
                <span
                  className="absolute left-0 -bottom-[1px] h-[2px] w-0 bg-primary
                   transition-all duration-300
                   peer-focus:w-full"
                />
              </div>
            </div>

            {/* PHONE */}
            <div>
              <label className="block text-sm mb-1">Phone</label>
              <div className="relative">
                <input
                  type="tel"
                  name="mobile_number"
                  placeholder="+91"
                  className="peer w-full bg-transparent py-2
                   border-b border-gray-300
                   outline-none focus:border-transparent"
                />
                <span
                  className="absolute left-0 -bottom-[1px] h-[2px] w-0 bg-primary
                   transition-all duration-300
                   peer-focus:w-full"
                />
              </div>
            </div>

            {/* MESSAGE */}
            <div>
              <label className="block text-sm mb-1">Message *</label>
              <div className="relative">
                <textarea
                  required
                  rows="4"
                  placeholder="Write your message..."
                  name="message"
                  className="peer w-full bg-transparent py-2 resize-none
                   border-b border-gray-300
                   outline-none focus:border-transparent"
                />
                <span
                  className="absolute left-0 -bottom-[1px] h-[2px] w-0 bg-primary
                   transition-all duration-300
                   peer-focus:w-full"
                />
              </div>
            </div>

            {/* SUBMIT */}
            <button
              type="submit"
              className="inline-block bg-primary text-white px-8 py-3 rounded-full
               hover:bg-secondary transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
