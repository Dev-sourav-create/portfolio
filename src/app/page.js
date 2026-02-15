import Image from "next/image";
import SpotlightCard from "./components/CardComponent";
import ThemeToggleButton from "./components/ThemeToggleButton";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center mx-auto max-w-4xl  bg-zinc-50 font-sans dark:bg-background">
      <SpotlightCard className="dark:bg-neutral-900 bg-zinc-50 h-48 border border-gray-300 dark:text-white/80 text-black/70 dark:border-white/20 p-6">
        <p> About</p>{" "}
        <p>
          I'm a{" "}
          <span className="text-black/90 font-medium">Full Stack Engineer</span>{" "}
          based in India, building products that solve real problems. I work
          across the entire stack—UI/UX to deployment—shipping fast, learning
          faster.
        </p>
      </SpotlightCard>
      <ThemeToggleButton />
    </div>
  );
}
