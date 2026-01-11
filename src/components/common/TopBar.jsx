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
import { useSettings } from "../../context/SettingsContext";
import ContactItem from "./ContactItem";

  
  export default function TopBar() {
    const {settings} = useSettings();

    // Normalize phone number for tel
    const phone = settings?.mobile?.replace(/\s+/g, "");
    return (
      <div className="bg-white text-gray-800 text-xs sm:text-sm border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-10">
  
            {/* LEFT INFO */}
            <div className="hidden md:flex items-center gap-6">
              {/* phone */}
            
              {settings?.mobile && (
                <ContactItem
                icon={<FiPhone/>}
                href={`tel:${phone}`}
                label={settings.mobile}
                />
              )}
              {settings?.email && (
                  <ContactItem
                  icon={<FiMail/>}
                  href={`mailto:${settings.email}`}
                  label={settings.email}
                  />
                )}

              
              {settings?.working_time && (
                <ContactItem
                icon={<FiClock/>}
                label={settings.working_time}
                />
              )
              }
            </div>
  
            {/* RIGHT SOCIAL ICONS */}
            <div className="flex items-center gap-4 ml-auto">
              <SocialIcon href={settings?.facebook_link} icon={<FaFacebookF />} />
              <SocialIcon href={settings?.twitter_link} icon={<FaXTwitter />} />
              <SocialIcon href={settings?.instagram_link} icon={<FaInstagram />} />
              <SocialIcon href={settings?.youtube_link} icon={<FaYoutube />} />
            </div>
  
          </div>
        </div>
      </div>
    );
  }
  
  /* Social Icon Component */
  function SocialIcon({ icon, href }) {
    if (!href) return null;
  
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="w-7 h-7 flex items-center justify-center border border-gray-300 rounded-full
                   text-gray-600 hover:text-white hover:bg-primary hover:border-primary transition-all duration-300"
      >
        {icon}
      </a>
    );
  }