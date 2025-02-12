"use client";

import React from "react";
import { FaUser, FaBriefcase, FaProjectDiagram, FaTools, FaEnvelope } from "react-icons/fa";
import clsx from "clsx";

const menuItems = [
  { id: "about", label: "About", icon: <FaUser /> },
  { id: "experience", label: "Experience", icon: <FaBriefcase /> },
  { id: "projects", label: "Projects", icon: <FaProjectDiagram /> },
  { id: "skills", label: "Skills", icon: <FaTools /> },
  { id: "contact", label: "Contact", icon: <FaEnvelope /> },
];

interface MenuProps {
  active: string;
  setActive: (id: string) => void;
}

const Menu: React.FC<MenuProps> = ({ active, setActive }) => {
  return (
    <nav
      className={clsx(
        "flex items-center justify-center p-4 rounded-xl bg-white dark:bg-black shadow-md border-2 border-[#B7A261]",
        "flex-row md:flex-col",
        "gap-2 md:gap-6",
        "w-full md:w-auto",
        "overflow-x-auto scrollbar-hide"
      )}
    >
      {menuItems.map((item) => (
        <button
          key={item.id}
          className={clsx(
            "flex flex-col items-center justify-center text-sm gap-2 px-3 py-2 rounded-lg transition-all",
            "w-[65px] min-w-[65px] h-[65px] md:w-[81px] md:h-[76px]",
            active === item.id
              ? "bg-[#B7A261] text-white dark:text-black"
              : "bg-[#FEF6DD] dark:bg-[#3B3729] text-black dark:text-[#A89D9D]",
            active === item.id ? "flex items-center justify-center" : ""
          )}
          onClick={() => setActive(item.id)}
        >
          {item.icon}
          {item.id === "experience" ? (
            <>
              <span className="md:hidden">Exp.</span>
              <span className="hidden md:block">{item.label}</span>
            </>
          ) : (
            <span>{item.label}</span>
          )}
        </button>
      ))}
    </nav>
  );
};

export default Menu;