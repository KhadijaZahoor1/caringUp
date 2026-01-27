import React from "react";
// Import your logo here
import Logo from "../../assets/images/CaringUp.svg";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const footerSections = [
    {
      title: "Platform",
      links: ["WeCare", "CareAide", "Insights"],
    },
    {
      title: "Solutions",
      links: ["Providers", "Payers", "Government", "Corporate"],
    },
    {
      title: "Evidence",
      links: ["RCT", "Case Studies"],
    },
    {
      title: "Company",
      links: ["About us", "Contact", "Terms & Conditions", "Privacy Policy"],
    },
  ];

  return (
    <footer className="w-full flex justify-center bg-white pt-24 pb-12">
      <div className="w-full max-w-[1440px] px-16 lg:px-24 ">
        {/* Top Section: Logo and Links */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-24">
          {/* Brand Column */}
          <div className="mb-12 md:mb-0">
            <img
              src={Logo}
              alt="CaringUp Logo"
              className="h-10 object-contain"
            />
          </div>

          {/* Links Columns */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-12 lg:gap-24">
            {footerSections.map((section, idx) => (
              <div key={idx} className="flex flex-col gap-5">
                <h4 className="text-[16px] font-bold text-slate-900 tracking-tight">
                  {section.title}
                </h4>
                <ul className="flex flex-col gap-4">
                  {section.links.map((link, linkIdx) => (
                    <li key={linkIdx}>
                      <a
                        href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
                        className="text-[14px] text-gray-500 hover:text-slate-900 transition-colors duration-200"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Divider Line */}
        <div className="w-full h-[1px] bg-gray-100 mb-10" />

        {/* Bottom Section: Copyright and Socials */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[13px] text-gray-400">
            © 2025, Caring Up Pte Ltd. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-gray-400 hover:text-slate-900 transition-colors"
            >
              <FaFacebookF size={18} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-slate-900 transition-colors"
            >
              <FaLinkedinIn size={18} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-slate-900 transition-colors"
            >
              <FaInstagram size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
