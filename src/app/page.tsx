import MainContent from "@/components/MainContent";
import ProfileCard from "@/components/ProfileCard";
import ThemeSwitcher from "@/components/ThemeSwitcher";

export default function Home() {
  return (
    <main className="flex px-24 gap-14 min-h-screen items-center justify-center bg-background text-foreground">
      <ProfileCard />
      <MainContent />
      <ThemeSwitcher />
    </main>
  )
}