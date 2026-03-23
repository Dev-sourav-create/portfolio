import Image from "next/image";
import React from "react";
import ThemeToggleButton from "./ThemeToggleButton";

const NavBar = () => {
  return (
    <nav className="flex w-full justify-between items-center md:py-4 py-2 ">
      {/* Profile Image */}

      <div className="relative flex gap-4 font-medium text-black/60">
        <span>Home</span>
        <span>Project</span>
        <span>Blog</span>
        <span>Resume</span>
        {/* <Image
          src="/profile.jpg"
          alt="Profile"
          fill
          className="rounded-full object-cover border "
          priority
        /> */}
      </div>

      <ThemeToggleButton />
    </nav>
  );
};

export default NavBar;
