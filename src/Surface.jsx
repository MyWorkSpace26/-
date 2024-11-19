import React from "react";
import Plot from "react-plotly.js";

const Surface = ({ points }) => {
  // Assuming points is a 2D array where each sub-array represents a row of z-values
  const x = Array.from({ length: points[0].length }, (_, i) => i + 1);
  const y = Array.from({ length: points.length }, (_, i) => i + 1);
  const z = points;

  return (
    <Plot
      data={[
        {
          type: "surface",
          x: x,
          y: y,
          z: z,
          colorscale: [
            [0, "rgb(0, 0, 255)"],
            [0.2, "rgb(255, 165, 0)"],
            [0.4, "rgb(255, 255, 0)"],
            [0.6, "rgb(0, 128, 0)"],
            [0.8, "rgb(128, 0, 128)"],
            [1, "rgb(255, 0, 0)"],
          ],
          opacity: 0.9,
          showscale: true,
        },
      ]}
      layout={{
        scene: {
          xaxis: { title: "Диаметр" },
          yaxis: { title: "Rz" },
          zaxis: { title: "Высота" },
        },
        width: 800,
        height: 800,
        margin: { l: 0, r: 0, b: 0, t: 0 },
      }}
      config={{ responsive: true }}
    />
  );
};

export default Surface;
