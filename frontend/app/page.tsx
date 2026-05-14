import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Container from "@/components/Container";

export default function Home() {
  return (
    <Container>
      <Hero />
      <Services />
      <Testimonials />
    </Container>
  );
}