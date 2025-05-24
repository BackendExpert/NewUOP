import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import HomePage from "./pages/HomePage/HomePage";
import MainNav from "./component/Nav/MainNav";
import SecNav from "./component/Nav/SecNav";
import Error404 from "./component/Errors/Error404";
import MoreNews from "./component/NEWS/MoreNews";
import AllEvents from "./component/Events/AllEvents";
import MoreNotice from "./component/Notices/MoreNotice";
import ViewOneNews from "./component/NEWS/ViewOneNews";

import DiplomaProgrammes from "./component/ProgramsInUop/DiplomaProgrammes"
import CertificatesWorkshops from "./component/ProgramsInUop/CertificatesWorkshops"


function AppContent() {
  const [showMainNav, setShowMainNav] = useState(true);
  const [showSecNav, setShowSecNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isAtTop, setIsAtTop] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setIsAtTop(currentScrollY < 10);
      setShowMainNav(currentScrollY < lastScrollY || currentScrollY < 50);
      setShowSecNav(currentScrollY < lastScrollY || currentScrollY < 50);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    AOS.refresh();
  }, [location]);

  const hideNavBarForDashboard = location.pathname.startsWith("/Dashboard");

  return (
    <>
      {!hideNavBarForDashboard && showMainNav && (
        <div className="hidden xl:block fixed top-0 w-full z-50 transition-colors duration-300">
          <MainNav isAtTop={isAtTop} />
        </div>
      )}

      {!hideNavBarForDashboard && (
        <div
          className={`fixed ${showMainNav ? "top-0 xl:top-28" : "top-0"
            } w-full z-40 transition-transform duration-300 ${showSecNav ? "translate-y-0" : "-translate-y-full"
            }`}
        >
          <SecNav isAtTop={isAtTop} />
        </div>
      )}

      <div className="mt-0">
        <Routes>
          <Route path="*" element={<Error404 />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/news" element={<MoreNews />} />
          <Route path="/AllEvents" element={<AllEvents />} />
          <Route path="/Notices" element={<MoreNotice />} />
          <Route path="/ViewNews/:id" element={<ViewOneNews />} />
          <Route path="/diplomas" element={<DiplomaProgrammes />} />
          <Route path="/certificates" element={<CertificatesWorkshops />} />
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
