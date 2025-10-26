import React, { useState } from "react";

function Toggle() {
  const [display, setDisplay] = useState(true);

  return (
    <div
      style={{
        background: display ? "white" : "black",
        height: "100vh",
        width: "100vw",
        color: display ? "black" : "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        margin: 0,
        padding: 0,
        overflow: "hidden",
      }}
    >
      {display ? <h1>Dear User</h1> : <h1>Background is now black</h1>}
      <button onClick={() => setDisplay(!display)}>Toggle</button>
    </div>
  );
}

export default Toggle;
