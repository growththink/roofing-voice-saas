import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import {
  PainSolution,
  HowItWorks,
  Proof,
  Comparison,
  FAQ,
  FinalCTA,
  Footer,
} from "@/components/Sections";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <PainSolution />
        <HowItWorks />
        <Proof />
        <Comparison />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
