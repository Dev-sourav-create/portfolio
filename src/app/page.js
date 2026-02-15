import Image from "next/image";
import SpotlightCard from "./components/CardComponent";
import ThemeToggleButton from "./components/ThemeToggleButton";
import NavBar from "./components/NavBar";
import DisplayNameCard from "./components/DisplayNameCard";
import About from "./components/About";

export default function Home() {
  return (
    <div className="bg-[#fffefe] font-sans dark:bg-background">
      <div className="flex flex-col md:p-0 p-3 min-h-screen items-center  mx-auto max-w-3xl  bg-[bg-[#fffefe]] font-sans dark:bg-background">
        <NavBar />
        <DisplayNameCard />
        <About />
      </div>
    </div>
  );
}
