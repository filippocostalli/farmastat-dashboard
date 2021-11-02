import React from "react";
import logo from "./logo.png";

const App = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height:
          "100vh" /* L’unità vh è pari all’1% dell’altezza della viewport (fnestra browser) */,
        fontFamily: "roboto",
      }}
    >
      <img src={logo} alt="Farmastat logo" />
      <h1
        style={{
          color: "#6ec177",
          margin: 0,
        }}
      >
        Farmastat Dashboard, Come soon
      </h1>
      <p>What's upp, coming soon</p>
    </div>
  );
};

export default App;
