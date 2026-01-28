import React from "react";
import logo from "../../assets/images/CaringUp.svg";
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <header className="w-full">
      <div className="max-w-[1168px] mx-auto">
        <div className="flex items-center justify-between py-[26px] font-body">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Link to="/">
              <img
                src={logo}
                alt="CaringUp"
                className="h-[40px] w-[139px] cursor-pointer"
              />
            </Link>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavItem label="Products" />
            <NavItem label="Solutions" />
            <NavItem label="Evidence" />
            <NavItem label="Partners" />
            <NavItem label="Company" />
          </nav>

          {/* CTA Button */}
          <div>
            <button className="px-5 py-2 rounded-full border font-body text-sm font-medium  transition">
              Go to WeCare
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

const NavItem = ({ label }) => {
  return (
    <button className="flex items-center space-x-1 text-primary font-body hover:text-gray-900 text-base font-normal">
      <span className="font-body">{label}</span>
      <svg
        className="w-4 h-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
      </svg>
    </button>
  );
};

export default Header;
