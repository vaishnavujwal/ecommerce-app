
import { useState } from "react";
import { saveUser } from "../utils/auth";
import { useNavigate, Link } from "react-router-dom";
import { FaSignInAlt } from "react-icons/fa";
import "./Signup.css";

const Signup = () => {
  const [user, setUser] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const success = saveUser(user);
    if (!success) {
      setError("🚫 User already exists!");
    } else {
      localStorage.setItem("currentUser", JSON.stringify(user));
      navigate("/shop");
    }
  };

  return (
    <div className="signup-wrapper">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2>WELCOME TO SHOPMART</h2>
        <h4>Create Your Account</h4>
        {error && <p className="error">{error}</p>}
        <input
          type="email"
          placeholder="Enter your email"
          required
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
        <input
          type="password"
          placeholder="Create a password"
          required
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
        <button type="submit">Sign Up</button>


        <div className="login-redirect">
          <p>Already have an account?</p>
          <Link to="/login" className="login-link">
            <FaSignInAlt className="login-icon" /> Login Here
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Signup;
