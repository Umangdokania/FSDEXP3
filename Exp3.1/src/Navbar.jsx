import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header style={styles.header}>
      <div style={styles.nav}>
        <h2 style={styles.logo}>ReactLab</h2>
        <nav style={styles.links}>
          <Link to="/" style={styles.link}>Home</Link>
          <Link to="/about" style={styles.link}>About</Link>
          <Link to="/contact" style={styles.link}>Contact</Link>
        </nav>
      </div>
    </header>
  );
}

const styles = {
  header: {
    background: "rgba(255,255,255,0.06)",
    backdropFilter: "blur(12px)",
    borderBottom: "1px solid rgba(255,255,255,0.1)",
  },
  nav: {
    maxWidth: "1100px",
    margin: "auto",
    padding: "18px 20px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
    color: "#38bdf8",
    fontWeight: "700",
    letterSpacing: "0.5px",
  },
  links: {
    display: "flex",
    gap: "28px",
  },
  link: {
    color: "#e5e7eb",
    textDecoration: "none",
    fontSize: "16px",
  },
};
