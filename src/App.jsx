import { useState } from 'react'

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// adding loginform & dashboard
import LoginForm from "./LoginForm";
import Dashboard from "./Dashboard";

// import components
import UserList from './UserList.jsx'
import Counter from './Counter.jsx'
import UserAPI from './UserAPI.jsx'

function App() {
  const [count, setCount] = useState(0)

  // login states
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

  const names = ['Alice','Bob','Charlie']
  const doubled = names.map(name => name.length * 2)
  console.log('Doubled lengths:', doubled)

  const person = { name: 'Alice', age: 25 }
  const { name, age } = person
  console.log('Destructured:', name, age)

  const users = ['Alice','Bob','Charlie']

  return (
    <>
      {/* LOGIN AREA */}
      <div>
        {isLoggedIn ? (
          <Dashboard user={currentUser} onLogout={handleLogout} />
        ) : (
          <LoginForm onLogin={handleLogin} />
        )}
      </div>

      <hr />

      <div>
        {isLoggedIn ? <p>Welcome back!</p> : <p>Please log in</p>}
      </div>

      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h1>Vite + React</h1>

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>

        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>

        <hr />

        <h2>User List (Local)</h2>
        <UserList users={users} />

        <hr />

        <h2>Counter Component</h2>
        <Counter />

        <hr />

        <h2>Users from API</h2>
        <UserAPI />
      </div>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
