"use client";

import React, { useState } from "react";
import { FaUser, FaBriefcase, FaProjectDiagram, FaTools, FaEnvelope } from "react-icons/fa";
import clsx from "clsx";

const menuItems = [
  { id: "about", label: "About", icon: <FaUser /> },
  { id: "experience", label: "Experience", icon: <FaBriefcase /> },
  { id: "projects", label: "Projects", icon: <FaProjectDiagram /> },
  { id: "skills", label: "Skills", icon: <FaTools /> },
  { id: "contact", label: "Contact", icon: <FaEnvelope /> },
];

const Menu = () => {
  const [active, setActive] = useState("about");

  return (
    <nav className="flex flex-col items-center justify-center p-4 gap-6 rounded-xl bg-white dark:bg-black shadow-md border-2 border-[#B7A261]">
      {menuItems.map((item) => (
        <button
          key={item.id}
          className={clsx(
            "flex flex-col items-center justify-center text-sm gap-2 px-4 py-2 rounded-lg transition-all w-[71px] h-[66px]",
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
