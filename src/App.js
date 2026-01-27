import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Solution from "./pages/solution/Solution";
import Platform from "./pages/platform/Platform";
import HealthCare from "./pages/healthCare/HealtCare";
import PublicHealth from "./pages/publicHealth/PublicHealth";
import Evidence from "./pages/evidence/Evidence";
import Payers from "./pages/payers/Payers";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/platform" element={<Platform />} />
        <Route path="/solution" element={<Solution />} />
        <Route path="/healthcare" element={<HealthCare />} />
        <Route path="/publichealth" element={<PublicHealth />} />
        <Route path="/payers" element={<Payers />} />
        <Route path="/evidence" element={<Evidence />} />
      </Routes>
    </>
  );
}

export default App;
