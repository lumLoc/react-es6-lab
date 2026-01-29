function Dashboard({ user, onLogout }) {
  return (
    <div>
      <h2>Welcome, {user}!</h2>
      <p>You are now logged in.</p>
      <button onClick={onLogout}>Logout</button>
    </div>
  );
}

export default Dashboard;
