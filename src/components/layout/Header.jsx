import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/CaringUp.svg";
import DownArrow from "../../assets/svg/DownArrow";
import { RxCross1, RxHamburgerMenu } from "react-icons/rx";

const NAV_LINKS = [
  { label: "Platform", path: "/platform" },
  { 
    label: "Industry Solutions", 
    path: "/solution", 
    hasDropdown: true,
    dropdown: [
      { label: "Providers", path: "/solution/providers" },
      { label: "Payers", path: "/solution/payers" },
      { label: "Government", path: "/solution/government" },
    ]
  },
  { label: "Evidence", path: "/evidence" },
  { 
    label: "Company", path: "/company/about", hasDropdown: true, 
    dropdown: [
      { label: "About Us", path: "/company/about" },
      { label: "Contact", path: "/company/contact" },
    ] 
  },
];

const Header = ({ hidden }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const dropdownRef = useRef(null);

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header
      className={`w-full bg-[#F2F7FF] top-0 z-50 transition-transform duration-300 ${
        hidden ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="max-w-[1168px] mx-auto md:px-0 px-4">
        <div className="flex items-center justify-between py-4 md:py-[26px] font-body">
          <Link to="/">
            <img
              src={logo}
              alt="CaringUp"
              className="h-[32px] md:h-[40px] w-auto cursor-pointer"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-5" ref={dropdownRef}>
            {NAV_LINKS.map((item, index) => (
              <div key={index} className="relative flex items-center">
                {/* Label navigates */}
                <Link
                  to={item.path}
                  className="flex items-center space-x-1 transition-colors"
                >
                  <span className="text-primary body-text">{item.label}</span>
                </Link>

                {/* Arrow toggles dropdown */}
                {item.hasDropdown && (
                  <button
                    className="ml-1"
                    onClick={() =>
                      setOpenDropdown(openDropdown === item.label ? null : item.label)
                    }
                  >
                    <DownArrow />
                  </button>
                )}

                {/* Dropdown */}
                {item.hasDropdown && openDropdown === item.label && item.dropdown && (
                  <div className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-md border border-borderClr min-w-[150px] z-50">
                    {item.dropdown.map((dropItem) => (
                      <Link
                        key={dropItem.path}
                        to={dropItem.path}
                        className="block px-4 py-2.5 body-text-1 text-primary hover:bg-gray-100"
                        onClick={() => setOpenDropdown(null)}
                      >
                        {dropItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right Buttons */}
          <div className="flex items-center space-x-4">
            <button className="hidden md:block px-5 py-2 rounded-full border border-borderClr body-text text-primary font-medium transition">
              Go to WeCare
            </button>

            <button
              className="lg:hidden text-primary p-1"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <RxCross1 size={24} /> : <RxHamburgerMenu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden absolute left-0 w-full bg-white transition-all duration-300 ease-in-out z-50 overflow-hidden
          ${isOpen ? "max-h-[600px] opacity-100 visible" : "max-h-0 opacity-0 invisible"}`}
        >
          <div className="mx-4 mb-6 shadow-xl rounded-b-lg border-t-4 border-primary bg-white">
            <ul className="flex flex-col">
              {NAV_LINKS.map((item) => (
                <li key={item.path} className="border-b border-borderClr last:border-none">
                  <div className="flex flex-col w-full">
                    <div className="w-full flex items-center justify-between px-6 py-4">
                      <Link
                        to={item.path}
                        onClick={() => setIsOpen(false)}
                        className="body-text text-primary"
                      >
                        {item.label}
                      </Link>
                      {item.hasDropdown && (
                        <button
                          onClick={() =>
                            setOpenDropdown(openDropdown === item.label ? null : item.label)
                          }
                        >
                          <DownArrow />
                        </button>
                      )}
                    </div>

                    {item.hasDropdown && item.dropdown && openDropdown === item.label && (
                      <ul className="pl-8">
                        {item.dropdown.map((dropItem) => (
                          <li key={dropItem.path}>
                            <Link
                              to={dropItem.path}
                              onClick={() => {
                                setIsOpen(false);
                                setOpenDropdown(null);
                              }}
                              className="block py-2 text-primary"
                            >
                              {dropItem.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </li>
              ))}
            </ul>

            <div className="p-6 pt-2">
              <button className="w-full py-3 rounded-full bg-[#1B447D] text-white">
                Go to WeCare
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;