import React from "react";
import SpotlightCard from "./CardComponent";

const About = () => {
  return (
    <SpotlightCard className="dark:bg-neutral-900 bg-[#fdfdfc] h-48 border border-gray-200 dark:text-white/60 text-black/60 dark:border-white/20 p-6">
      <p className="text-lg font-medium"> About</p>{" "}
      <p>
        I'm a{" "}
        <span className="text-black/80 dark:text-white/90 font-medium">
          Full Stack Engineer
        </span>{" "}
        based in India, building products that solve real problems. I work
        across the entire stack—UI/UX to deployment—shipping fast, learning
        faster.
      </p>
    </SpotlightCard>
  );
};

export default About;
