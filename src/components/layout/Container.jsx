import React from 'react'

const Container = ({ children, className = "" }) => {
  return (
    <div className={`max-w-[1440px] mx-auto w-full bg-[#F2f7ff] ${className}`}>
      {children}
    </div>
  );
};

export default Container;
