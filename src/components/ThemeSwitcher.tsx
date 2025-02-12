"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeSwitcher() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true)
    }, []);

    if (!mounted) return null;

    return (
        <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-md bg-[#b7a261] dark:bg-gray-800 text-black dark:text-white absolute top-7 right-7 sm:top-[40px] sm:right-[40px]"
        >
            {theme === "dark" ? "🌞" : "🌙"}
        </button>
    )
}