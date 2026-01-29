import { useState } from "react";
import LoginForm from "./LoginForm";
import Dashboard from "./Dashboard";
import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState("");

  const handleLogin = (username) => {
    setIsLoggedIn(true);
    setCurrentUser(username);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentUser("");
  };

  return (
    <div className="app-container">
      {isLoggedIn ? (
        <Dashboard user={currentUser} onLogout={handleLogout} />
      ) : (
        <LoginForm onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;
