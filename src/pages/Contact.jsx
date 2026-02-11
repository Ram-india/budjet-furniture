import { useEffect, useState } from "react";
import { FiMapPin, FiPhone, FiMail } from "react-icons/fi";
import ContactForm from "../components/contact/ContactFrom";
import PageHeader from "../components/common/PageHeader";
import { getSettings } from "../api/settingsApi";

export default function Contact() {
  const [branches, setBranches] = useState([]);

  useEffect(() => {
    loadSettings();
  }, []);

  const loadSettings = async () => {
    try {
      const res = await getSettings();
      const s = res.data;

      const data = [
        {
          id: 1,
          title: "Head Office",
          address: s.address,
          phone: s.mobile,
          email: s.email,
          map: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d246.03688949711585!2d78.8302085!3d9.3694806!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b01a2a9fc37b9d5%3A0x87c8ce7ffa03365a!2sBudget%20Furnitures!5e0!3m2!1sen!2sin!4v1770792223063!5m2!1sen!2sin",
          
        },
        {
          id: 2,
          title: s.one_label || "Branch Office",
          address: s.one_address,
          phone: s.one_mobile,
          email: s.email,
          map: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d125922.47767685373!2d78.7928317!3d9.5019953!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b01b3c69e2d405d%3A0x9e675efb9d7c5fa!2sBudget%20Furniture!5e0!3m2!1sen!2sin!4v1770797034149!5m2!1sen!2sin",
          
        },
      ].filter(b => b.address);

      setBranches(data);
    } catch (err) {
      console.error("Failed to load contact data", err);
    }
  };

  return (
    <section className="bg-gray-50">
      <PageHeader
        title="Contact Us"
        subtitle="Reach out to us — we’d love to hear from you"
      />

      {/* ADDRESS + FORM */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-2 gap-14">

        {/* LEFT – ADDRESSES */}
        <div className="space-y-8">
          {branches.map(branch => (
            <AddressCard key={branch.id} branch={branch} />
          ))}
        </div>

        {/* RIGHT – FORM */}
        <div >
          
          <ContactForm />
        </div>
      </div>

      {/* MAPS SECTION */}
     {/* MAPS – SINGLE ROW */}
<div className="max-w-7xl mx-auto px-6 pb-20">
  <h3 className="text-2xl font-semibold mb-8 text-center">
    Our Locations
  </h3>

  <div className="grid md:grid-cols-2 gap-8">
    {branches.map(branch => (
      <div
        key={branch.id}
        className="rounded-2xl overflow-hidden shadow-lg border bg-white"
      >
        <div className="px-6 py-4 border-b font-semibold text-gray-900">
          {branch.title}
        </div>

        <iframe src={branch.map}
          title={branch.title}
          className="w-full h-[360px]"
          loading="lazy"
        />
      </div>
    ))}
  </div>
</div>
    </section>
  );
}

/* ---------------- COMPONENTS ---------------- */

function AddressCard({ branch }) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-8">
      <h3 className="text-xl font-semibold mb-6">{branch.title}</h3>

      <div className="space-y-5">
        <InfoRow icon={<FiMapPin />} label="Address" value={branch.address} />
        {branch.phone && (
          <InfoRow icon={<FiPhone />} label="Phone" value={branch.phone} />
        )}
        {branch.email && (
          <InfoRow icon={<FiMail />} label="Email" value={branch.email} />
        )}
      </div>
    </div>
  );
}

function InfoRow({ icon, label, value }) {
  return (
    <div className="flex gap-4">
      <div className="h-12 w-12 rounded-xl bg-gray-100 flex items-center justify-center text-lg">
        {icon}
      </div>
      <div>
        <p className="font-medium text-gray-900">{label}</p>
        <p className="text-sm text-gray-600 mt-1">{value}</p>
      </div>
    </div>
  );
}