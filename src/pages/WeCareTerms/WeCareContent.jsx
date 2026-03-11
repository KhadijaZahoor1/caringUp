import React from "react";

const WeCareContent = () => {
  return (
    <div className="pt-16">
      {/* Section 1 */}
      <section className="mb-8">
        <h2 className="body-text-heading font-medium mb-3">
          1. Acceptance and Binding Agreement
        </h2>
        <p className="body-text text-primary mb-4">
          These WeCare Platform User Terms and Conditions (“Terms”) are a legal
          agreement between you (“User”, “you”) and Caring Up Pte. Ltd.
          (“CaringUp”, “we”, “us”, “our”). By accessing or using the WeCare
          web-based analytics portal and related services (the “WeCare Platform”
          or “Services”), you agree to be bound by these Terms.
        </p>
        <p className="body-text text-primary mb-4">
          Your access is granted on behalf of your employer or the organization
          you represent (“Client Organization”). If a Master Service Agreement
          (“MSA”) exists between CaringUp and your Client Organization, your use
          of the WeCare Platform is subject to these Terms and that MSA. These
          Terms are incorporated into and subject to the terms of that MSA, and
          in the event of any conflict, the MSA shall prevail. If no MSA is in
          effect, these Terms constitute the entire agreement between you and
          CaringUp regarding your use of the WeCare Platform for the permitted
          pilot or trial period.
        </p>
      </section>

      {/* Section 2 */}
      <section className="mb-8">
        <h2 className="body-text-heading font-medium mb-3">
          2. Account Registration and Security
        </h2>
        <p className="body-text text-primary mb-4">
          You must provide accurate and complete registration information and
          keep it updated. You are responsible for maintaining the
          confidentiality of your login credentials and for all activities that
          occur under your account. You must immediately notify CaringUp of any
          unauthorized use of your account or any other security breach.
        </p>
      </section>

      {/* Section 3 */}
      <section className="mb-8">
        <h2 className="body-text-heading font-medium mb-3">
          3. License and Acceptable Use
        </h2>
        <p className="body-text text-primary mb-4">
          3.1. Limited License: Subject to these Terms (and the MSA, if
          applicable), CaringUp grants you a limited, non-exclusive,
          non-transferable, revocable license to access and use the WeCare
          Platform solely for the internal business purposes of your Client
          Organization.
        </p>
        <p className="body-text text-primary">
          3.2. Use Restrictions: You shall not, and shall not permit others to:
        </p>
        <ul className="space-y-1">
          <li className="body-text text-primary">
            a. Copy, modify, create derivative works of, reverse engineer,
            decompile, disassemble, or attempt to derive the source code of the
            WeCare Platform;
          </li>
          <li className="body-text text-primary">
            b. Use the WeCare Platform to build a competitive product or
            service, or for any benchmarking or comparative purposes;
          </li>
          <li className="body-text text-primary">
            c. Use any automated means (e.g., bots, scrapers, spiders) to access
            or collect data from the WeCare Platform;
          </li>
          <li className="body-text text-primary">
            d. Remove any proprietary notices or labels;
          </li>
          <li className="body-text text-primary">
            e. Transmit any viruses or malicious code, or interfere with the
            integrity or performance of the WeCare Platform;
          </li>
          <li className="body-text text-primary">
            f. Use the WeCare Platform in any unlawful manner or for any
            fraudulent purpose.
          </li>
        </ul>
      </section>

      {/* section 4 */}
      <section className="mb-8">
        <h2 className="body-text-heading font-medium mb-3">
          4. Data Protection, Privacy, and Local Compliance
        </h2>
        <p className="body-text text-primary mb-4">
          4.1. Acknowledgment of Sensitive Data: You acknowledge that the WeCare
          Platform provides access to data from the CareAide application, which
          may include sensitive personal and health information. You shall
          handle all such data with the utmost care and only for authorized
          purposes.
        </p>

        <div className="mb-4">
          <p className="body-text text-primary">
            4.2. Comprehensive Compliance: You agree to access, use, store,
            process, and transfer (including any download or export) any data
            made available through the WeCare Platform (“Platform Data”) in
            strict compliance with:
          </p>
          <ul className="space-y-1">
            <li className="body-text text-primary">
              a. All applicable local, national, and international laws,
              regulations, and professional policies governing data protection,
              privacy, and healthcare information in your jurisdiction and the
              jurisdiction of the data subjects (e.g., PDPA, GDPR, HIPAA, etc.);
            </li>
            <li className="body-text text-primary">
              b. The data protection obligations set forth in any applicable
              MSA; and
            </li>
            <li className="body-text text-primary">
              c. Our Privacy Policy (available
              at https://caringup.com/privacy-policy/).
            </li>
          </ul>
        </div>

        <p className="body-text text-primary mb-4">
          4.3. International Data Transfers: Platform Data is stored and
          processed primarily in Singapore. To provide the Services, CaringUp
          may use service providers and infrastructure located in other
          countries. Where such transfers occur, we implement safeguards (such
          as standard contractual clauses) as required by law. You acknowledge
          this and are responsible for ensuring any subsequent transfer or use
          of downloaded data by you complies with applicable cross-border data
          transfer rules.
        </p>

        <div className="mb-4">
          <p className="body-text text-primary">
            4.4. Specific User Obligations: You shall:
          </p>
          <ul className="space-y-1">
            <li className="body-text text-primary">
              a. Use Platform Data only for authorized business purposes related
              to the services of your Client Organization, as defined in any
              applicable MSA or as otherwise expressly authorized by CaringUp in
              writing;
            </li>
            <li className="body-text text-primary">
              b. Not disclose, sell, transfer, or distribute Platform Data to
              any external third party or use it for any unauthorized purpose,
              including personal use, research, or marketing, without the
              explicit consent of the data subject and/or prior written
              authorization from CaringUp;
            </li>
            <li className="body-text text-primary">
              c. Implement appropriate security measures to protect Platform
              Data against unauthorized access, loss, or breach;
            </li>
            <li className="body-text text-primary">
              d. Immediately notify your Client Organization's designated
              administrator and CaringUp (at dataprotection@caringup.com) if you
              become aware of any actual or suspected unauthorized access, loss,
              or breach of Platform Data;
            </li>
            <li className="body-text text-primary">
               e. Promptly cooperate with your Client Organization and CaringUp
              in responding to and fulfilling any valid requests from data
              subjects exercising their rights under applicable data protection
              laws (e.g., access, correction, deletion);
            </li>
            <li className="body-text text-primary">
              f. Cease using and securely delete or return all Platform Data
              (including downloaded copies) upon termination of your access or
              upon request by CaringUp or the data subject, in accordance with
              applicable law.
            </li>
          </ul>
        </div>

        <p className="body-text text-primary mb-4">
          4.5. Compliance Audits: You agree that CaringUp and/or your Client
          Organization may, upon reasonable notice, audit or monitor your access
          to and use of the WeCare Platform (including log files and data export
          activities) to ensure compliance with these Terms, any applicable MSA,
          and applicable law.
        </p>
      </section>

      {/* section 5 */}
      <section className="mb-8">
        <h2 className="body-text-heading font-medium mb-3">
          5. Partner Content and Campaigns
        </h2>
        <p className="body-text text-primary mb-4">
          The WeCare Platform may display or provide access to health
          information, educational content, or awareness campaigns from
          CaringUp’s trusted partners. Such content is provided for
          informational purposes only. CaringUp does not endorse specific
          products or services, and the presence of partner content does not
          constitute medical advice. Your interactions with any third-party
          content are subject to your independent review and discretion.
        </p>
      </section>

      {/* section 6 */}
      <section className="mb-8">
        <h2 className="body-text-heading font-medium mb-3">
          6. Intellectual Property Rights
        </h2>
        <p className="body-text text-primary mb-4">
          All rights, title, and interest in and to the WeCare Platform, its
          underlying software, documentation, and all related intellectual
          property rights are and shall remain the exclusive property of
          CaringUp and its licensors. Except for the limited license granted in
          Section 3, no other rights are granted.
        </p>
      </section>

      {/* section 7 */}
      <section className="mb-8">
        <h2 className="body-text-heading mb-3">
          7. Nature of Service; No Medical Advice; Use of Outputs
        </h2>
        <p className="body-text text-primary mt-4">
          THE WECARE PLATFORM IS AN INFORMATIONAL AND DECISION-SUPPORT TOOL
          ONLY. THE DATA, ANALYTICS, INSIGHTS, AND REPORTS PROVIDED (“OUTPUTS”)
          ARE NOT INTENDED TO BE, AND SHALL NOT BE CONSTRUED AS, MEDICAL ADVICE,
          CLINICAL DIAGNOSIS, OR TREATMENT RECOMMENDATIONS. OUTPUTS ARE NOT A
          SUBSTITUTE FOR THE PROFESSIONAL JUDGMENT OF A QUALIFIED HEALTHCARE
          PROVIDER. YOU AND YOUR CLIENT ORGANIZATION ARE SOLELY RESPONSIBLE FOR
          ALL DECISIONS AND ACTIONS TAKEN BASED ON THE WECARE PLATFORM OR ITS
          OUTPUTS. YOU MUST NOT USE OR DISTRIBUTE OUTPUTS, ESPECIALLY THOSE
          CONTAINING PERSONAL OR HEALTH DATA, OUTSIDE THE SCOPE OF YOUR EXPRESS
          AUTHORITY AND IN VIOLATION OF THESE TERMS OR APPLICABLE LAW.
        </p>
      </section>

      {/* section 8 */}
      <section className="mb-8">
        <h2 className="body-text-heading font-medium mb-3">8. Termination</h2>
        <p className="body-text text-primary mt-4">
          CaringUp may suspend or terminate your access to the WeCare Platform
          immediately, without liability, if we reasonably believe you have
          violated these Terms, any applicable MSA, or applicable law. Upon
          termination, your right to access the Platform ceases immediately.
        </p>
      </section>

      {/* section 9 */}
      <section className="mb-8">
        <h2 className="body-text-heading font-medium mb-3">
          9. Disclaimer of Warranties
        </h2>
        <p className="body-text text-primary mb-4">
          THE WECARE PLATFORM IS PROVIDED “AS IS” AND “AS AVAILABLE.” TO THE
          FULLEST EXTENT PERMITTED BY LAW, CARINGUP DISCLAIMS ALL WARRANTIES,
          EXPRESS OR IMPLIED, INCLUDING IMPLIED WARRANTIES OF MERCHANTABILITY,
          FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE DO NOT
          WARRANT THAT THE PLATFORM WILL BE UNINTERRUPTED, SECURE, OR
          ERROR-FREE.
        </p>
      </section>

      {/* section 10 */}
      <section className="mb-8">
        <h2 className="body-text-heading font-medium mb-3">
          10. Limitation of Liability
        </h2>
        <p className="body-text text-primary mt-4">
          TO THE MAXIMUM EXTENT PERMITTED BY LAW, CARINGUP AND ITS AFFILIATES
          SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL,
          CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR DATA,
          ARISING FROM OR RELATED TO THESE TERMS OR YOUR USE OF THE WECARE
          PLATFORM.
        </p>
      </section>

      {/* section 11 */}
      <section className="mb-8">
        <h2 className="body-text-heading font-medium mb-3">
          11. Indemnification
        </h2>
        <p className="body-text text-primary mt-4">
          You agree to indemnify, defend, and hold harmless CaringUp, its
          officers, directors, employees, and agents from and against any and
          all claims, damages, losses, liabilities, costs, and expenses
          (including reasonable attorneys' fees) arising out of or relating to:
          (a) your breach of these Terms, (b) your misuse of the WeCare Platform
          or Platform Data, or (c) your violation of any applicable law or
          third-party right.
        </p>
      </section>

      {/* section 12 */}
      <section className="mb-8">
        <h2 className="body-text-heading font-medium mb-3">
          12. Governing Law and Dispute Resolution
        </h2>
        <p className="body-text text-primary my-4">
          These Terms shall be governed by and construed in accordance with the
          laws of Singapore. Any dispute arising out of or relating to these
          Terms shall be subject to the dispute resolution mechanism set forth
          in any applicable MSA. If no MSA applies, the dispute shall be
          referred to the courts of Singapore.
        </p>
      </section>

      {/* section 13 */}
      <section className="mb-8">
        <h2 className="body-text-heading font-medium mb-3">
          13. General Provisions
        </h2>
        <p className="body-text text-primary my-4">
          13.1. Entire Agreement: These Terms, together with any applicable MSA
          and the Privacy Policy, constitute the entire agreement between you
          and CaringUp regarding your use of the WeCare Platform.
        </p>
        <p className="body-text text-primary my-4">
          13.2. Severability: If any provision of these Terms is held invalid or
          unenforceable, the remaining provisions will remain in full force and
          effect.
        </p>
        <p className="body-text text-primary my-4">
          13.3. Survival: Sections 4 (Data Protection), 5 (Partner Content), 6
          (Intellectual Property), 7 (No Medical Advice), 9 (Disclaimer), 10
          (Limitation of Liability), 11 (Indemnification), and 12 (Governing
          Law) shall survive termination of your access.
        </p>
        <p className="body-text text-primary my-4">
          13.4. Changes to Terms: We may modify these Terms at any time. We will
          provide notice of material changes via the WeCare Platform or email.
          Your continued use after the effective date constitutes acceptance.
        </p>
      </section>

      {/* section 14 */}
      <section className="">
        <h2 className="body-text-heading font-medium mb-3">
          14. Contact Information
        </h2>
        <ul className="space-y-1">
          <li className="body-text text-primary">
            For questions about these Terms:
          </li>
          <li className="body-text text-primary">Caring Up Pte. Ltd.</li>
          <li className="body-text text-primary">ATTN: Legal Department</li>
          <li className="body-text text-primary">
            1 Wallich St, #14-01 Guoco Tower, Singapore 078881
          </li>
          <li className="body-text text-primary">Email: legal@caringup.com</li>
        </ul>
        <p className="body-text text-primary mt-4">
          For privacy inquiries: <br />
          Email: dataprotection@caringup.com
        </p>
      </section>
    </div>
  );
};

export default WeCareContent;
