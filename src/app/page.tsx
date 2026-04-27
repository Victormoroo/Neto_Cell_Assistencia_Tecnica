import { About } from "@/components/About";
import { AttendanceOptions } from "@/components/AttendanceOptions";
import { Brands } from "@/components/Brands";
import { Contact } from "@/components/Contact";
import { Differentials } from "@/components/Differentials";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { Services } from "@/components/Services";
import { StructuredData } from "@/components/StructuredData";
import { Testimonials } from "@/components/Testimonials";
import { TrustBar } from "@/components/TrustBar";
import { WhatsAppFloatingButton } from "@/components/WhatsAppFloatingButton";

export default function Home() {
  return (
    <>
      <StructuredData />
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <HowItWorks />
        <About />
        <Brands />
        <Differentials />
        <AttendanceOptions />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloatingButton />
    </>
  );
}
