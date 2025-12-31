import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="w-full text-slate-800">

      {/* ================= HERO SECTION ================= */}
      <section className="bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight max-w-3xl">
            Credit Report Intelligence <br />
            Built for Faster, Safer Decisions
          </h1>

          <p className="mt-6 text-lg text-slate-300 max-w-2xl">
            Convert raw bureau credit reports into a single,
            decision-ready summary — designed for lenders,
            risk teams, and credit operations.
          </p>

          <div className="mt-8 flex gap-4">
            <Link
              to="/features"
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-md font-medium"
            >
              See How It Works
            </Link>

            <Link
              to="/login"
              className="border border-slate-400 hover:border-white px-6 py-3 rounded-md font-medium"
            >
              Book a Demo
            </Link>
          </div>
        </div>
      </section>

      {/* ================= PROBLEM vs SOLUTION ================= */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold mb-4">The Problem Today</h2>
            <ul className="space-y-3 text-slate-600">
              <li>• Long, unstructured bureau reports</li>
              <li>• Manual analysis by credit managers</li>
              <li>• Inconsistent decision quality</li>
              <li>• Hidden risk signals missed</li>
              <li>• Time-consuming reviews</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Our Solution</h2>
            <ul className="space-y-3 text-slate-600">
              <li>• Single-page decision summary</li>
              <li>• Clear risk flags & trends</li>
              <li>• Explainable insights</li>
              <li>• Faster, standardized reviews</li>
              <li>• Designed for regulated lending</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <h2 className="text-3xl font-semibold text-center mb-12">
            What This Platform Delivers
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <Feature
              title="Decision-Grade Summary"
              description="All critical credit insights presented on a single page for fast evaluation."
            />
            <Feature
              title="Risk Signals"
              description="DPD trends, exposure concentration, and behavioral flags highlighted clearly."
            />
            <Feature
              title="Explainability First"
              description="Every insight is transparent and reviewable by human credit managers."
            />
            <Feature
              title="API-Driven"
              description="Designed to consume bureau data directly via secure APIs — no file uploads."
            />
            <Feature
              title="Audit Friendly"
              description="Consistent summaries that support compliance and internal audits."
            />
            <Feature
              title="Underwriting-Ready"
              description="Built to evolve into assisted and full underwriting workflows."
            />
          </div>
        </div>
      </section>

      {/* ================= HOW IT WORKS ================= */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <h2 className="text-3xl font-semibold text-center mb-12">
            How It Works
          </h2>

          <div className="grid md:grid-cols-4 gap-6 text-center">
            <Step number="1" text="Borrower KYC & Consent" />
            <Step number="2" text="Bureau Data Fetched via API" />
            <Step number="3" text="Credit Intelligence Engine" />
            <Step number="4" text="Single-Page Decision View" />
          </div>
        </div>
      </section>

      {/* ================= WHO IT IS FOR ================= */}
      <section className="bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <h2 className="text-3xl font-semibold mb-8">
            Built for Lending Organizations
          </h2>

          <div className="grid md:grid-cols-3 gap-6 text-slate-300">
            <div>• Banks & NBFCs</div>
            <div>• Fintech Lenders</div>
            <div>• Credit & Risk Teams</div>
            <div>• Loan Service Providers</div>
            <div>• Co-lending Platforms</div>
            <div>• Audit & Compliance Teams</div>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="bg-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-6 py-16 text-center">
          <h2 className="text-3xl font-semibold">
            Ready to Simplify Credit Decisions?
          </h2>
          <p className="mt-4 text-indigo-100">
            See how credit intelligence can transform your lending workflow.
          </p>

          <div className="mt-6">
            <Link
              to="/login"
              className="bg-white text-indigo-700 px-6 py-3 rounded-md font-semibold"
            >
              Request a Demo
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}

/* ================= SMALL REUSABLE COMPONENTS ================= */

function Feature({ title, description }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h3 className="font-semibold text-lg mb-2">{title}</h3>
      <p className="text-slate-600 text-sm">{description}</p>
    </div>
  );
}

function Step({ number, text }) {
  return (
    <div className="border rounded-lg p-6">
      <div className="text-indigo-600 text-2xl font-bold mb-2">{number}</div>
      <p className="text-slate-600">{text}</p>
    </div>
  );
          }
