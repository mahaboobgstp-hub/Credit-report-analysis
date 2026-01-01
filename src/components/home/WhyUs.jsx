import "../../styles/home.css";

export default function WhyUs() {
  const reasons = [
    {
      title: "Compliance-First Approach",
      desc: "Every action follows RBI guidelines, banking norms, and bureau procedures."
    },
    {
      title: "Structured & Transparent Process",
      desc: "Clear steps, documented communication, and full visibility for clients."
    },
    {
      title: "No False Promises",
      desc: "We do not guarantee outcomes — we guarantee process integrity."
    },
    {
      title: "Real-World Banking Experience",
      desc: "Built on practical cases involving banks, NBFCs, and credit bureaus."
    },
    {
      title: "Borrower Protection Mindset",
      desc: "Focused on fairness, accuracy, and lawful correction of records."
    }
  ];

  return (
    <section className="why-us">
      <h2>Why Choose MendCredit</h2>
      <p className="subtitle">
        Built for borrowers who want legitimate, long-term credit health.
      </p>

      <div className="why-grid">
        {reasons.map((item, index) => (
          <div key={index} className="why-card">
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

