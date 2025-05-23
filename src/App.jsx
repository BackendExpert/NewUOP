import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import HomePage from "./pages/HomePage/HomePage";
import MainNav from "./component/Nav/MainNav";
import SecNav from "./component/Nav/SecNav";
import Error404 from "./component/Errors/Error404";

function AppContent() {
  const [showNavBar, setShowNavBar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

  // ✅ Scroll handler
  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    setShowNavBar(currentScrollY < lastScrollY || currentScrollY < 50);
    setLastScrollY(currentScrollY);
  };

  // ✅ Add scroll listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // ✅ AOS on route change
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    AOS.refresh();
  }, [location]);

  const hideNavBarForDashboard = location.pathname.startsWith("/Dashboard");

  return (
    <>

      {!hideNavBarForDashboard && (
        <div className="hidden xl:block fixed top-0 w-full z-50 backdrop-blur">
          <MainNav />
        </div>
      )}

      {/* SecNav slides in/out on scroll */}
      {!hideNavBarForDashboard && (
        <div
          className={`fixed top-0 xl:top-28 w-full z-40 transition-transform duration-300
            ${showNavBar ? "translate-y-0" : "-translate-y-full"}`}
        >
          <SecNav />
        </div>
      )}

      {/* Page content */}
      <div className="mt-0">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </div>
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}
