import "../styles/lsp.css";
import ProgressStepper from "../components/lsp/ProgressStepper";

export default function LSPLayout({ step, children }) {
  return (
    <div className="lsp-container">
      <ProgressStepper currentStep={step} />
      <div className="lsp-content">{children}</div>
    </div>
  );
}

