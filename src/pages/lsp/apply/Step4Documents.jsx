import LSPLayout from "../../../layouts/LSPLayout";
import "../../../styles/lsp.css";

export default function Step4Documents() {
  return (
    <LSPLayout step={3}>
      <h1>Upload Documents</h1>
      <p className="lsp-subtitle">
        Upload required documents to verify your income and bank details.
      </p>

      <div className="lsp-doc-grid">
        {/* BANK STATEMENT */}
        <div className="lsp-doc-card">
          <h3>Bank Statement</h3>
          <p>Last 6 months (PDF)</p>
          <input type="file" />
          <span className="doc-hint">Recommended for faster processing</span>
        </div>

        {/* FORM 26AS */}
        <div className="lsp-doc-card">
          <h3>Form 26AS</h3>
          <p>Latest assessment year</p>
          <input type="file" />
          <span className="doc-hint">Government income record</span>
        </div>

        {/* PROVIDENT FUND */}
        <div className="lsp-doc-card">
          <h3>Provident Fund</h3>
          <p>Passbook / Statement</p>
          <input type="file" />
          <span className="doc-hint">For salaried applicants</span>
        </div>

        {/* ITR */}
        <div className="lsp-doc-card">
          <h3>Income Tax Return</h3>
          <p>Latest ITR (PDF)</p>
          <input type="file" />
          <span className="doc-hint">For self-employed or additional proof</span>
        </div>
      </div>

      <div className="lsp-consent">
        <input type="checkbox" />
        <label>
          I confirm that the documents uploaded are accurate and I consent
          to their use for loan assessment.
        </label>
      </div>

      <button className="lsp-primary-btn">
        Submit Documents & Continue
      </button>

      <p className="lsp-disclaimer">
        Your documents are securely handled and shared only with lending partners
        for loan processing.
      </p>
    </LSPLayout>
  );
}

