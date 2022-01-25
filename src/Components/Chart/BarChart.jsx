import * as React from "react";
import { VictoryAxis } from "victory";
import { VictoryChart } from "victory";
import { VictoryBar } from "victory";

export default function BarChart({ radius, width, padding, data, showLabel }) {
  return (
    <div style={{ justifyContent: "center", textAlign: "center" }}>
      <VictoryChart width={350}>
        <VictoryAxis />
        <VictoryBar
          domainPadding={padding}
          cornerRadius={radius}
          barWidth={width}
          style={{
            data: {
              fill: "#ff6018",
            },
            labels: { fill: "#706e6b", fontSize: "40px" },
          }}
          data={data}
          labels={showLabel === true ? ({ datum }) => datum.y : ""}
        />
      </VictoryChart>
    </div>
  );
}
