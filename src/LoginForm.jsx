import { useState } from "react";
import "./LoginForm.css";

function LoginForm({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username === "admin" && password === "1234") {
      setError("");
      onLogin(username);
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>

      <form onSubmit={handleSubmit} className="login-card">
        <div>
          <input
            type="text"
            placeholder="Username"
            value={username}
            className={`login-input ${error ? "input-error" : ""}`}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div>
          <input
            type="password"
            placeholder="Password"
            value={password}
            className={`login-input ${error ? "input-error" : ""}`}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit" className="login-button">
          Login
        </button>
      </form>

      {error && <p className="error-text">{error}</p>}
    </div>
  );
}

export default LoginForm;
