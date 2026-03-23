import Image from "next/image";
import React from "react";
import SpotlightCard from "../CardComponent";

export const ProjectCard = ({
  image,
  title,
  description,
  techStack,
  live = false,
}) => {
  return (
    <SpotlightCard className="dark:bg-[#0c0c0d] p-4 bg-[#fdfdfc] border border-gray-200 dark:text-white/60 text-black/60 dark:border-white/20 rounded-2xl">
      <div className="flex flex-col gap-4">
        <div className="relative w-full h-52 rounded-xl overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
            priority
          />
        </div>

        <div>
          <h3 className="text-lg font-semibold text-black dark:text-white">
            {title}
          </h3>

          <p className="text-sm text-black/60 dark:text-white/60 mt-1">
            {description}
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {techStack.map((tech, index) => (
            <span
              key={index}
              className="text-xs px-2 py-1 rounded-md border border-gray-300 dark:border-white/20"
            >
              {tech}
            </span>
          ))}
          {live && (
            <span class="shrink-0 inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-medium bg-emerald-100 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400">
              <span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>Live
            </span>
          )}
        </div>
      </div>
    </SpotlightCard>
  );
};
