import "../../styles/home.css";

export default function Services() {
  const services = [
    {
      title: "Credit Report Correction",
      desc: "Correction of wrong entries, duplicate loans, and inaccurate payment history."
    },
    {
      title: "Written-Off & Suit-Filed Resolution",
      desc: "Handling high-risk accounts through proper bank and bureau procedures."
    },
    {
      title: "Settlement Impact Review",
      desc: "Assessment and guidance for improving score after one-time settlements."
    },
    {
      title: "Bank Grievance & Escalation",
      desc: "Raising complaints with banks, NBFCs, and regulators when required."
    },
    {
      title: "Business & MSME Credit Support",
      desc: "Credit report analysis and issue handling for businesses and proprietors."
    }
  ];

  return (
    <section className="services">
      <h2>Our Services</h2>
      <p className="subtitle">
        Focused solutions for complex credit and banking issues.
      </p>

      <div className="services-grid">
        {services.map((item, index) => (
          <div key={index} className="service-card">
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

