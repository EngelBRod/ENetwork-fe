import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Industries from "@/components/Industries";
import Nav from "@/components/Nav";
import RevenueBand from "@/components/RevenueBand";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";

export default function Home() {
  return (
    <div style={{ minHeight: "100vh" }}>
      <Nav />
      <Hero />
      <Services />
      <HowItWorks />
      <Industries />
      <WhyUs />
      <RevenueBand />
      <Contact />
      <Footer />
    </div>
  );
}
