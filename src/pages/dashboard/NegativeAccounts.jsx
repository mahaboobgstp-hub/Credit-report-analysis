import DashboardLayout from "../../layouts/DashboardLayout";
import "../../styles/dashboard.css";

export default function NegativeAccounts() {
  return (
    <DashboardLayout>
      <h1>Negative Accounts</h1>
      <p className="subtitle">
        Accounts that significantly impact your credit score.
      </p>

      <table className="data-table">
        <thead>
          <tr>
            <th>Bank</th>
            <th>Loan Type</th>
            <th>Status</th>
            <th>Last Reported</th>
          </tr>
        </thead>
        <tbody>
          <tr className="row-danger">
            <td>Axis Bank</td>
            <td>Personal Loan</td>
            <td className="status-danger">Written-Off</td>
            <td>Nov 2025</td>
          </tr>
          <tr className="row-warning">
            <td>ICICI Bank</td>
            <td>Credit Card</td>
            <td className="status-warning">Settled</td>
            <td>Sep 2025</td>
          </tr>
        </tbody>
      </table>

      <div className="advisory-box">
        Written-off or settled accounts require careful handling before applying
        for fresh loans.
      </div>
    </DashboardLayout>
  );
}
