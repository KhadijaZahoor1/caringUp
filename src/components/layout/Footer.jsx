import React from "react";
// Import your logo here
import Logo from "../../assets/images/CaringUp.svg";
import facebook from '../../assets/icons/facebookFill.png'
import linkedIn from '../../assets/icons/linkedinBox.png'
import instagram from '../../assets/icons/instagramLine.png'

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
    <footer className="bg-white md:pt-[120px] pt-20 pb-16">
      <div className="max-w-[1176px] mx-auto">
        {/* Top Section: Logo and Links */}
        <div className="flex flex-col md:flex-row justify-between items-start md:mb-24 px-4 md:px-7 lg:px-0">
         
          <div className="">
            <img
              src={Logo}
              alt="CaringUp Logo"
              className="h-10 object-contain"
            />
          </div>

          {/* Links Columns */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 lg:gap-8 py-8 md:py-0 w-full md:w-auto">
            {footerSections.map((section, idx) => (
              <div key={idx} className="flex flex-col md:gap-5 gap-3">
                <h4 className="text-[16px] body-text font-medium text-primary">
                  {section.title}
                </h4>
                <ul className="flex flex-col md:gap-4 gap-2">
                  {section.links.map((link, linkIdx) => (
                    <li key={linkIdx}>
                      <a
                        href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
                        className="text-[15px] text-primary body-text font-normal"
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
        <div className="w-full h-[1px] bg-[#E2E8F0] mb-16" />

        {/* Bottom Section: Copyright and Socials */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 px-8  lg:px-0">
          <p className="text-[14px] text-secondary font-body font-light">
            © 2025, Caring Up Pte Ltd. All rights reserved.
          </p>

          <div className="flex items-center gap-5">
            <img src={facebook} />
            <img src={linkedIn} />
            <img src={instagram} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
