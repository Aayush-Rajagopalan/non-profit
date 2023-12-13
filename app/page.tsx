/* eslint-disable @next/next/no-img-element */
import Benefits from "@/components/cta";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import People from "@/components/people";
import benefitOne, { benefitThree, benefitTwo } from "@/data";

export default function Home() {
  return (
    <div className="dark bg-zinc-950 text-white">
      <Navbar />
      <Hero />
      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />
      <Benefits data={benefitThree} />
      <People />
      <Footer />
    </div>
  );
}
