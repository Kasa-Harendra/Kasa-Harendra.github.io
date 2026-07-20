import React from 'react';

const DotGrid = ({ children }) => {
  return (
    <div className="relative min-h-screen w-full bg-slate-950 text-white overflow-clip">
      <div className="absolute inset-0 dot-grid-bg pointer-events-none"></div>
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default DotGrid;
