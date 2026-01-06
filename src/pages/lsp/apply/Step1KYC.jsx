import LSPLayout from "../../../layouts/LSPLayout";
import "../../../styles/lsp.css";
import { useNavigate } from "react-router-dom";
const navigate = useNavigate();

  return (
    <LSPLayout step={0}>
      <h1>Apply for Personal Loan</h1>
      <p className="lsp-subtitle">
        Start by entering your basic details.
      </p>

      <div className="lsp-card">
        <input placeholder="Full Name" />
        <input placeholder="PAN" />
        <input type="date" />
        <input placeholder="Mobile Number" />
        <input placeholder="Email Address" />

        <button className="lsp-primary-btn">
          Continue
        </button>
      </div>
    </LSPLayout>
  );
}

