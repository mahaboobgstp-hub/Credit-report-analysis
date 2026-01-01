import { NavLink } from "react-router-dom";
import "../../styles/dashboard.css";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <h2 className="logo">MendCredit</h2>

      <nav>
        <ul>
          <li>
            <NavLink to="/dashboard" end>
              Overview
            </NavLink>
          </li>

          <li>
            <NavLink to="/dashboard/credit-score">
              Credit Score
            </NavLink>
          </li>

          <li>
            <NavLink to="/dashboard/active-loans">
              Active Loans
            </NavLink>
          </li>

          <li>
            <NavLink to="/dashboard/negative-accounts">
              Negative Accounts
            </NavLink>
          </li>

          <li>
            <NavLink to="/dashboard/dpd-history">
              DPD History
            </NavLink>
          </li>

          <li>
            <NavLink to="/dashboard/credit-utilization">
              Credit Utilization
            </NavLink>
          </li>

          <li>
            <NavLink to="/dashboard/credit-mix">
              Credit Mix
            </NavLink>
          </li>

          <li>
            <NavLink to="/dashboard/subscription">
              Subscription
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
