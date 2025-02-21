'use client'

import clsx from 'clsx'
import type React from 'react'
import {
  FaBriefcase,
  FaEnvelope,
  FaProjectDiagram,
  FaTools,
  FaUser,
} from 'react-icons/fa'

const menuItems = [
  { id: 'about', label: 'About', icon: <FaUser /> },
  { id: 'experience', label: 'Exp.', icon: <FaBriefcase /> },
  { id: 'projects', label: 'Projects', icon: <FaProjectDiagram /> },
  { id: 'skills', label: 'Skills', icon: <FaTools /> },
  { id: 'contact', label: 'Contact', icon: <FaEnvelope /> },
]

interface MenuProps {
  active: string
  setActive: (id: string) => void
}

const Menu: React.FC<MenuProps> = ({ active, setActive }) => {
  return (
    <nav
      className={clsx(
        'flex items-center justify-center p-2 sm:p-4 rounded-xl bg-white dark:bg-[#131312] shadow-md border-2 border-[#B7A261] mx-auto sm:overflow-visible',
        'flex-row md:flex-col',
        'gap-2 md:gap-6',
        'md:w-auto',
        'overflow-x-auto scrollbar-hide'
      )}
    >
      {menuItems.map(item => (
        <button
          key={item.id}
          type="button"
          className={clsx(
            'flex flex-col items-center justify-center text-sm gap-2 px-2 py-2 rounded-lg transition-all',
            'md:w-[81px] md:h-[76px]',
            active === item.id
              ? 'bg-[#B7A261] text-white dark:text-black'
              : 'bg-[#FEF6DD] dark:bg-[#3B3729] text-black dark:text-[#A89D9D]'
          )}
          onClick={() => setActive(item.id)}
        >
          {item.icon}

          <span>{item.label}</span>
        </button>
      ))}
    </nav>
  )
}

export default Menu
