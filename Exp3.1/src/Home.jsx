export default function Home() {
    return (
      <main className="container">
        <section style={styles.hero}>
          <h1 style={styles.title}>Single Page Application</h1>
          <p style={styles.subtitle}>
            Client-side routing using <b>React Router</b> in a modern
            <b> Vite-powered</b> React application.
          </p>
  
          <div style={styles.cards}>
            <Feature title="⚡ Fast" text="No page reloads" />
            <Feature title="🧠 Modern" text="SPA Architecture" />
            <Feature title="🔗 Efficient" text="React Router DOM" />
          </div>
        </section>
      </main>
    );
  }
  
  function Feature({ title, text }) {
    return (
      <div style={styles.card}>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    );
  }
  
  const styles = {
    hero: {
      textAlign: "center",
      marginTop: "60px",
    },
    title: {
      fontSize: "3rem",
      fontWeight: "800",
      marginBottom: "16px",
    },
    subtitle: {
      fontSize: "1.1rem",
      color: "#cbd5f5",
      maxWidth: "650px",
      margin: "0 auto 50px",
      lineHeight: "1.6",
    },
    cards: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
      gap: "24px",
      marginTop: "30px",
    },
    card: {
      padding: "28px",
      borderRadius: "18px",
      background: "rgba(255,255,255,0.08)",
      backdropFilter: "blur(10px)",
      boxShadow: "0 20px 40px rgba(0,0,0,0.4)",
      transition: "transform 0.3s ease",
    },
  };
  