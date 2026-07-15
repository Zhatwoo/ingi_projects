import Header from "./sections/components/Header";
import Hero from "./sections/components/Hero";
import Features from "./sections/components/Features";
import StatsStrip from "./sections/components/StatsStrip";
import BundleShowcase from "./sections/components/BundleShowcase";
import About from "./sections/components/About";
import Testimonial from "./sections/components/Testimonial";
import Pricing from "./sections/components/Pricing";
import Faq from "./sections/components/Faq";
import Cta from "./sections/components/Cta";
import Footer from "./sections/components/Footer";
import ScrollReveal from "./sections/components/ScrollReveal";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Features />
      <StatsStrip />
      <BundleShowcase />
      <About />
      <Testimonial />
      <Pricing />
      <Faq />
      <Cta />
      <Footer />
      <ScrollReveal />
    </>
  );
}
