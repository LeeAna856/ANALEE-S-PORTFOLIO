import { NavLink } from "react-router";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/common/section";
import { Avatar } from "@/components/common/avatar";
import profilePhoto from "@/assets/profile.jpg";

export function HomePageBannerSection() {
  return (
    <Section className="py-20 md:py-28 bg-radial from-gray-50 to-gray-100 border-b border-gray-200">
      <div className="flex flex-col items-center text-center max-w-3xl mx-auto space-y-6">
        <Avatar name="Analee Duavis" size="xl" src={profilePhoto} />

        {/* Badge */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200/50">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
          Available for new opportunities
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900 leading-none">
          Hi, I'm{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-indigo-600">
            Analee Duavis
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-normal">
          A passionate developer who loves building clean, modern, and user-friendly experiences on the web.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <NavLink to="/projects">
            <Button className="w-full sm:w-auto text-base px-8 h-12 shadow-md shadow-blue-500/10">
              View My Work
            </Button>
          </NavLink>
          <NavLink to="/contact">
            <Button variant="secondary" className="w-full sm:w-auto text-base px-8 h-12 bg-white hover:bg-gray-50 border-gray-200 text-gray-700">
              Get In Touch
            </Button>
          </NavLink>
        </div>
      </div>
    </Section>
  );
}
