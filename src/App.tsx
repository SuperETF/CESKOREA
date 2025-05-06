import React, { useState } from "react"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";

import {
  Header,
  SearchSection,
  MapSection,
  CertifiedExperts,
  StatsSection,
} from "./features/main";
import { EducationPage } from "./features/education";
import RegistrationPage from "./features/registration/RegistrationPage";
import CertifiedListPage from "./features/certified/pages/CertifiedListPage";
import TrainerProfilePage from "./features/certified/pages/TrainerProfilePage";
import FreeBoardPage from "./features/board/pages/FreeBoardPage"; // ✅ 추가
import { FooterNav } from "./common/components";

function MainPage() {
  const [hoveredRegion, setHoveredRegion] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 text-gray-800">
      <Header onRegister={() => navigate("/registration")} />
      <main className="w-full max-w-3xl mx-auto px-4 pt-20 space-y-6 mb-20">
        <SearchSection searchTerm={searchTerm} onSearchChange={setSearchTerm} />
        <MapSection
          hoveredRegion={hoveredRegion}
          onRegionHover={setHoveredRegion}
          onRegionClick={(r) => navigate("/experts")}
        />
        <CertifiedExperts onSeeAll={() => navigate("/experts")} />
        <StatsSection />
      </main>
      <FooterNav active="main" />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-white text-gray-800">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/board" element={<FreeBoardPage />} /> {/* ✅ 자유게시판 */}
          <Route path="/experts" element={<CertifiedListPage />} />
          <Route path="/experts/:id" element={<TrainerProfilePage />} />
          <Route path="/education" element={<EducationPage />} />
          <Route
            path="/registration"
            element={
              <RegistrationPage
                onComplete={() => (window.location.href = "/")}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}
