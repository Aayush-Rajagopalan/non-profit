import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-gradient-to-bl from-blue-950 to-blue-800">
      <Navbar/>
      <Hero/>
      <Footer/>
    </main>
  );
}
