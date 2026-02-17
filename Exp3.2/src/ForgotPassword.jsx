import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const resetPassword = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user && user.email === email) {
      alert("Password reset link sent to email (simulated)");
      navigate("/");
    } else {
      alert("Email not found");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Forgot Password</h2>
        <input placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)} />
        <button onClick={resetPassword}>Reset Password</button>
      </div>
    </div>
  );
}
