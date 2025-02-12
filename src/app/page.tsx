// app/page.tsx
"use client";

import MainContent from "@/components/MainContent";
import ProfileCard from "@/components/ProfileCard";
import ThemeSwitcher from "@/components/ThemeSwitcher";

export default function Home() {
  return (
    <main
      className="
        flex 
        px-24 
        gap-14 
        min-h-screen 
        items-center 
        justify-center 
        bg-background 
        text-foreground
        
        max-md:flex-col
        max-md:items-center
        max-md:justify-center
        max-md:px-4
        max-md:gap-8
      "
    >
      <ProfileCard />
      <MainContent />
      <ThemeSwitcher />
    </main>
  );
}