import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// import components
import UserList from './UserList.jsx'
import Counter from './Counter.jsx'

function App() {
  const [count, setCount] = useState(0)

  const names = ['Alice','Bob','Charlie']
  const doubled = names.map(name => name.length * 2)
  console.log('Doubled lengths:', doubled)

  const person = { name: 'Alice', age: 25 }
  const { name, age } = person
  console.log('Destructured:', name, age)

  const users = ['Alice','Bob','Charlie']

  return (
    <>
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

        <h2>User List</h2>
        <UserList users={users} />

        <hr />

        <h2>Counter Component</h2>
        <Counter />
      </div>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
