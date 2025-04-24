import { useState } from "react";
import { authenticate } from "../utils/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [creds, setCreds] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const user = authenticate(creds.email, creds.password);
    if (!user) {
      setError("Invalid credentials");
    } else {
      localStorage.setItem("currentUser", JSON.stringify(user));
      navigate("/shop");
    }
  };

  return (
    <form className="auth-form" onSubmit={handleLogin}>
      <h2>Login</h2>
      {error && <p className="error">{error}</p>}
      <input type="email" placeholder="Email" required
        onChange={(e) => setCreds({ ...creds, email: e.target.value })}
      />
      <input type="password" placeholder="Password" required
        onChange={(e) => setCreds({ ...creds, password: e.target.value })}
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
