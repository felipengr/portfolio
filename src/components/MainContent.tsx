"use client";

import React, { useState } from "react";
import Menu from "./Menu";
import ContentDisplay from "./ContentDisplay";

const MainContent = () => {
    const [activeSection, setActiveSection] = useState("about");

    return (
        <div className="flex gap-14 items-center justify-center">
            <ContentDisplay activeSection={activeSection} />

            <Menu active={activeSection} setActive={setActiveSection} />
        </div>
    );
};

export default MainContent;