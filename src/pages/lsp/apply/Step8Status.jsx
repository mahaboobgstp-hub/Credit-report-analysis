import LSPLayout from "../../../layouts/LSPLayout";
import "../../../styles/lsp.css";

export default function Step8Status() {
  return (
    <LSPLayout step={7}>
      <h1>Loan Application Status</h1>
      <p className="lsp-subtitle">
        Track the current status of your loan application.
      </p>

      {/* STATUS CARD */}
      <div className="lsp-status-card success">
        <h2>Disbursement In Progress</h2>
        <p className="status-desc">
          Your loan has been approved by the lending partner and is currently
          being processed for disbursement.
        </p>
      </div>

      {/* STATUS DETAILS */}
      <div className="lsp-status-details">
        <div>
          <span>Application ID</span>
          <strong>MC-PL-10234</strong>
        </div>
        <div>
          <span>Lending Partner</span>
          <strong>ABC Finance Pvt. Ltd.</strong>
        </div>
        <div>
          <span>Approved Amount</span>
          <strong>₹2,00,000</strong>
        </div>
        <div>
          <span>Expected Disbursement</span>
          <strong>Within 24–48 hours</strong>
        </div>
      </div>

      {/* NEXT STEPS */}
      <div className="lsp-info-card">
        <h3>What happens next?</h3>
        <ul>
          <li>Loan amount will be credited directly to your bank account</li>
          <li>You will receive confirmation via SMS and email</li>
          <li>EMIs will start as per the agreed schedule</li>
        </ul>
      </div>

      {/* SUPPORT */}
      <div className="lsp-support-card">
        <h3>Need Help?</h3>
        <p>
          For any queries regarding disbursement or repayment,
          please contact our support team.
        </p>
        <p className="support-meta">
          Email: support@mendcredit.com · Phone: 1800-XXX-XXX
        </p>
      </div>

      {/* DISCLAIMER */}
      <p className="lsp-disclaimer">
        Disbursement timelines are indicative and may vary based on
        lender processing and banking hours.
      </p>
    </LSPLayout>
  );
}

