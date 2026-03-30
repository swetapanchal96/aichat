import FAQSection from "./components/FAQSection";
import Hero from "./components/Hero";
import ManyStyleFeatures from "./components/ManyStyleFeatures";
import PricingSection from "./components/PricingSection";

export default function Home() {
  return (
    <>
      <Hero />
      <ManyStyleFeatures />
      <PricingSection />
      <FAQSection />
    </>
  );
}
