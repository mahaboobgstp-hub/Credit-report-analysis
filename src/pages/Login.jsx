import "../styles/auth.css";

export default function Login() {
  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Login</h2>
        <p className="auth-subtitle">
          Access your credit dashboard securely.
        </p>

        <input placeholder="Registered Mobile Number" />
        <button className="primary-btn">Send OTP</button>

        <p className="auth-link">New user? Register</p>
      </div>
    </div>
  );
}

