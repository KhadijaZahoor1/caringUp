import React from "react";
import PropTypes from "prop-types";
import WhiteUpArrow from "../assets/svg/WhiteUpArrow";
import BtnArrowRight from "../assets/svg/BtnArrowRight";

const CustomButton = ({
  label,
  variant = "primary",
  showIcon = true,
  className = "",
  ...props
}) => {
  const variantStyles = {
    primary: {
      label: "bg-[#1B447D] text-white border-transparent",
      icon: "bg-[#1B447D] text-white border-transparent",
      IconComponent: WhiteUpArrow,
    },
    secondary: {
      label: "bg-white text-primary",
      icon: "bg-white text-primary",
      IconComponent: BtnArrowRight,
    },
    tertiary: {
      label: "bg-transparent text-white border-borderClr border-2",
      icon: "bg-transparent text-white border-borderClr border-2",
      hasBorder: true,
    },
  };

  const selected = variantStyles[variant];
  const Icon = selected.IconComponent;

  return (
    <button
      className={`inline-flex items-center group active:scale-95 ${className}`}
      {...props}
    >
      {/* Main Label Pill */}
      <span
        className={`
          flex items-center justify-center font-medium text-sm md:text-base 
          rounded-full px-6 py-2.5 z-10
          ${selected.label}
        `}
      >
        {label}
      </span>

      {/* Detached Icon Circle */}
      {showIcon && Icon && (
        <div
          className={`

            flex items-center justify-center rounded-full -ml-3  w-11 h-11  ${selected.icon} ${selected.hasBorder ? "border" : "border-none"}

          `}
        >
          <Icon  />
        </div>
      )}
    </button>
  );
};

CustomButton.propTypes = {
  label: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(["primary", "secondary", "tertiary"]),
  showIcon: PropTypes.bool,
  className: PropTypes.string,
};

export default CustomButton;
