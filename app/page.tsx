import { About } from "@/components/about";
import { BusinessHours } from "@/components/business-hours";
import { Contact } from "@/components/contact";
import { FAQ } from "@/components/faq";
import { Gallery } from "@/components/gallery";
import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { Testimonials } from "@/components/testimonials";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Gallery />
      <Testimonials />
      <FAQ />
      <Contact />
      <BusinessHours />
    </>
  );
}
