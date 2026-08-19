import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Products from "../pages/Products/Products";
import Contact from "../pages/Contact/Contact";
import StructuralWork from "../pages/StructuralWork/StructuralWork";
import Insulation from "../pages/Insulation/Insulation";
import Surfaces from "../pages/Surfaces/Surfaces";
import Tiles from "../pages/Tiles/Tiles";
import Finishing from "../pages/Finishing/Finishing";
import Testimonials from "../pages/Testimonials/Testimonials";
import Concrete_Solutions from "../pages/Concrete_Solutions/Concrete_Solutions";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/products" element={<Products />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/structural-work" element={<StructuralWork />} />
      <Route path="/protection-insulation" element={<Insulation />} />
      <Route path="/walls-surfaces" element={<Surfaces />} />
      <Route path="/tiles-flooring" element={<Tiles />} />
      <Route path="/final-details" element={<Finishing />} />
      <Route path="/testimonials" element={<Testimonials />} />
      <Route path="/concrete-solutions" element={<Concrete_Solutions />} />
    </Routes>
  );
}
