import Navbar from "./components/navbar";
import Hero from "./components/hero";
import AboutMe from "./components/aboutme";
import Portfolio from "./components/portfolio";
import ContactMe from "./components/contactme";
import Footer from "./components/footer";

export default function App() {
  return (
    <div className="overflow-hidden">
      {/* Navbar */}
      <Navbar />

      {/* Hero */}
      <Hero />

      {/* About Me */}
      <AboutMe />

      {/* Portfolio */}
      <Portfolio />

      {/* Contact Me */}
      <ContactMe />

      {/* Footer */}
      <Footer />
    </div>
  );
}
