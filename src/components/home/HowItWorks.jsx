import "../../styles/home.css";

export default function HowItWorks() {
  const steps = [
    {
      step: "01",
      title: "Credit Report Review",
      desc: "We analyze your credit report to identify errors, violations, and harmful entries."
    },
    {
      step: "02",
      title: "Issue Classification",
      desc: "Each issue is mapped to banking rules, RBI norms, and bureau guidelines."
    },
    {
      step: "03",
      title: "Bank & Bureau Action",
      desc: "We raise disputes, complaints, and escalations with proper documentation."
    },
    {
      step: "04",
      title: "Resolution & Tracking",
      desc: "We track responses until correction, closure, or official clarification."
    }
  ];

  return (
    <section className="how-it-works">
      <h2>How MendCredit Works</h2>
      <p className="subtitle">
        A structured, compliant process designed to fix credit issues — not shortcuts.
      </p>

      <div className="steps-grid">
        {steps.map((item, index) => (
          <div key={index} className="step-card">
            <div className="step-number">{item.step}</div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

