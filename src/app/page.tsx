import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { About } from "@/components/About";
import { NewTestimonials } from "@/components/NewTestimonials";
import { SimpleCTA } from "@/components/ui/simple-cta";
import { Pricing } from "@/components/Pricing";
import { FAQ } from "@/components/FAQ";
import { Contact } from "@/components/Contact";
import { StackedCircularFooter } from "@/components/ui/stacked-circular-footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Services />
      <About />
      <NewTestimonials />
      <SimpleCTA />
      <Pricing />
      <FAQ />
      <Contact />
      <StackedCircularFooter />
    </div>
  );
}
