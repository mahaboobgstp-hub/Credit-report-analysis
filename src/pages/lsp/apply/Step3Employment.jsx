import LSPLayout from "../../../layouts/LSPLayout";
import "../../../styles/lsp.css";

export default function Step3Employment() {
  return (
    <LSPLayout step={2}>
      <h1>Employment & Income Details</h1>
      <p className="lsp-subtitle">
        Tell us about your employment to assess repayment capacity.
      </p>

      <div className="lsp-card">
        {/* EMPLOYMENT TYPE */}
        <select>
          <option>Employment Type</option>
          <option>Salaried</option>
          <option>Self-Employed</option>
        </select>

        {/* SALARIED FIELDS */}
        <input placeholder="Company Name" />
        <input placeholder="Designation" />
        <input type="number" placeholder="Monthly Net Salary (₹)" />
        <input type="number" placeholder="Total Work Experience (Years)" />
        <input type="number" placeholder="Current Company Tenure (Months)" />

        {/* SELF-EMPLOYED (future conditional) */}
        {/* Business Name */}
        {/* Nature of Business */}
        {/* Monthly Average Income */}

        <button className="lsp-primary-btn">
          Continue to Document Upload
        </button>
      </div>

      <p className="lsp-disclaimer">
        Income details are used only for loan assessment and are kept confidential.
      </p>
    </LSPLayout>
  );
}

