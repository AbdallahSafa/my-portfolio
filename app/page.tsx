import Image from "next/image";
import {WavyBackground} from "@/components/ui/wavy-background";
import Hero from "@/components/Hero";
import {FloatingNav} from "@/components/ui/floating-navbar";
import {FaHome} from "react-icons/fa";
import Grid from "@/components/Grid";
import {navItems} from "@/data";

export default function Home() {
  return (
      <main
          className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
          <div className="max-w-7xl w-full">
              <FloatingNav navItems={navItems} />
              <Hero/>
              <div className = "mt-0.25">
                  <Grid/>
              </div>
          </div>
      </main>

  );
}
