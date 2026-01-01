import "../styles/auth.css";

export default function Register() {
  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Create Your Account</h2>
        <p className="auth-subtitle">
          Enter your details to fetch your credit score securely.
        </p>

        <form>
          <input placeholder="Full Name" />
          <input placeholder="PAN" />
          <input type="date" />
          <input placeholder="Mobile Number" />
          <input placeholder="Email Address" />
          <select>
            <option>Gender</option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>
          <input placeholder="Pincode" />

          <button className="primary-btn">Send OTP</button>
        </form>
      </div>
    </div>
  );
}

