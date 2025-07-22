import Footer from "./components/footer/Footer.jsx";
import HeroSection from "./components/hero-section/HeroSection.jsx";
import Navbar from "./components/navbar/Navbar.jsx";
import Services from "./components/services/Services.jsx";
import Works from "./components/works/Works.jsx";

export default function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Services />
      <Works />
      <Footer />
    </>
  );
}
