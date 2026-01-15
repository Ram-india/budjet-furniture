import React, { useEffect, useState } from "react";

import { NavLink } from "react-router-dom";
import { EmailSubscribeApi } from "../../api/emailSubcribeApi";
import {
  fixCommonTypos,
  isDisposableEmail,
  isValidEmail,
} from "../../utils/emailValidator";

const EmailSubscribe = () => {
  const links = [
    { label: "Privacy Policy", path: "/privacy-policy" },
    { label: "Terms & Conditions", path: "/terms" },
  ];

  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(""); //success | offline \ error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setStatus("");

    let cleanEmail = fixCommonTypos(email.trim().toLowerCase());

    if (!isValidEmail(cleanEmail)) {
      return setError("Please enter a valid email.");
    }
    if (isDisposableEmail(cleanEmail)) {
      return setError("Temporary emails are not allowed.");
    }
    // Browser Duplicate Protection

    const used = JSON.parse(localStorage.getItem("subscribedEmails") || "[]");
    if (used.includes(cleanEmail)) {
      return setError("This email already subscribed.");
    }

    setLoading(true);

    try {
      const res = await EmailSubscribeApi({ email: cleanEmail });
      if (res.data?.status === 300) {
        return setError("This email already subscribed.");
      }
      setStatus("success!");
      setEmail("");
    } catch (err) {
      // save offline
      const pending = JSON.parse(localStorage.getItem("pendingEmails") || "[]");
      if (!pending.includes(cleanEmail)) pending.push(cleanEmail);
      localStorage.setItem("pendingEmails", JSON.stringify(pending));
      setStatus("offline");
    } finally {
      setLoading(false);
    }
  };

  // Auto sync when internet returns

  useEffect(() => {
    const syncPending = async () => {
      const pending = JSON.parse(localStorage.getItem("pendingEmails") || "[]");
      if (!pending.length) return;
      try {
        const unique = [...new Set(pending)];
        for (const mail of unique) {
          await EmailSubscribeApi({ email: mail });
        }
        localStorage.removeItem("pendingEmails");
      } catch {}
    };
    window.addEventListener("online", syncPending);
    return () => window.removeEventListener("online", syncPending);
  }, []);

  return (
    <div className="cream-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20 grid gap-8 md:grid-cols-2 items-center border-b border-theme">
        <div>
          <p className="text-secondary font-medium mb-2 sm:mb-3 text-xs sm:text-sm uppercase tracking-wide">
            Get news & offers
          </p>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-primary mb-4">
            Join our newsletter for special deals.
          </h2>
        </div>

        <div>
          <form onSubmit={handleSubmit}>
            <div className="relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="peer w-full bg-transparent py-2 sm:py-3 border-b-2 border-gray-300 outline-none text-sm sm:text-base placeholder-gray-400 focus:border-primary transition-colors"
                required
              />
              <div className="flex justify-end mt-4">
                <button
                  type="submit"
                  disabled={loading}
                  className="flex items-center gap-2 px-7 py-3 rounded-full
                    bg-gradient-to-r from-amber-500 to-orange-600
                    text-white font-semibold shadow-md hover:scale-105 transition"
                    >
                  {loading ? "Submitting..." : "Subscribe"}
                  <span className="text-lg">→</span>
                </button>
              </div>
            </div>
            {error && <p className="text-red-600">{error}</p>}
            {status === "success" && (
              <p className="text-green-600">Subscribed successfully!</p>
            )}
            {status === "offline" && (
              <p className="text-yellow-600">
                Saved offline — will sync automatically.
              </p>
            )}
          </form>

          <p className="text-xs sm:text-sm text-gray-600 mt-3">
            By subscribing you agree to our{" "}
            <span className="inline-flex gap-2 [&>a]:after:content-['|'] [&>a]:after:mx-2 [&>a:last-child]:after:content-none">
              {links.map((link, index) => (
                <NavLink
                  key={index}
                  to={link.path}
                  className="text-primary hover:text-secondary transition-colors"
                >
                  {link.label}
                </NavLink>
              ))}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default EmailSubscribe;
