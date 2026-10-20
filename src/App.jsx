import { useEffect } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import Venue from "./pages/Venue.jsx";
import Gifts from "./pages/Gifts.jsx";
import Info from "./pages/Info.jsx";
import Rsvp from "./pages/Rsvp.jsx";
import "./App.css";

/* Scroller til toppen når man bytter side */
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <div className="app">
      <a className="skip-link" href="#main">
        Hopp til innhold
      </a>
      <ScrollToTop />
      <Navbar />
      <main id="main" className="app__main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/lokalet" element={<Venue />} />
          <Route path="/gaveliste" element={<Gifts />} />
          <Route path="/info" element={<Info />} />
          <Route path="/svar" element={<Rsvp />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}