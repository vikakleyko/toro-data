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
  padding: 30px;
`;

const Title = styled.h3`
  padding: 40px 10px 15px 10px;
`;

export const Label = styled.label`
  display: block;
  padding-top: 5px;
  color: #5f5e5e;
  &:hover {
    cursor: pointer;
    color: black;
  }
`;

export function Filters({ tablesFilter, checkTablesFilter, metricsFilter, checkMetricsFilter, metrics, setFilteredMetrics }) {
  let updatedMetrics = [];

  useEffect(() => {
    metrics.forEach((metric) => {
      if (selectedItems(metric)) {
        updatedMetrics.push(metric);
      }
    });
    setFilteredMetrics(updatedMetrics);
  }, [tablesFilter, metricsFilter]);

  const selectedItems = (item) => {
    return (
      tablesFilter.find(table => item.table === table.table && table.checked) &&
      metricsFilter.find(metric => item.metric === metric.metric && metric.checked)
    );
  };

  return (
    <FiltersSection>
      <h2>Filters</h2>
      <Title>Tables</Title>
      {tablesFilter &&
        tablesFilter.map((item, i) => (
          <Label key={i}>
            <input
              type="checkbox"
              checked={item.checked}
              onChange={() => checkTablesFilter(i)}
            />
            {item.table}
          </Label>
        ))}

      <Title>Metrics</Title>
      {metricsFilter &&
        metricsFilter.map((item, i) => (
          <Label key={i}>
            <input
              type="checkbox"
              checked={item.checked}
              onChange={() => checkMetricsFilter(i)}
            />
            {item.metric}
          </Label>
        ))}
    </FiltersSection>
  );
}
