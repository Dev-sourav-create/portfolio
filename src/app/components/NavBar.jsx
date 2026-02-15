import Image from "next/image";
import React from "react";
import ThemeToggleButton from "./ThemeToggleButton";

const NavBar = () => {
  return (
    <nav className="flex w-full justify-between items-center md:py-4 py-2 ">
      {/* Profile Image */}

      <div className="relative md:w-20 w-16 md:h-20 h-16">
        <Image
          src="/profile.jpg"
          alt="Profile"
          fill
          className="rounded-full object-cover border "
          priority
        />
      </div>

      <ThemeToggleButton />
    </nav>
  );
};

export default NavBar;
