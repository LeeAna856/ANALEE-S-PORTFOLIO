import { Section } from "@/components/common/section";
import { Avatar } from "@/components/common/avatar";
import profilePhoto from "@/assets/profile.jpg";

export function ProfileSection() {
  const profile = {
    name: "Analee Duavis",
    role: "Web Developer",
    email: "duavisanalee98@gmail.com",
    photoSrc: profilePhoto as string | undefined,
  };

  return (
    <Section className="py-16">
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 border border-gray-200 rounded-2xl p-8 bg-white">
        <Avatar name={profile.name} src={profile.photoSrc} size="lg" />
        <div className="text-center sm:text-left">
          <h2 className="text-2xl font-bold text-gray-900">{profile.name}</h2>
          <p className="text-blue-600 font-medium mt-1">{profile.role}</p>
          <p className="text-gray-500 mt-2">{profile.email}</p>
        </div>
      </div>
    </Section>
  );
}
