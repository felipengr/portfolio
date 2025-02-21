'use client'

import React, { useState } from 'react'
import ContentDisplay from './ContentDisplay'
import Menu from './Menu'

const MainContent = () => {
  const [activeSection, setActiveSection] = useState('about')

  return (
    <div
      className={`
        w-full
        flex 
        items-center
        justify-center 
        flex-col               
        sm:flex-row-reverse              
        gap-8              
        md:gap-14         
        `}
    >
      <Menu active={activeSection} setActive={setActiveSection} />
      <ContentDisplay activeSection={activeSection} />
    </div>
  )
}

export default MainContent
