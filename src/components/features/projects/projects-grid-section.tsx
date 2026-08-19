import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Section } from "@/components/common/section";
import { Button } from "@/components/ui/button";
import infographic1 from "@/assets/infographic1.png";
import infographic2 from "@/assets/infographic2.png";
import raqranShop from "@/assets/raqran-shop.png";

const projects = [
  {
    title: "INFOGRAPHIC",
    description: "Infographics about historical roots of mechanical calculators & tabulating machine.",
    tags: ["Bootstrap", "HTML", "CSS", "Figma"],
    link: "https://www.figma.com/proto/8hkyjxTYW90IHwgvN5BgRe/Infographic-Group-1?node-id=1-61&p=f&t=1wzzJt9sm7jXfvOH-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1",
    image: infographic1,
  },
  {
    title: "INFOGRAPHICS",
    description: "Infographics about designing for all: a developer's checklist for digital accessibility.",
    tags: ["Bootstrap", "HTML", "CSS", "Figma"],
    link: "https://shimmering-arithmetic-364b06.netlify.app/",
    image: infographic2,
  },
  {
    title: "Raqran Electronic Shop",
    description: "A mock-up website created for our group.",
    tags: ["Bootstrap", "HTML", "CSS", "Figma"],
    link: "https://amazing-meringue-616aa5.netlify.app/",
    image: raqranShop,
  },
];

export function ProjectsGridSection() {
  return (
    <Section className="py-16">
      <div className="text-center max-w-2xl mx-auto mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Projects</h1>
        <p className="text-gray-600 mt-2">Here are a few things I've been working on. Replace these with your own projects anytime.</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <Card key={project.title}>
            <CardHeader>
              <CardTitle imageSrc={project.image} imageFullWidth>{project.title}</CardTitle>
              <CardDescription>
                {project.description}
                <span className="flex flex-wrap gap-2 mt-3">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-700 border border-blue-200/50"
                    >
                      {tag}
                    </span>
                  ))}
                </span>
              </CardDescription>
            </CardHeader>
            <CardFooter>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="block">
                <Button variant="secondary" className="w-full justify-between group/btn">
                  View Project
                  <span className="inline-block transition-transform duration-200 group-hover/btn:translate-x-1">→</span>
                </Button>
              </a>
            </CardFooter>
          </Card>
        ))}
      </div>
    </Section>
  );
}
