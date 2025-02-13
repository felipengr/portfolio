// App/Components/MainContent.tsx
"use client";

import React, { useState } from "react";
import Menu from "./Menu";
import ContentDisplay from "./ContentDisplay";

const MainContent = () => {
  const [activeSection, setActiveSection] = useState("about");

  return (
    <div
      className={`
        w-full
        flex 
        items-center // REMOVER AQUI
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
  );
};

export default MainContent;