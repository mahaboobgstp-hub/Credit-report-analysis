import { Link, Outlet } from "react-router-dom";

export default function PublicLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800">

      {/* ================= HEADER ================= */}
      <header className="border-b bg-white">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          {/* Logo / Brand */}
          <Link to="/" className="text-xl font-semibold text-slate-900">
            Credit Intelligence
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex gap-6 text-sm font-medium text-slate-600">
            <Link to="/features" className="hover:text-slate-900">
              Features
            </Link>
            <Link to="/pricing" className="hover:text-slate-900">
              Pricing
            </Link>
            <Link to="/compliance" className="hover:text-slate-900">
              Compliance
            </Link>
          </nav>

          {/* CTA */}
          <div className="flex gap-3">
            <Link
              to="/login"
              className="px-4 py-2 text-sm border rounded-md hover:bg-slate-50"
            >
              Login
            </Link>
            <Link
              to="/login"
              className="px-4 py-2 text-sm bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
            >
              Request Demo
            </Link>
          </div>

        </div>
      </header>

      {/* ================= PAGE CONTENT ================= */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* ================= FOOTER ================= */}
      <footer className="bg-slate-900 text-slate-300">
        <div className="max-w-7xl mx-auto px-6 py-10">

          <div className="grid md:grid-cols-3 gap-8 text-sm">

            {/* About */}
            <div>
              <h4 className="text-white font-medium mb-3">
                Credit Intelligence Platform
              </h4>
              <p className="text-slate-400">
                A decision-support platform designed for lenders,
                credit teams, and regulated financial institutions.
              </p>
            </div>

            {/* Links */}
            <div>
              <h4 className="text-white font-medium mb-3">
                Platform
              </h4>
              <ul className="space-y-2">
                <li>
                  <Link to="/features" className="hover:text-white">
                    Features
                  </Link>
                </li>
                <li>
                  <Link to="/pricing" className="hover:text-white">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link to="/compliance" className="hover:text-white">
                    Compliance
                  </Link>
                </li>
              </ul>
            </div>

            {/* Disclaimer */}
            <div>
              <h4 className="text-white font-medium mb-3">
                Disclaimer
              </h4>
              <p className="text-slate-400">
                This platform provides credit intelligence and
                decision-support insights only. It does not provide
                lending, loan approvals, or credit guarantees.
                Final lending decisions are made by regulated entities.
              </p>
            </div>

          </div>

          <div className="mt-8 border-t border-slate-700 pt-6 text-xs text-slate-500">
            © {new Date().getFullYear()} Credit Intelligence Platform. All rights reserved.
          </div>

        </div>
      </footer>

    </div>
  );
                    }
