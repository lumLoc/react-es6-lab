import { useState } from "react";
import "./LoginForm.css";

function LoginForm({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username || !password) {
      setError("Please enter both username and password.");
      return;
    }

    setLoading(true);
    setError("");

    // Simulate API call
    setTimeout(() => {
      if (username === "admin" && password === "1234") {
        onLogin(username);
      } else {
        setError("Invalid username or password.");
      }
      setLoading(false);
    }, 1200);
  };

  return (
    <div className={`login-container ${error ? "shake" : ""}`}>
      <h2>Login</h2>

      <form onSubmit={handleSubmit} className="login-card">
        <div>
          <input
            type="text"
            placeholder="Username"
            value={username}
            className={`login-input ${error ? "input-error" : ""}`}
            onChange={(e) => setUsername(e.target.value)}
            disabled={loading}
          />
        </div>

        <div>
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            className={`login-input ${error ? "input-error" : ""}`}
            onChange={(e) => setPassword(e.target.value)}
            disabled={loading}
          />
        </div>

        <div className="options-row">
          <label>
            <input
              type="checkbox"
              checked={showPassword}
              onChange={() => setShowPassword(!showPassword)}
              disabled={loading}
            />{" "}
            Show password
          </label>
        </div>

        <button
          type="submit"
          className="login-button"
          disabled={loading}
        >
          {loading ? "Authenticating..." : "Login"}
        </button>
      </form>

      {error && <p className="error-text">{error}</p>}
    </div>
  );
}

export default LoginForm;
