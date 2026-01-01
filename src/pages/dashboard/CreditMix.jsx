import DashboardLayout from "../../layouts/DashboardLayout";
import "../../styles/dashboard.css";

export default function CreditMix() {
  return (
    <DashboardLayout>
      <h1>Credit Mix</h1>
      <p className="subtitle">
        Distribution of secured and unsecured credit in your profile.
      </p>

      <div className="mix-grid">
        <div className="mix-card">
          <h3>Secured Loans</h3>
          <p className="mix-value">30%</p>
          <p>Home Loan, Gold Loan, Vehicle Loan</p>
        </div>

        <div className="mix-card">
          <h3>Unsecured Loans</h3>
          <p className="mix-value">70%</p>
          <p>Personal Loans, Credit Cards</p>
        </div>
      </div>

      <div className="info-box">
        <h3>Why Credit Mix Matters</h3>
        <p>
          A balanced mix of secured and unsecured credit indicates better
          repayment discipline and lower risk.
        </p>
      </div>

      <div className="apply-guidance">
        <h3>Lender Insight</h3>
        <p>
          Profiles dominated by unsecured loans may face stricter approval
          criteria.
        </p>
      </div>
    </DashboardLayout>
  );
}

