import Hero from "@/components/Hero";
import Strategos from "@/components/Strategos";
import WhyStrategos from "@/components/WhyStrategos";
import Knowledge from "@/components/Knowledge";
import Services from "@/components/Services";
import FAQ from "@/components/FAQ";
import Glossary from "@/components/Glossary";
import Footer from "@/components/Footer";
import { generateSchemas } from "@/lib/schema";

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateSchemas()) }}
      />
      <main>
        <Hero />
        <Strategos />
        <WhyStrategos />
        <Knowledge />
        <Services />
        <FAQ />
        <Glossary />
        <Footer />
      </main>
    </>
  );
}
