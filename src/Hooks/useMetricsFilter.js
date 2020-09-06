import { useState } from "react";

export function useMetricsFilter() {
  const [metricsFilter, setMetricsFilter] = useState();

  const checkMetricsFilter = (index) => {
    setMetricsFilter(
      metricsFilter.map((item, i) => {
        const newItem = { ...item };
        if (i === index) {
          newItem.checked = !newItem.checked;
        }
        return newItem;
      })
    );
  };

  return { metricsFilter, setMetricsFilter, checkMetricsFilter };
}