import { useEffect, useState } from "react";

export default function Dashboard() {
  const [stats, setStats] = useState({
    users: 120,
    projects: 8,
    tasks: 32,
  });

  const [activities, setActivities] = useState([
    "User John registered",
    "Project ReactLab created",
    "New task assigned",
  ]);

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setStats((prev) => ({
        users: prev.users + Math.floor(Math.random() * 2),
        projects: prev.projects,
        tasks: prev.tasks + Math.floor(Math.random() * 3),
      }));

      setActivities((prev) => [
        "New activity logged",
        ...prev.slice(0, 4),
      ]);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="container">
      <h1>Dashboard</h1>
      <p className="subtitle">Overview of system activity</p>

      {/* Stats Cards */}
      <div className="card-grid">
        <StatCard title="Total Users" value={stats.users} />
        <StatCard title="Active Projects" value={stats.projects} />
        <StatCard title="Pending Tasks" value={stats.tasks} />
      </div>

      {/* Activity Section */}
      <section className="activity-section">
        <h2>Recent Activity</h2>
        <ul>
          {activities.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>
    </main>
  );
}

function StatCard({ title, value }) {
  return (
    <div className="card stat-card">
      <h3>{title}</h3>
      <p className="stat-value">{value}</p>
      <span className="status active">Live</span>
    </div>
  );
}
