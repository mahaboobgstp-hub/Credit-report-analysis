import Hero from "../components/home/Hero";
import Problems from "../components/home/Problems";
import HowItWorks from "../components/home/HowItWorks";
import Services from "../components/home/Services";
import WhyUs from "../components/home/WhyUs";
import Trust from "../components/home/Trust";
import CTA from "../components/home/CTA";
import Footer from "../components/common/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <Problems />
      <HowItWorks />
      <Services />
      <WhyUs />
      <Trust />
      <CTA />
      <Footer />
    </>
  );
}
