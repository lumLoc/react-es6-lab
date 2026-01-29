import { useState } from "react";
import "./LoginForm.css";

function LoginForm({ onLogin }) {
  const [isRegister, setIsRegister] = useState(false);

  const [accounts, setAccounts] = useState([
    { username: "admin", password: "1234" },
  ]);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username || !password) {
      setMessage("Please enter both username and password.");
      return;
    }

    if (isRegister) {
      const exists = accounts.find((acc) => acc.username === username);
      if (exists) {
        setMessage("Username already exists.");
        return;
      }

      setAccounts([...accounts, { username, password }]);
      setMessage("Account created! You can now login.");
      setIsRegister(false);
      setUsername("");
      setPassword("");
    } else {
      const user = accounts.find(
        (acc) => acc.username === username && acc.password === password
      );

      if (user) {
        onLogin(username);
      } else {
        setMessage("Invalid username or password.");
      }
    }
  };

  return (
    <div className="login-page">
      <h1 className="main-title">Welcome to Secure Portal</h1>
      <p className="subtitle">
        {isRegister
          ? "Create your account to get started"
          : "Login to continue to your dashboard"}
      </p>

      <div className="login-card">
        <h2>{isRegister ? "Create Account" : "Login"}</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <label className="show-password">
            <input
              type="checkbox"
              checked={showPassword}
              onChange={() => setShowPassword(!showPassword)}
            />
            Show password
          </label>

          <button type="submit">
            {isRegister ? "Create Account" : "Login"}
          </button>

          {message && <p className="error">{message}</p>}
        </form>

        <p className="switch-mode">
          {isRegister ? "Already have an account?" : "Don't have an account?"}
          <span onClick={() => setMessage("") || setIsRegister(!isRegister)}>
            {isRegister ? " Login" : " Create one"}
          </span>
        </p>
      </div>
    </div>
  );
}

export default LoginForm;
