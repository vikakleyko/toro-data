import React, { useEffect } from "react";
import styled from "styled-components";

const FiltersSection = styled.section`
  position: fixed;
  display: flex;
  flex-direction: column;
  left: 0;
  width: 380px;
  min-width: 380px;
  height: 100%;
  background: #fff;
  box-shadow: 3px 4px 5px rgba(0, 0, 0, 0.25);
  padding: 20px;
`;

export function Filters({ tablesFilter, checkTablesFilter, metricsFilter, checkMetricsFilter, metrics, setMetrics, setFilteredMetrics }) {
  let updatedMetrics = [];
  
  useEffect(() => {
    metrics.forEach((metric) => {
      if (selectedItems(metric)) {
        updatedMetrics.push(metric);
      }
    });
    setFilteredMetrics(updatedMetrics);
  }, [tablesFilter, metricsFilter]);

  const selectedItems = item => {
    return tablesFilter.find((table) => item.table === table.table && table.checked) &&
           metricsFilter.find((metric) => item.metric === metric.metric && metric.checked)};

  return (
    <FiltersSection>
      <h3>Tables</h3>
      <div>
        {tablesFilter &&
          tablesFilter.map((item, i) => (
            <label key={i}>
              <input
                type="checkbox"
                checked={item.checked}
                onChange={() => checkTablesFilter(i)}
              />
              {item.table}
            </label>
          ))}
      </div>

      <h3>Metrics</h3>
      <div>
        {metricsFilter &&
          metricsFilter.map((item, i) => (
            <label key={i}>
              <input
                type="checkbox"
                checked={item.checked}
                onChange={() => checkMetricsFilter(i)}
              />
              {item.metric}
            </label>
          ))}
      </div>
    </FiltersSection>
  );
}
