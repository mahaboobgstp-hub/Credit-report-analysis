import DashboardLayout from "../../layouts/DashboardLayout";
import "../../styles/dashboard.css";

export default function Subscription() {
  return (
    <DashboardLayout>
      <h1>Subscription Plans</h1>
      <p className="subtitle">
        Unlock complete credit insights and detailed analysis.
      </p>

      <div className="plans-grid">
        {/* FREE PLAN */}
        <div className="plan-card">
          <h3>Free</h3>
          <p className="plan-price">₹0</p>
          <ul>
            <li>✔ Credit Score</li>
            <li>✔ Credit Overview</li>
            <li>✖ Detailed Loan Breakdown</li>
            <li>✖ DPD Analysis</li>
            <li>✖ Credit Utilization</li>
            <li>✖ Credit Mix</li>
          </ul>
        </div>

        {/* PREMIUM PLAN */}
        <div className="plan-card premium">
          <h3>Premium</h3>
          <p className="plan-price">₹499</p>
          <p className="plan-duration">per report</p>
          <ul>
            <li>✔ Full Credit Report Access</li>
            <li>✔ Active & Negative Loans</li>
            <li>✔ DPD Timeline & Guidance</li>
            <li>✔ Credit Utilization & Mix</li>
            <li>✔ Enquiry Analysis</li>
            <li>✔ Report Refresh (Plan Validity)</li>
          </ul>

          <button className="primary-btn">
            Unlock Full Report
          </button>
        </div>
      </div>

      <div className="advisory-box">
        Subscription provides access to detailed insights.
        Loan approval remains subject to lender policies.
      </div>
    </DashboardLayout>
  );
}
