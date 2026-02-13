import React, { useEffect, useRef, useState } from "react";
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

  /* ---------------- HEADER VISIBILITY ---------------- */
  const [hideHeader, setHideHeader] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;

      const heroHeight = heroRef.current.offsetHeight;

      if (window.scrollY > heroHeight - 100) {
        setHideHeader(true);
      } else {
        setHideHeader(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ---------------- SECTION REFS ---------------- */
  const glanceRef = useRef(null);
  const adherenceRef = useRef(null);
  const outcomesRef = useRef(null);
  const savingsRef = useRef(null);
  const qualityLifeRef = useRef(null);
  const productivityRef = useRef(null);
  const RCTResearchRef = useRef(null);
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
    { name: "RCT Research", ref: RCTResearchRef }, // fixed duplicate
    { name: "Publications", ref: publicationRef },
    { name: "Global Registries", ref: registriesRef },
  ];

  /* ---------------- HANDLER ---------------- */
  const handleTabClick = (link) => {
    setActive(link.name);

    const tabEl = tabRefs.current[link.name];
    tabEl?.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });

    link.ref.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <Container>
      <Header hidden={hideHeader} />

      {/* HERO WRAPPED WITH REF */}
      <div ref={heroRef} className="">
        <Hero
          backgroundImage={evidenceBanner}
          title="World-Class, Award-Winning RCT Proven in Real-World Clinical Settings"
          description="Validated through a multi-site, ethics-approved randomized controlled trial—supported by peer-reviewed publications and international recognition."
        />
      </div>

      {/* ---------- STICKY QUICK LINKS ---------- */}
      <div className="sticky top-0 bg-white z-40 border-b">
        <div className="max-w-[936px] mx-auto py-11">
          <p className="body-text-1 mb-6 text-center text-primary">
            Quick Links:
          </p>

          <div
            ref={navRef}
            className="flex gap-2 overflow-x-hidden"
          >
            {quickLinks.map((link) => (
              <button
                key={link.name}
                ref={(el) => (tabRefs.current[link.name] = el)}
                onClick={() => handleTabClick(link)}
                className={`px-4 py-2.5 rounded-full body-text-1 whitespace-nowrap transition-all
                  ${
                    active === link.name
                      ? "bg-[#1B447D] text-white shadow-md"
                      : "bg-[#E2E8F0] text-primary hover:bg-gray-300"
                  }`}
              >
                {link.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ---------- SECTIONS ---------- */}
      <section ref={glanceRef} className="scroll-mt-[120px]">
        <EvidenceGlance />
      </section>

      <section ref={adherenceRef} className="scroll-mt-[120px]">
        <EvidenceImprovements />
      </section>

      <section ref={outcomesRef} className="scroll-mt-[120px]">
        <EvidenceClinicalOutcomes />
      </section>

      <section ref={savingsRef} className="scroll-mt-[120px]">
        <CostSavings />
      </section>

      <section ref={qualityLifeRef} className="scroll-mt-[120px]">
        <QualityOfLife />
      </section>

      <section ref={productivityRef} className="scroll-mt-[120px]">
        <ProductivityGains />
      </section>

      {/* <section ref={RCTResearchRef} className="scroll-mt-[120px]">
        <EvidenceResearch />
      </section> */}

      <section ref={publicationRef} className="scroll-mt-[120px]">
        <EvidencePublications />
      </section>

      <section ref={registriesRef} className="scroll-mt-[120px]">
        <GlobalRegistries />
      </section>

      <CTASection
        title="Ready to Achieve Similar Outcomes?"
        description="Join healthcare organizations worldwide leveraging evidence-based RPM."
         primaryBtn={{ label: "Schedule a Demo" }}
            secondaryBtn={{ label: "Download Full Research Report" }}
      />

      <Footer />
    </Container>
  );
};

export default Evidence;