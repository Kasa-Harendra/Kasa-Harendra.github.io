import React from 'react';

const ElectricBorder = ({ children, className = "" }) => {
  return (
    <div className={`relative inline-block ${className}`}>
      <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 opacity-75 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200 animate-pulse-slow"></div>
      <div className="relative rounded-full bg-slate-900 ring-1 ring-white/10">
        {children}
      </div>
    </div>
  );
};

export default ElectricBorder;
