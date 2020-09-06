import React from "react";
import { MetricItem } from "./MetricItem";

export function Metrics({metrics}) {
  return (
    <>
      <ul>
        {metrics.map((metric, index) => (
          <MetricItem key={index} metric={metric} />
        ))}
      </ul>
    </>
  );
}
