import type { Metadata } from "next";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms of Service | Devchi Digital Ltd",
  description:
    "The terms and conditions governing your use of Devchi Digital Ltd's websites, software, mobile apps, APIs, and professional services.",
};

export default function TermsPage() {
  const lastUpdated = new Date("2025-09-20").toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="min-h-screen bg-white">
      <div className="py-6">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-3">
              Terms of Service
            </h1>
            <p className="text-gray-600">Last updated: {lastUpdated}</p>
          </header>

          <div className="prose prose-gray max-w-none">
            <p className="text-lg text-gray-700">
              These Terms of Service ("Terms") govern your access to and use of
              Devchi Digital Ltd's websites, software, mobile applications,
              application programming interfaces (APIs), and professional
              services (collectively, the "Services"). By accessing or using the
              Services, you agree to be bound by these Terms.
            </p>

            <h2 className="mt-10 text-2xl font-bold text-gray-900">1. Who we are</h2>
            <p className="text-gray-700">
              Devchi Digital Ltd ("Devchi", "we", "us", or "our") is a digital
              agency and software company based in Lagos, Nigeria. We design and
              build websites, mobile apps, APIs, and provide related consulting,
              hosting, maintenance, SEO, and integration services.
            </p>

            <h2 className="mt-8 text-2xl font-bold text-gray-900">2. Acceptance of terms</h2>
            <p className="text-gray-700">
              By using the Services, clicking to accept these Terms, or signing a
              statement of work ("SOW") or other order form that references these
              Terms, you agree to them. If you are using the Services on behalf
              of an organization, you represent that you have authority to bind
              that organization, and "you" refers to the organization.
            </p>

            <h2 className="mt-8 text-2xl font-bold text-gray-900">3. Scope of services</h2>
            <p className="text-gray-700">
              Project-specific deliverables, milestones, assumptions, and
              responsibilities will be described in an SOW or proposal. In the
              absence of an SOW, our Services include discovery, design,
              development, testing, deployment, and optional support/maintenance
              as agreed in writing.
            </p>

            <h2 className="mt-8 text-2xl font-bold text-gray-900">4. Client responsibilities</h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>
                Provide timely feedback, approvals, content, and access to
                systems required to deliver the Services.
              </li>
              <li>
                Ensure all content, materials, and data provided do not infringe
                third-party rights and comply with applicable laws.
              </li>
              <li>
                Appoint a single knowledgeable point of contact for decisions
                and queries.
              </li>
            </ul>

            <h2 className="mt-8 text-2xl font-bold text-gray-900">5. Fees, billing, and taxes</h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>
                Pricing and payment schedules are defined in the applicable SOW
                or order. Unless stated otherwise, invoices are due within 14
                days.
              </li>
              <li>
                Late payments may accrue interest at 1.5% per month (or the
                maximum permitted by law, if lower). We may suspend work for
                overdue accounts.
              </li>
              <li>
                Fees are exclusive of taxes, duties, and bank/transfer charges,
                which you are responsible to pay.
              </li>
            </ul>

            <h2 className="mt-8 text-2xl font-bold text-gray-900">6. Intellectual property</h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>
                Pre-existing IP: Each party retains ownership of intellectual
                property it owned before the engagement and any general
                know‑how, tools, and libraries developed independently of your
                project.
              </li>
              <li>
                Deliverables: Upon full payment, you receive ownership of the
                project-specific deliverables identified in the SOW (excluding
                third‑party components and our pre-existing IP) and a worldwide,
                perpetual license to our incorporated pre-existing materials to
                the extent necessary to use the deliverables.
              </li>
              <li>
                Portfolio: You grant us a limited right to reference your name,
                logo, non-confidential project descriptions, and publicly
                accessible screenshots in our portfolio and marketing, unless
                otherwise agreed in writing.
              </li>
            </ul>

            <h2 className="mt-8 text-2xl font-bold text-gray-900">7. Third‑party and open‑source components</h2>
            <p className="text-gray-700">
              The Services may incorporate third‑party services (e.g., hosting,
              analytics, payment gateways) and open‑source software. Your use of
              such components is subject to their respective licenses and terms.
              We are not responsible for changes, outages, or security incidents
              attributable to third‑party providers.
            </p>

            <h2 className="mt-8 text-2xl font-bold text-gray-900">8. Confidentiality</h2>
            <p className="text-gray-700">
              Each party agrees to protect the other party's non-public
              information disclosed in connection with the Services and to use
              it only for performing obligations under these Terms. This section
              does not restrict disclosures required by law or court order.
            </p>

            <h2 className="mt-8 text-2xl font-bold text-gray-900">9. Data protection</h2>
            <p className="text-gray-700">
              You are responsible for providing any required notices and
              obtaining consents from your end users. Where we act as a
              processor on your behalf, we will process personal data only per
              your documented instructions and apply reasonable technical and
              organizational measures to protect it. Additional data processing
              terms may be included in an SOW or separate agreement.
            </p>

            <h2 className="mt-8 text-2xl font-bold text-gray-900">10. Acceptable use</h2>
            <p className="text-gray-700">
              You will not use the Services to engage in unlawful activities,
              infringe intellectual property, distribute malware, attempt to
              gain unauthorized access to systems, or otherwise interfere with
              network integrity. We may suspend or terminate access for
              violations.
            </p>

            <h2 className="mt-8 text-2xl font-bold text-gray-900">11. Warranties and disclaimers</h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>
                We warrant that we will perform the Services with reasonable
                skill and care consistent with industry standards.
              </li>
              <li>
                EXCEPT AS EXPRESSLY STATED, THE SERVICES AND DELIVERABLES ARE
                PROVIDED "AS IS" WITHOUT OTHER WARRANTIES, EXPRESS OR IMPLIED,
                INCLUDING WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
                PARTICULAR PURPOSE, OR NON‑INFRINGEMENT.
              </li>
            </ul>

            <h2 className="mt-8 text-2xl font-bold text-gray-900">12. Limitation of liability</h2>
            <p className="text-gray-700">
              To the maximum extent permitted by law, neither party will be
              liable for any indirect, incidental, special, consequential, or
              punitive damages, or for lost profits, revenues, data, or
              goodwill, arising out of or related to these Terms, even if
              advised of the possibility. Each party's total liability arising
              from or relating to these Terms is limited to the amounts paid or
              payable for the Services giving rise to the claim in the twelve
              (12) months preceding the event.
            </p>

            <h2 className="mt-8 text-2xl font-bold text-gray-900">13. Indemnification</h2>
            <p className="text-gray-700">
              You agree to defend, indemnify, and hold harmless Devchi and its
              officers, directors, employees, and agents from and against claims
              and losses arising from your content, your use of the Services in
              violation of these Terms, or your breach of applicable law.
            </p>

            <h2 className="mt-8 text-2xl font-bold text-gray-900">14. Term, suspension, and termination</h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>
                These Terms apply from the earlier of your first use of the
                Services or execution of an SOW and continue until terminated as
                permitted here.
              </li>
              <li>
                Either party may terminate for material breach if not cured
                within 14 days after written notice. We may also suspend access
                for non‑payment or legal compliance.
              </li>
              <li>
                Upon termination, you will pay for Services performed up to the
                effective date and cease using any access we provided.
              </li>
            </ul>

            <h2 className="mt-8 text-2xl font-bold text-gray-900">15. Changes and out‑of‑scope work</h2>
            <p className="text-gray-700">
              Requests that alter scope, schedule, or effort may require a
              written change order and may impact timelines and fees. We will
              not proceed with out‑of‑scope work without written approval.
            </p>

            <h2 className="mt-8 text-2xl font-bold text-gray-900">16. Non‑solicitation</h2>
            <p className="text-gray-700">
              During an engagement and for 12 months thereafter, neither party
              will solicit for employment any employee or contractor of the
              other party who was materially involved in the Services, except
              through general public recruitment.
            </p>

            <h2 className="mt-8 text-2xl font-bold text-gray-900">17. Subcontracting</h2>
            <p className="text-gray-700">
              We may engage qualified subcontractors to assist with the
              Services. We remain responsible for their performance and
              compliance with these Terms.
            </p>

            <h2 className="mt-8 text-2xl font-bold text-gray-900">18. Governing law and disputes</h2>
            <p className="text-gray-700">
              These Terms are governed by the laws of the Federal Republic of
              Nigeria, without regard to conflict of law principles. The courts
              of Lagos, Nigeria will have exclusive jurisdiction over disputes
              arising out of or relating to these Terms, subject to any agreed
              alternative dispute resolution mechanisms in an SOW.
            </p>

            <h2 className="mt-8 text-2xl font-bold text-gray-900">19. Updates to these Terms</h2>
            <p className="text-gray-700">
              We may update these Terms from time to time. Material changes will
              be indicated by updating the "Last updated" date above. Continued
              use of the Services after a change constitutes acceptance of the
              updated Terms.
            </p>

            <h2 className="mt-8 text-2xl font-bold text-gray-900">20. Contact</h2>
            <p className="text-gray-700">
              Questions about these Terms can be sent to
              <a className="text-blue-600 hover:underline ml-1" href="mailto:support@devchi.me">
                support@devchi.me
              </a>
              .
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
