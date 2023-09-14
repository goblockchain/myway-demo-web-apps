import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img
          src={
            "https://goblockchain.io/wp-content/uploads/2023/07/logo-goblockchain.svg"
          }
          style={{ width: "200px" }}
          alt="logo"
        />
        <a
          style={{
            color: "#61dafb",
            fontSize: 16,
            marginTop: 16,
            marginBottom: 16,
            maxWidth: 400,
          }}
          href="https://doc.clickup.com/9004111187/p/h/8caznak-6653/85ada0df2ea13c9"
          target="_blank"
          rel="noopener noreferrer"
        >
          Tutorial: integração com GoRamp em apenas 3 linhas de código
        </a>
        <button
          style={{
            border: "none",
            color: "white",
            backgroundColor: "#282c34",
            padding: "15px 32px",
            textAlign: "center",
            textDecoration: "none",
            display: "inline-block",
            fontSize: "16px",
            margin: "4px 2px",
            cursor: "pointer",
          }}
        >
          GoRamp
        </button>
      </header>
    </div>
  );
}

export default App;
