import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Solution from "./pages/solution/Solution";
import Platform from "./pages/platform/Platform";
import HealthCare from "./pages/healthCare/HealtCare";
import PublicHealth from "./pages/publicHealth/PublicHealth";
import Evidence from "./pages/evidence/Evidence";
import Payers from "./pages/payers/Payers";
import CareAideTerms from "./pages/CareAideTerms/CareAideTerms";
import WeCareTerms from "./pages/WeCareTerms/WeCareTerms";
import PrivacyPolicy from "./pages/PrivacyPolicy/PrivacyPolicy";
import Contact from "./pages/Contact/Contact";
import About from "./pages/About/About";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/platform" element={<Platform />} />
        <Route path="/solution" element={<Solution />} />
        <Route path="/solution/providers" element={<HealthCare />} />
        <Route path="/solution/government" element={<PublicHealth />} />
        <Route path="/solution/payers" element={<Payers />} />
        <Route path="/evidence" element={<Evidence />} />
        <Route path="/careaideterms" element={<CareAideTerms />} />
        <Route path="/wecareterms" element={<WeCareTerms />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
         <Route path="/company/contact" element={<Contact />} />
         <Route path="/company/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
