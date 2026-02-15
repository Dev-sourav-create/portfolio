import React from "react";
import AvailabilityStatus from "./AvailabilityStatus";
import ShinyText from "./ShinyText";
import SocialsIcon from "./SocialsIcon";

const DisplayNameCard = () => {
  return (
    <div className="w-full flex flex-col gap-4 py-8">
      <AvailabilityStatus />
      <ShinyText
        className="md:text-7xl text-5xl font-semibold"
        text={"Sourav Prajapati"}
      />
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
