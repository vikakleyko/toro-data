import React, { useEffect } from "react";
import styled from "styled-components";
import { Filters } from "./Components/Filters";
import { useMetrics } from "./Hooks/useMetrics";
import { useFilteredMetrics } from "./Hooks/useFilteredMetrics";
import { MetricsItem } from "./Components/MetricsItem";
import { useTablesFilter } from "./Hooks/useTablesFilter";
import { useMetricsFilter } from "./Hooks/useMetricsFilter";
import axios from "axios";
import "./App.css";

const TableSection = styled.main`
  margin-top: 80px;
  margin-left: 450px;
`;

function App() {
  let metricsList = [];

  const allMetrics = useMetrics(metricsList);

  const updatedMetrics = useFilteredMetrics([]);
  const { filteredMetrics, setFilteredMetrics } = updatedMetrics;

  const filterTable = useTablesFilter();
  const { setTablesFilter } = filterTable;

  const filterMetrics = useMetricsFilter();
  const { setMetricsFilter } = filterMetrics;

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("https://interview.torodata.io/tables");
      result.data.forEach(async (table, index) => {
        const result = await axios(
          `https://interview.torodata.io/metrics/${table.id}`
        );
        result.data.forEach((item, index) => {
          metricsList.push({
            table: table.table,
            column: item.column,
            metric: item.metric,
            value: item.currentValue,
          });
        });
        initCheckedMetrics(metricsList);
      });
     initCheckedTables(result.data);
    };
    fetchData();
  }, []);

  const initCheckedTables = tables => {
    setTablesFilter(
      tables.map((item) => ({
        table: item.table,
        checked: true,
      }))
    );
  };

  const initCheckedMetrics = metrics => {
    const metricsList = Array.from(new Set(metrics.map((item) => item.metric)));
    setMetricsFilter(
      metricsList.map((item) => ({
        metric: item,
        checked: true,
      }))
    );
  };

  return (
    <TableSection>
      <Filters
        {...filterTable}
        {...filterMetrics}
        {...allMetrics}
        setFilteredMetrics={setFilteredMetrics} 
      />
      {filteredMetrics.map((item, index) => (
        <MetricsItem key={index} {...item} />
      ))}
    </TableSection>
  );
}

export default App;
