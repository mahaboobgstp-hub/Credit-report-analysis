import "../../styles/home.css";

export default function Footer() {
  return (
    <footer className="footer">
      <p>
        © {new Date().getFullYear()} MendCredit. All rights reserved.
      </p>
      <p className="footer-note">
        MendCredit provides credit advisory and grievance support services.
        We do not guarantee credit score improvement.
      </p>
    </footer>
  );
}

