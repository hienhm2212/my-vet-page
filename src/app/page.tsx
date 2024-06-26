
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import Service from "@/components/Service";
import Staff from "@/components/Staff";
import Newsletter from "@/components/Newsletter";
import Gallery from "@/components/Gallery";
import VisitUs from "@/components/VisitUs";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <div>
        <Hero />
        <Service />
        <Staff />
        <Gallery />
        <Testimonials />
        <VisitUs />
        <Footer />
      </div>
    </main>
  );
}
