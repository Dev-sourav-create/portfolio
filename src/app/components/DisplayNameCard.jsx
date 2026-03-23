import React from "react";
import AvailabilityStatus from "./AvailabilityStatus";
import ShinyText from "./ShinyText";
import SocialsIcon from "./SocialsIcon";
import Image from "next/image";

const DisplayNameCard = () => {
  return (
    <div className="w-full flex flex-col gap-4 py-12">
      <AvailabilityStatus />
      <div className="flex items-center ">
        <div className="relative md:w-24 w-16 md:h-24 h-16">
          <Image
            src="/profile.jpg"
            alt="Profile"
            fill
            className="rounded-full object-cover border "
            priority
          />
        </div>
        <ShinyText
          className="md:text-6xl text-5xl font-semibold"
          text={"Sourav Prajapati"}
        />
      </div>
      {/* What I do */}
      <p className="text-xl  dark:text-white/60 text-black/60">
        I learn. I build. I break. I fix. I ship
      </p>
      {/* Socials */}
      <SocialsIcon />
    </div>
  );
};

export default DisplayNameCard;
