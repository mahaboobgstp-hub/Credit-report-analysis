import "../styles/auth.css";

export default function VerifyOtp() {
  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Verify OTP</h2>
        <p className="auth-subtitle">
          Enter the OTP sent to your registered mobile number.
        </p>

        <input placeholder="Enter 6-digit OTP" />
        <button className="primary-btn">Verify & Continue</button>

        <p className="auth-link">Resend OTP</p>
      </div>
    </div>
  );
}

