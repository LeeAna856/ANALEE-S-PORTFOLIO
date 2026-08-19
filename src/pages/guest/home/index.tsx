import { HomePageBannerSection } from "@/components/features/home/homepage-banner-section";
import { SkillsSection } from "@/components/features/home/skills-section";
import { ProfileSection } from "@/components/features/home/profile-section";

export default function HomePage() {
  return (
    <>
      <HomePageBannerSection />
      <SkillsSection />
      <ProfileSection />
    </>
  )
}
