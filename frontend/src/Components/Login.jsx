
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import './CSS/Login.css';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (event) => {
    event.preventDefault();
    var req = await axios.post("https://assignment-tracker-51ry.onrender.com/login", {
      email,
      password,
    });
    var isLoginSuccessful = req.data.isLoggedIn;
    if (isLoginSuccessful) {
      alert(req.data.message);
      navigate("/");
    } else {
      alert(req.data.message);
    }
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      <form className="login-form" onSubmit={handleLogin}>
        <input
          type="email"
          id="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          id="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Login</button>
      </form>
      <p>
        Create an account? <Link to="/signup">Signup</Link>
      </p>
    </div>
  );
}

export default Login;
