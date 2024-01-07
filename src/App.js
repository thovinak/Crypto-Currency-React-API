import React, { useRef } from "react";  // Import useRef
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Featured from "./components/Featured";
import Graph from "./components/Graph";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

function App() {
  const featuredRef = useRef(null);
  const graphRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    window.scrollTo({ top: ref.current.offsetTop, behavior: "smooth" });
  };

  return (
    <Router>
      <>
        <Navbar
          onFeaturedClick={() => scrollToSection(featuredRef)}
          onGraphClick={() => scrollToSection(graphRef)}
          onContactClick={() => scrollToSection(contactRef)}
        />

        <Hero />

        <div ref={featuredRef}><Featured /></div>

        <div ref={graphRef}><Graph /></div>

        <div ref={contactRef}><Contact /></div>

        <Footer />
      </>
    </Router>
  );
}

export default App;



