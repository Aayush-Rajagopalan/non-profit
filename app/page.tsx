/* eslint-disable @next/next/no-img-element */
import Benefits from "@/components/cta";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import People from "@/components/people";
import Image from "next/image";

import SectionTitle from "@/components/title";
import Testimonials from "@/components/testimonials";
import benefitOne, { benefitThree, benefitTwo } from "@/data";

export default function Home() {
  return (
    <div className="dark bg-zinc-950 text-white">
      <Navbar />
      <Hero />
      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />
      <Benefits data={benefitThree} />
      <SectionTitle
        pretitle="Testimonials"
        title="Here's what our customers said"
      >
        Testimonails is a great way to increase the brand trust and awareness.
        Use this section to highlight your popular customers.
      </SectionTitle>
      <Testimonials />
      <People />
      <Footer />
    </div>
  );
}
