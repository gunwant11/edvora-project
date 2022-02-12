import React from "react";

export function Arrow() {
    return (
    <button
    onClick={() => {console.log("hello"); }}
      style={{
        cursor: "pointer",
        display: "absolute",
        flexDirection: "column",
        justifyContent: "center",
        right: "1%",
      }}
    >
     Right
    </button>
  );
}
