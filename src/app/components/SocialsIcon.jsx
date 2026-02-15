import React from "react";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
const SocialsIcon = () => {
  return (
    <div className="flex gap-6 mt-4 font-medium">
      <div className="relative group w-fit">
        <Github
          strokeWidth={1.5}
          className="text-gray-400 hover:text-gray-800 hover:scale-110 transition-all duration-300 cursor-pointer"
        />

        <span
          className="
    absolute top-6.5 left-1/2 -translate-x-1/2
    opacity-0 group-hover:opacity-100
    transition-opacity duration-200
     text-black/90 dark:text-white/60 text-xs px-3 py-1.5 rounded-md whitespace-nowrap
    pointer-events-none border border-gray-300 shadow-md shadow-black/10
  "
        >
          GitHub
        </span>
      </div>
      <div className="relative group w-fit">
        <Linkedin
          strokeWidth={1.5}
          className="text-gray-400 hover:text-gray-800 hover:scale-110 transition-all duration-300 cursor-pointer"
        />

        <span
          className="
    absolute top-6.5 left-1/2 -translate-x-1/2
    opacity-0 group-hover:opacity-100
    transition-opacity duration-200
     text-black/90 dark:text-white/60 text-xs px-3 py-1.5 rounded-md whitespace-nowrap
    pointer-events-none border border-gray-300 shadow-md shadow-black/10
  "
        >
          Linkedin
        </span>
      </div>
      <div className="relative group w-fit">
        <Twitter
          strokeWidth={1.5}
          className="text-gray-400 hover:text-gray-800 hover:scale-110 transition-all duration-300 cursor-pointer"
        />

        <span
          className="
    absolute top-6.5 left-1/2 -translate-x-1/2
    opacity-0 group-hover:opacity-100
    transition-opacity duration-200
     text-black/90 dark:text-white/60 text-xs px-3 py-1.5 rounded-md whitespace-nowrap
    pointer-events-none border border-gray-300 shadow-md shadow-black/10
  "
        >
          Twitter
        </span>
      </div>
      <div className="relative group w-fit">
        <Mail
          strokeWidth={1.5}
          className="text-gray-400 hover:text-gray-800 hover:scale-110 transition-all duration-300 cursor-pointer"
        />

        <span
          className="
    absolute top-6.5 left-1/2 -translate-x-1/2
    opacity-0 group-hover:opacity-100
    transition-opacity duration-200
     text-black/90 dark:text-white/60 text-xs px-3 py-1.5 rounded-md whitespace-nowrap
    pointer-events-none border border-gray-300 shadow-md shadow-black/10
  "
        >
          Mail
        </span>
      </div>
    </div>
  );
};

export default SocialsIcon;
