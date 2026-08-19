import { Section } from "@/components/common/section";
import { Avatar } from "@/components/common/avatar";
import profilePhoto from "@/assets/profile.jpg";

const skills = ["Bootstrap", "Figma","HTML & CSS", "Git"];

export default function AboutPage() {
  return (
    <Section className="py-16">
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8 max-w-4xl mx-auto">
        <Avatar name="Analee Duavis" size="lg" src={profilePhoto} />

        <div className="text-center sm:text-left">
          <h1 className="text-3xl font-bold text-gray-900">About Me</h1>
          <p className="text-blue-600 font-medium mt-1">Analee Duavis</p>

          <p className="text-gray-600 leading-relaxed mt-4">
            Hi, I'm Analee! I'm a developer who enjoys turning ideas into clean, functional web
            experiences. I like learning new tools, solving problems, and building things that
            people actually enjoy using. This portfolio is a small showcase of my journey and the
            projects I've worked on so far.
          </p>

          <div className="mt-6">
            <h2 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">Skills</h2>
            <div className="flex flex-wrap justify-center sm:justify-start gap-2 mt-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 rounded-full text-sm font-medium bg-gray-100 text-gray-700 border border-gray-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}
