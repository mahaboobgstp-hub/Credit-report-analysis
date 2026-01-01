import "../../styles/dashboard.css";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <h2 className="logo">MendCredit</h2>

      <nav>
        <ul>
          <li className="active">Overview</li>
          <li>Credit Score</li>
          <li>Active Loans</li>
          <li>Negative Accounts</li>
          <li>DPD History</li>
          <li>Credit Utilization</li>
          <li>Credit Mix</li>
          <li>Enquiries</li>
          <li>Closed Loans</li>
          <li>Subscription</li>
          <li>Refresh Report</li>
          <li>Profile</li>
        </ul>
      </nav>
    </aside>
  );
}

