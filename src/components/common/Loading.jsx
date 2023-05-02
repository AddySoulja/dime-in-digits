import React from "react";

const Loading = () => {
  return (
    <div
      style={{
        display: "flex",
        height: "500px",
        width: "500px",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div style={{ fontSize: "32px" }}>Loading...</div>
    </div>
  );
};

export default Loading;
