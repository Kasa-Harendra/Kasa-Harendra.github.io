import React from 'react';

const LogoLoop = ({ items }) => {
  return (
    <div className="flex w-full py-1">
      <div className="flex flex-wrap gap-x-6 gap-y-3">
        {items.map((item, index) => (
          <div key={index} className="flex items-center gap-2">
             {item.icon && <div className="text-2xl text-white/90">{item.icon}</div>}
             <span className="text-[15px] text-gray-300 font-medium whitespace-nowrap">{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoLoop;
