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
    <nav className="flex h-fit flex-col items-center justify-center p-4 gap-6 rounded-xl bg-white dark:bg-black shadow-md border-2 border-[#B7A261]">
      {menuItems.map((item) => (
        <button
          key={item.id}
          className={clsx(
            "flex flex-col items-center justify-center text-sm gap-2 px-4 py-2 rounded-lg transition-all w-[81px] h-[76px]",
            active === item.id
              ? "bg-[#B7A261] text-white dark:text-black"
              : "bg-[#FEF6DD] dark:bg-[#3B3729] text-black dark:text-[#A89D9D]"
          )}
          onClick={() => setActive(item.id)}
        >
          {item.icon} {item.label}
        </button>
      ))}
    </nav>
  );
};

export default Menu;
