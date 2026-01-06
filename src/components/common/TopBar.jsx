import {
    FiPhone,
    FiMail,
    FiClock
  } from "react-icons/fi";
  import {
    FaFacebookF,
    FaXTwitter,
    FaInstagram,
    FaYoutube
  } from "react-icons/fa6";
  
  export default function TopBar() {
    return (
      <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-gray-200 text-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-10">
  
            {/* LEFT INFO */}
            <div className="hidden md:flex items-center gap-6">
              <div className="flex items-center gap-2">
                <FiPhone className="text-secondary" />
                <span>+91 987654321</span>
              </div>
  
              <div className="flex items-center gap-2">
                <FiMail className="text-secondary" />
                <span>sales@example.com</span>
              </div>
  
              <div className="flex items-center gap-2">
                <FiClock className="text-secondary" />
                <span>10 AM - 9 PM</span>
              </div>
            </div>
  
            {/* RIGHT SOCIAL ICONS */}
            <div className="flex items-center gap-4 ml-auto">
              <SocialIcon icon={<FaFacebookF />} />
              <SocialIcon icon={<FaXTwitter />} />
              <SocialIcon icon={<FaInstagram />} />
              <SocialIcon icon={<FaYoutube />} />
            </div>
  
          </div>
        </div>
      </div>
    );
  }
  
  /* Social Icon Component */
  function SocialIcon({ icon }) {
    return (
      <a
        href="#"
        className="w-7 h-7 flex items-center justify-center border border-gray-600 rounded-full
                   hover:bg-primary hover:border-primary transition"
      >
        {icon}
      </a>
    );
  }