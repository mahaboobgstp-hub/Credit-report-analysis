import LSPLayout from "../../../layouts/LSPLayout";
import "../../../styles/lsp.css";

export default function Step6Handoff() {
  return (
    <LSPLayout step={5}>
      <h1>Lender Review & Processing</h1>
      <p className="lsp-subtitle">
        Your application will now be reviewed by our lending partner.
      </p>

      {/* PARTNER CARD */}
      <div className="lsp-partner-card">
        <h3>Selected Lending Partner</h3>

        <div className="partner-details">
          <div>
            <strong>ABC Finance Pvt. Ltd.</strong>
            <p>RBI Registered NBFC</p>
          </div>
          <div className="partner-meta">
            <p>Loan Type: Personal Loan</p>
            <p>Processing: Digital</p>
          </div>
        </div>
      </div>

      {/* WHAT HAPPENS NEXT */}
      <div className="lsp-info-card">
        <h3>What happens next?</h3>
        <ul>
          <li>Your application details will be securely shared with the lender</li>
          <li>The lender may perform additional checks as per policy</li>
          <li>You will be asked to complete mandate & agreement</li>
          <li>Disbursement is done directly by the lender</li>
        </ul>
      </div>

      {/* CONSENT */}
      <div className="lsp-consent">
        <input type="checkbox" />
        <label>
          I consent to share my application details and documents with the
          selected lending partner for loan processing.
        </label>
      </div>

      {/* CTA */}
      <button className="lsp-primary-btn">
        Proceed to Mandate & Agreement
      </button>

      {/* DISCLAIMER */}
      <p className="lsp-disclaimer">
        MendCredit acts as a Loan Service Provider. Final approval, terms,
        and disbursement are at the sole discretion of the lending partner.
      </p>
    </LSPLayout>
  );
}

