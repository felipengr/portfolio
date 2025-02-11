import Menu from "@/components/Menu";
import ProfileCard from "@/components/ProfileCard";
import ThemeSwitcher from "@/components/ThemeSwitcher";

export default function Home() {
  return (
    <main className="flex gap-14 min-h-screen items-center justify-center bg-background text-foreground">
      <ProfileCard />
      <Menu />
      <ThemeSwitcher />
    </main>
  )
}