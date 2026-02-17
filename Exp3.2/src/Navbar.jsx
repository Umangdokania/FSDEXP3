import { Link, useNavigate } from "react-router-dom";

export default function Navbar({ setAuth }) {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <h3>AuthSPA</h3>
      <div>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/profile">Profile</Link>
        <button onClick={() => {
          setAuth(false);
          navigate("/");
        }}>Logout</button>
      </div>
    </nav>
  );
}
