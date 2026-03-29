import React from 'react';
import { motion } from 'framer-motion';

const LogoLoop = ({ items }) => {
  return (
    <div className="relative flex w-full overflow-hidden bg-slate-950 py-10">
      <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-slate-950 to-transparent z-10"></div>
      <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-slate-950 to-transparent z-10"></div>
      
      <motion.div
        className="flex min-w-full shrink-0 gap-12 py-4"
        animate={{
          x: ["0%", "-100%"],
        }}
        transition={{
          duration: 20,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {[...items, ...items].map((item, index) => (
          <div key={index} className="flex flex-col items-center justify-center gap-2 min-w-[100px]">
             <div className="text-4xl text-white/80">{item.icon}</div>
             <span className="text-sm text-gray-400 font-medium">{item.name}</span>
          </div>
        ))}
      </motion.div>
      <motion.div
        className="flex min-w-full shrink-0 gap-12 py-4"
        animate={{
          x: ["0%", "-100%"],
        }}
        transition={{
          duration: 20,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {[...items, ...items].map((item, index) => (
          <div key={index} className="flex flex-col items-center justify-center gap-2 min-w-[100px]">
             <div className="text-4xl text-white/80">{item.icon}</div>
             <span className="text-sm text-gray-400 font-medium">{item.name}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default LogoLoop;
