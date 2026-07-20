import React, { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const StaggeredMenu = ({ items }) => {
  const [isOpen, setIsOpen] = useState(false);

  const menuVariants = {
    open: {
      clipPath: "inset(0% 0% 0% 0% round 10px)",
      transition: {
        type: "spring",
        bounce: 0,
        duration: 0.7,
        delayChildren: 0.3,
        staggerChildren: 0.05
      }
    },
    closed: {
      clipPath: "inset(10% 50% 90% 50% round 10px)",
      transition: {
        type: "spring",
        bounce: 0,
        duration: 0.3
      }
    }
  };

  const itemVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 }
    },
    closed: { opacity: 0, y: 20, transition: { duration: 0.2 } }
  };

  return (
    <div className="fixed top-4 right-4 z-50">
      <motion.nav
        initial={false}
        animate={isOpen ? "open" : "closed"}
        className="relative"
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-center w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white shadow-lg hover:bg-white/20 transition-colors"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        <motion.ul
          variants={menuVariants}
          className={`absolute top-14 right-0 w-48 p-2 bg-slate-900/90 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl flex flex-col gap-2 origin-top-right ${isOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}
        >
          {items.map((item) => (
            <motion.li key={item.id} variants={itemVariants}>
              <a
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  setIsOpen(false);
                  setTimeout(() => {
                    document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                }}
                className="block px-4 py-2 rounded-lg text-gray-300 hover:bg-white/10 hover:text-white transition-colors"
              >
                {item.label}
              </a>
            </motion.li>
          ))}
        </motion.ul>
      </motion.nav>
    </div>
  );
};

export default StaggeredMenu;
