import { useState } from "react";
import "./App.css";

// components
import LoginForm from "./LoginForm";
import Dashboard from "./Dashboard";
import UserList from "./UserList";
import Counter from "./Counter";
import UserAPI from "./UserAPI";

function App() {
  const [count, setCount] = useState(0);

  // login states
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState("");

  const handleLogin = (username) => {
    setIsLoggedIn(true);
    setCurrentUser(username);
  };

  const handleLogout = () => {
    const confirmLogout = window.confirm("Are you sure you want to logout?");
    if (confirmLogout) {
      setIsLoggedIn(false);
      setCurrentUser("");
    }
  };

  const users = ["Alice", "Bob", "Charlie"];

  return (
  <div className="app-container">
    <h1 className="app-title">Secure Login Dashboard</h1>

    {/* LOGIN / DASHBOARD ONLY */}
    <div className="section">
      {isLoggedIn ? (
        <Dashboard user={currentUser} onLogout={handleLogout} />
      ) : (
        <LoginForm onLogin={handleLogin} />
      )}
    </div>
  </div>
);

}

export default App;
