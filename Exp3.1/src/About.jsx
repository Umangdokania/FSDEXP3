export default function About() {
    return (
      <main className="container">
        <h1>About This Experiment</h1>
        <p style={styles.text}>
          This experiment demonstrates basic client-side routing in a
          Single Page Application using React Router. Navigation between
          pages occurs without reloading the browser.
        </p>
      </main>
    );
  }
  
  const styles = {
    text: {
      marginTop: "20px",
      fontSize: "1.05rem",
      lineHeight: "1.7",
      color: "#cbd5f5",
      maxWidth: "800px",
    },
  };
  