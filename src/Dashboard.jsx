function Dashboard({ user, onLogout }) {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>🎉 Welcome, {user}!</h1>
      <p>You are now inside the Secure Dashboard.</p>
      <button onClick={onLogout}>Logout</button>
    </div>
  );
}

export default Dashboard;
