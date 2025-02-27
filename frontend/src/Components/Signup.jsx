import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./CSS/Signup.css"; 

function Signup() {
  const navigate = useNavigate();
  const [firstName, setFN] = useState("");
  const [lastName, setLN] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");
  const [phoneNumber, setPN] = useState(0);

  const handleSignup = async (event) => {
    event.preventDefault();
    const req = await axios.post("https://assignment-tracker-51ry.onrender.com/signup", {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      phoneNumber: phoneNumber,
    });
    const message = req.data.message;
    const isSignup = req.data.isSignUp;
    if (isSignup) {
      alert(message);
      navigate("/login");
    } else {
      alert(message);
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-form-container">
        <h2 className="signup-title">Signup</h2>
        <form className="signup-form" onSubmit={handleSignup}>
          <label className="signup-label" htmlFor="firstName">First Name:</label>
          <input
            className="signup-input"
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFN(e.target.value)}
            required
          />

          <label className="signup-label" htmlFor="lastName">Last Name:</label>
          <input
            className="signup-input"
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => setLN(e.target.value)}
            required
          />

          <label className="signup-label" htmlFor="email">Email:</label>
          <input
            className="signup-input"
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label className="signup-label" htmlFor="password">Password:</label>
          <input
            className="signup-input"
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPass(e.target.value)}
            required
          />

          <label className="signup-label" htmlFor="phoneNumber">Phone Number:</label>
          <input
            className="signup-input"
            type="number"
            id="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPN(parseInt(e.target.value))}
            required
          />

          <button className="signup-button" type="submit">Sign Up</button>
        </form>
        <p className="signup-login-text">
          Already have an account? <Link className="signup-login-link" to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
