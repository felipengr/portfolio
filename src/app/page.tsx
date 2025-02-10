import ProfileCard from "@/components/ProfileCard";
import ThemeSwitcher from "@/components/ThemeSwitcher";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background text-foreground">
      <ProfileCard />
      <ThemeSwitcher />
    </main>
  )
}