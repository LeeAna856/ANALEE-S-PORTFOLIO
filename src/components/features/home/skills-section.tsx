import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Section } from "@/components/common/section";
import { Code2, Palette, Rocket } from "lucide-react";

const skills = [
  {
    icon: <Code2 className="w-5 h-5" />,
    title: "Clean Code",
    description: "I write maintainable, well-structured TypeScript and React code that's easy to build on.",
  },
  {
    icon: <Palette className="w-5 h-5" />,
    title: "Thoughtful Design",
    description: "I care about the details — layout, spacing, and typography that make an interface feel right.",
  },
  {
    icon: <Rocket className="w-5 h-5" />,
    title: "Fast Delivery",
    description: "I move quickly from idea to a working, polished product without cutting corners.",
  },
];

export function SkillsSection() {
  return (
    <Section className="py-12 bg-gray-50/50">
      <div className="text-center max-w-2xl mx-auto mb-10">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">What I Do</h2>
        <p className="text-gray-600 mt-2">A quick look at what I bring to every project.</p>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {skills.map((skill) => (
          <Card key={skill.title}>
            <CardHeader>
              <CardTitle icon={skill.icon}>{skill.title}</CardTitle>
              <CardDescription>{skill.description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </Section>
  );
}
