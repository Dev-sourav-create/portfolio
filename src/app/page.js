import Image from "next/image";
import SpotlightCard from "./components/CardComponent";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center mx-auto max-w-4xl  bg-zinc-50 font-sans dark:bg-background">
      <SpotlightCard className="bg-neutral-900 h-48 border border-white/20 p-6">
        <p> About</p>{" "}
        <p>
          I'm a Full Stack Engineer based in India, building products that solve
          real problems. I work across the entire stack—UI/UX to
          deployment—shipping fast, learning faster.
        </p>
      </SpotlightCard>
    </div>
  );
}
