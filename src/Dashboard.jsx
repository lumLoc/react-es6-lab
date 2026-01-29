import "./Dashboard.css";

function Dashboard({ user, onLogout }) {
  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h2>SkyLine Analytics</h2>
        <div className="dashboard-user">
          <span>Welcome, {user}</span>
          <button className="logout-button" onClick={onLogout}>
            Logout
          </button>
        </div>
      </div>

      <div className="dashboard-content">
        <h3>Dashboard</h3>
        <p>You are now logged in to the system.</p>

        <div className="dashboard-cards">
          <div className="dashboard-card">📊 Analytics Overview</div>
          <div className="dashboard-card">👥 User Management</div>
          <div className="dashboard-card">⚙️ Settings</div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
