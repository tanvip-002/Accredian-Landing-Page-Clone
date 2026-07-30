import Navbar from "./components/Navbar";
import Hero from "./#home/page";
import Stats from "./#stats/page";
import Clients from "./#clients/page";
import AccredianEdge from "./#accredianEdge/page";
import CATFramework from "./#cat/page";
import HowItWorks from "./#howItWorks/page";
import FAQ from "./#faqs/page";
import Testimonials from "./#testominals/page";
import ContactBanner from "./#testominals/ContactBanner";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="pt-20">
  <Navbar />
  <section id="hero"><Hero /></section>
  <section id="stats"><Stats /></section>
  <section id="clients"><Clients /></section>
  <section id="edge"><AccredianEdge /></section>
  <section id="cat"><CATFramework /></section>
  <section id="how"><HowItWorks /></section>
  <section id="faq"><FAQ /></section>
  <section id="testimonials"><Testimonials /></section>
  <ContactBanner />
  <Footer />
</main>

  );
}
