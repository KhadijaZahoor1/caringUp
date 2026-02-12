import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/CaringUp.svg";
import DownArrow from "../../assets/svg/DownArrow";
import { RxCross1, RxHamburgerMenu } from "react-icons/rx";

const NAV_LINKS = [
  { label: "Products", path: "/platform" },
  { label: "Solutions", path: "/solution" },
  { label: "Evidence", path: "/evidence" },
  { label: "Partners", path: "/payers" },
  { label: "Company", path: "/healthcare" },
];

const Header = ({ hidden }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      className={`w-full bg-white sticky top-0 z-50 transition-transform duration-300 ${
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

          <nav className="hidden lg:flex items-center space-x-5">
            {NAV_LINKS.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="flex items-center space-x-1 transition-colors"
              >
                <span className="text-primary body-text">
                  {item.label}
                </span>
                <DownArrow />
              </Link>
            ))}
          </nav>

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
                  <Link
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className="w-full flex items-center justify-between px-6 py-4"
                  >
                    <span className="body-text text-primary">
                      {item.label}
                    </span>
                    <DownArrow />
                  </Link>
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