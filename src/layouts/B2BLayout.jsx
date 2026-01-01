import Sidebar from "../components/b2b/Sidebar";
import "../styles/b2b.css";

export default function B2BLayout({ children }) {
  return (
    <div className="b2b-layout">
      <Sidebar />
      <main className="b2b-content">
        {children}
      </main>
    </div>
  );
}

