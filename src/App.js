import Navbar from "./Components/Navbar";
import "./styles.css";
import { BrowserRouter as Router } from "react-router-dom";
// import Cards from "./Components/Cards";
import Card from "./Components/Card";
import Slider from "./Components/Slider";
import Testimonials from "./Components/Testimonials";
import Newsletter from "./Components/Newsletter";
import Blogs from "./Components/Blogs";
import Footer from "./Components/Footer";
import HeroSection from "./Components/HeroSection";
export default function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <HeroSection />
        <Card />
        <Slider />
        <Testimonials />
        <Newsletter />
        <Blogs />
        <Footer />
      </Router>
    </div>
  );
}
