import { Link } from "react-router";
import Nav from "./Nav";
import Hero from "./Hero";
import Highlights from "./Highlights";
import Testimonials from "./Testimonials";
import About from "./About";
import Footer from "./Footer";

export default function HomePage() {
  return (
    <>
      <div className="container">
        <Nav />
        <Hero />
        <Highlights />
        <Testimonials />
        <About />
        <Footer />
      </div>
      <style jsx>{`
        .container {
          display: grid;
          place-items: center;
          max-width: 100%;
          min-height: 90vh;
          grid-template-columns: 100%;
          grid-template-rows: 150px 0.1fr 1.5fr 1fr 1fr 0.2fr;
          grid-template-areas: "nav" "hero" "highlights" "testimonials" "about" "footer";
        }

        @media (max-width: 768px) {
          .container {
            grid-template-rows: 150px 0.1fr 0.5fr 0.5fr 0.5fr 0.1fr;
          }
        }
      `}</style>
    </>
  );
}
