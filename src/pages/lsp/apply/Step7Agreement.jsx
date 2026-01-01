import LSPLayout from "../../../layouts/LSPLayout";
import "../../../styles/lsp.css";

export default function Step7Agreement() {
  return (
    <LSPLayout step={6}>
      <h1>Mandate & Loan Agreement</h1>
      <p className="lsp-subtitle">
        Set up your repayment mandate and review the loan agreement.
      </p>

      {/* eNACH SECTION */}
      <div className="lsp-section-card">
        <h3>eNACH Mandate Setup</h3>
        <p className="section-desc">
          The eNACH mandate authorises automatic EMI deductions from your bank
          account as per the loan schedule.
        </p>

        <div className="nach-details">
          <div>
            <span>Bank Account</span>
            <strong>XXXXXXXX4321</strong>
          </div>
          <div>
            <span>EMI Amount</span>
            <strong>₹10,200</strong>
          </div>
          <div>
            <span>Debit Frequency</span>
            <strong>Monthly</strong>
          </div>
        </div>

        <button className="lsp-secondary-btn">
          Set Up eNACH Mandate
        </button>
      </div>

      {/* AGREEMENT SECTION */}
      <div className="lsp-section-card">
        <h3>Loan Agreement</h3>
        <p className="section-desc">
          Please review the loan agreement issued by the lending partner.
        </p>

        <div className="agreement-box">
          <p>
            This agreement outlines the loan amount, tenure, interest rate,
            repayment schedule, charges, and borrower obligations.
          </p>
          <p className="agreement-note">
            Full agreement document will be available for download and e-sign.
          </p>
        </div>

        <div className="lsp-consent">
          <input type="checkbox" />
          <label>
            I have read and agree to the loan agreement and repayment terms.
          </label>
        </div>
      </div>

      {/* CTA */}
      <button className="lsp-primary-btn">
        Complete Mandate & Agreement
      </button>

      {/* DISCLAIMER */}
      <p className="lsp-disclaimer">
        Mandate registration and agreement execution are mandatory for loan
        disbursement. The lender may reject the application if these steps are
        incomplete.
      </p>
    </LSPLayout>
  );
}

