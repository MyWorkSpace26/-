import React from "react";
import Surface from "./Surface";
import data from "./data.json";

const App = () => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        padding: "20px",
        backgroundColor: "#f4f4f9",
      }}
    >
      {data.surfaces.map((surfaceData, index) => (
        <Surface key={index} points={surfaceData.surface} />
      ))}
    </div>
  );
};

export default App;
