import React from "react";
import Container from "../../components/layout/Container";
import Footer from "../../components/layout/Footer";
import CTASection from "../../components/CTASection";
import Header from "../../components/layout/Header";
import PrivacyContent from "./PrivacyContent";

const PrivacyPolicy = () => {
  return (
    <Container>
      <Header />
      <section className="py-16 max-w-[940px] mx-auto md:px-0 px-5">
        <div className="flex flex-col text-center">
          <h1 className="heading-1 mb-6">Privacy Policy</h1>
          <p>
            <span className="body-text pr-4"> Effective Date: 26 January 2026</span>
            <span className="body-text border-l-2 border-secondary pl-4">Last Updated: 26 January 2026</span>
          </p>
        </div>
        <PrivacyContent />
      </section>
      <CTASection
        title={`Ready to See How Quickly You Can Achieve Your Outcomes?`}
        description="Let's discuss a rapid-start plan tailored to your public health priorities."
        primaryBtn={{ label: "Request a Discussion Session" }}
      />
      <Footer />
    </Container>
  );
};

export default PrivacyPolicy;
