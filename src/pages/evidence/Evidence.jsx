import React, { useRef, useState } from "react";
import Container from "../../components/layout/Container";
import Header from "../../components/layout/Header";
import Hero from "../../components/Hero";
import Footer from "../../components/layout/Footer";
import CTASection from "../../components/CTASection";

import EvidenceGlance from "./sections/EvidenceGlance";
import EvidenceImprovements from "./sections/EvidenceImprovements";
import EvidenceClinicalOutcomes from "./sections/EvidenceClinicalOutcomes";
import CostSavings from "./sections/CostSavings";
import ProductivityGains from "./sections/ProductivityGains";
import EvidencePublications from "./sections/EvidencePublications";
import GlobalRegistries from "./sections/GlobalRegistries";
import QualityOfLife from "./sections/QualityOfLife";
import EvidenceResearch from "./sections/EvidenceResearch";
import evidenceBanner from "../../assets/images/evidenceBanner.png";

const Evidence = () => {
  /* ---------------- SECTION REFS ---------------- */
  const glanceRef = useRef(null);
  const adherenceRef = useRef(null);
  const outcomesRef = useRef(null);
  const savingsRef = useRef(null);
  const qualityLifeRef = useRef(null);
  const productivityRef = useRef(null);
  const RCTResearchRef  = useRef(null)
  const publicationRef = useRef(null);
  const registriesRef = useRef(null);

  /* ---------------- NAV REFS ---------------- */
  const navRef = useRef(null);
  const tabRefs = useRef({});

  /* ---------------- ACTIVE TAB ---------------- */
  const [active, setActive] = useState("At a glance");

  /* ---------------- QUICK LINKS ---------------- */
  const quickLinks = [
    { name: "At a glance", ref: glanceRef },
    { name: "Adherence Improvement", ref: adherenceRef },
    { name: "Clinical Outcomes", ref: outcomesRef },
    { name: "Cost Savings", ref: savingsRef },
    { name: "Quality of Life", ref: qualityLifeRef },
    { name: "Productivity Gains", ref: productivityRef },
     { name: "Productivity Gains", ref: RCTResearchRef },
    { name: "Publications", ref: publicationRef },
    { name: "Global Registries", ref: registriesRef },
  ];

  /* ---------------- HANDLER ---------------- */
  const handleTabClick = (link) => {
    setActive(link.name);

    /* Slide the quick-links nav */
    const tabEl = tabRefs.current[link.name];
    tabEl?.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });

    /* Scroll to section */
    link.ref.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div>
      <Container>
        <Header />

        <Hero
          backgroundImage={evidenceBanner}
          title="World-Class, Award-Winning RCT Proven in Real-World Clinical Settings"
          description="Validated through a multi-site, ethics-approved randomized controlled trial—supported by peer-reviewed publications and international recognition."
        />

        {/* ---------- STICKY QUICK LINKS ---------- */}
        <div className=" bg-[#F7FAFF] py-4 mb-24 w-[936px] m-auto">
          <p className="text-sm font-semibold text-gray-500 mb-4 text-center">
            Quick Links:
          </p>

          <div ref={navRef} className="flex gap-3 overflow-hidden px-4 py-2">
            {quickLinks.map((link) => (
              <button
                key={link.name}
                ref={(el) => (tabRefs.current[link.name] = el)}
                onClick={() => handleTabClick(link)}
                className={`px-6 py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition-all
          ${
            active === link.name
              ? "bg-[#2E3A8C] text-white shadow-md"
              : "bg-[#E2E8F0] text-[#475569] hover:bg-gray-300"
          }`}
              >
                {link.name}
              </button>
            ))}
          </div>
        </div>

        {/* ---------- SECTIONS ---------- */}
        <section ref={glanceRef} className="scroll-mt-[160px]">
          <EvidenceGlance />
        </section>

        <section ref={adherenceRef} className="scroll-mt-[160px]">
          <EvidenceImprovements />
        </section>

        <section ref={outcomesRef} className="scroll-mt-[160px]">
          <EvidenceClinicalOutcomes />
        </section>

        <section ref={savingsRef} className="scroll-mt-[160px]">
          <CostSavings />
        </section>

        <section ref={qualityLifeRef} className="scroll-mt-[160px]">
         <QualityOfLife />
        </section>

        <section ref={productivityRef} className="scroll-mt-[160px]">
          <ProductivityGains />
        </section>

         <section ref={RCTResearchRef} className="scroll-mt-[160px]">
          <EvidenceResearch />
        </section>

        <section ref={publicationRef} className="scroll-mt-[160px]">
          <EvidencePublications />
        </section>

        <section ref={registriesRef} className="scroll-mt-[160px]">
          <GlobalRegistries />
        </section>

        <CTASection
          title="Ready to Achieve Similar Outcomes?"
          description="Join healthcare organizations worldwide leveraging evidence-based RPM."
          buttonText="Download Full Research Report"
        />

        <Footer />
      </Container>
    </div>
  );
};

export default Evidence;
