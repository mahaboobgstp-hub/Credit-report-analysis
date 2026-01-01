import DashboardLayout from "../../layouts/DashboardLayout";
import "../../styles/dashboard.css";

export default function ActiveLoans() {
  return (
    <DashboardLayout>
      <h1>Active Loans</h1>
      <p className="subtitle">
        Loans currently impacting your credit profile.
      </p>

      <table className="data-table">
        <thead>
          <tr>
            <th>Bank</th>
            <th>Loan Type</th>
            <th>Outstanding</th>
            <th>EMI</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>HDFC Bank</td>
            <td>Personal Loan</td>
            <td>₹3,20,000</td>
            <td>₹9,850</td>
            <td className="status-ok">Regular</td>
          </tr>
          <tr className="row-warning">
            <td>SBI</td>
            <td>Credit Card</td>
            <td>₹1,15,000</td>
            <td>₹5,400</td>
            <td className="status-risk">High Utilization</td>
          </tr>
        </tbody>
      </table>

      <div className="advisory-box">
        Loans with high utilization or delayed payments may reduce your
        eligibility for new credit.
      </div>
    </DashboardLayout>
  );
}
