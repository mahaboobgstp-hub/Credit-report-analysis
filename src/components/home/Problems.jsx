
import "../../styles/home.css";

export default function Problems() {
  const problems = [
    {
      title: "Wrong Entries in Credit Report",
      desc: "Incorrect DPDs, duplicate loans, or outdated balances affecting your score."
    },
    {
      title: "Written-Off or Suit-Filed Accounts",
      desc: "Loans marked as written-off or suit-filed even after payment or settlement."
    },
    {
      title: "Closed Loans Still Showing Active",
      desc: "Fully paid loans not closed by banks, reducing your eligibility."
    },
    {
      title: "Settlement Impact on Credit Score",
      desc: "One-time settlements permanently damaging creditworthiness."
    },
    {
      title: "Payments Collected by Agents Not Reflected",
      desc: "Branch or agent-collected EMIs not updated in bureau records."
    },
    {
      title: "No Legal or Banking Guidance",
      desc: "Borrowers left helpless without knowing RBI or bank grievance routes."
    }
  ];

  return (
    <section className="problems">
      <h2>Common Credit Problems We Fix</h2>
      <p className="subtitle">
        These issues silently block loans, credit cards, and business funding.
      </p>

      <div className="problem-grid">
        {problems.map((item, index) => (
          <div key={index} className="problem-card">
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
