import "../../styles/lsp.css";

const steps = [
  "KYC",
  "Credit Check",
  "Employment",
  "Documents",
  "Result",
  "Handoff",
  "Agreement",
  "Status"
];

export default function ProgressStepper({ currentStep }) {
  return (
    <div className="stepper">
      {steps.map((label, index) => (
        <div
          key={index}
          className={`step ${index <= currentStep ? "active" : ""}`}
        >
          <span>{index + 1}</span>
          <p>{label}</p>
        </div>
      ))}
    </div>
  );
}

