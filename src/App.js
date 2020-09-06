import React, { useEffect } from "react";
import styled from "styled-components";
import { Styles } from "./Styles/Styles";
import { Filters } from "./Components/Filters";
import { NavBar } from "./Components/NavBar";
import { Metrics } from "./Components/Metrics";
import { useMetrics } from "./Hooks/useMetrics";
import { useFilteredMetrics } from "./Hooks/useFilteredMetrics";
import { useTablesFilter } from "./Hooks/useTablesFilter";
import { useMetricsFilter } from "./Hooks/useMetricsFilter";
import axios from "axios";
import "./App.css";

const Wrapper = styled.main`
  margin-top: 80px;
  margin-left: 420px;
`;

function App() {
  let metricsList = [];

  const filterTable = useTablesFilter();
  const { setTablesFilter } = filterTable;

  const filterMetrics = useMetricsFilter();
  const { setMetricsFilter } = filterMetrics;

  const metrics = useMetrics(metricsList);

  const updatedMetrics = useFilteredMetrics();
  const { filteredMetrics, setFilteredMetrics } = updatedMetrics;

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("https://interview.torodata.io/tables");
      result.data.forEach(async (table, index) => {
        const result = await axios(`https://interview.torodata.io/metrics/${table.id}`);
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

  const initCheckedTables = (tables) => {
    setTablesFilter(
      tables.map((item) => ({
        table: item.table,
        checked: true,
      }))
    );
  };

  const initCheckedMetrics = (metrics) => {
    const metricsList = Array.from(new Set(metrics.map((item) => item.metric)));
    setMetricsFilter(
      metricsList.map((item) => ({
        metric: item,
        checked: true,
      }))
    );
  };

  return (
    <Wrapper>
      <NavBar />
      <Styles />
      <Filters
        {...filterTable}
        {...filterMetrics}
        {...metrics}
        setFilteredMetrics={setFilteredMetrics}
      />
      <Metrics filteredMetrics={filteredMetrics} />
    </Wrapper>
  );
}

export default App;
