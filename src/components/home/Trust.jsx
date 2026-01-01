import "../../styles/home.css";

export default function Trust() {
  const trustPoints = [
    {
      title: "RBI-Aligned Processes",
      desc: "Our grievance handling follows RBI-defined escalation and complaint frameworks."
    },
    {
      title: "Data Privacy & Confidentiality",
      desc: "Client data is handled securely and never shared without consent."
    },
    {
      title: "Ethical & Lawful Practices",
      desc: "We do not engage in credit manipulation or artificial score boosting."
    },
    {
      title: "Documented Communication",
      desc: "Every interaction with banks and bureaus is traceable and recorded."
    }
  ];

  return (
    <section className="trust">
      <h2>Trust, Compliance & Ethics</h2>
      <p className="subtitle">
        Credit correction must be lawful, ethical, and transparent.
      </p>

      <div className="trust-grid">
        {trustPoints.map((item, index) => (
          <div key={index} className="trust-card">
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

