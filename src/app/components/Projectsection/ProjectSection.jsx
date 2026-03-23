import React from "react";

import { ProjectCard } from "./ProjectCard";

export const ProjectSection = () => {
  return (
    <section className="flex flex-col gap-4 w-full my-8">
      <span className="font-semibold text-lg">Experience</span>
      <section className="grid gap-4 md:grid-cols-2 grid-cols-1">
        <ProjectCard
          image="/bistro-cover.png"
          title="Bistro Menu"
          description="QR-based restaurant ordering system with admin dashboard."
          techStack={["Next.js", "Firebase", "Tailwind", "Cloudinary"]}
          live={true}
        />
        <ProjectCard
          image="/bistro-cover.png"
          title="Bistro Menu"
          description="QR-based restaurant ordering system with admin dashboard."
          techStack={["Next.js", "Firebase", "Tailwind", "Cloudinary"]}
          live={true}
        />
      </section>
    </section>
  );
};
