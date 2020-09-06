import React from "react";
import styled from "styled-components";
import { MetricsItem } from "./MetricsItem";

const MetricsSection = styled.section`
  padding: 30px;
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.span`
  flex-basis: 300px;
`;

const List = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 15px 20px;
  margin: 10px 0;
`;

export function Metrics({ filteredMetrics }) {
  return (
    <MetricsSection>
      <List>
        <Title>Table</Title>
        <Title>Column</Title>
        <Title>Metric</Title>
        <Title>Value</Title>
      </List>
      {filteredMetrics.map((item, index) => (
        <MetricsItem key={index} {...item} />
      ))}
    </MetricsSection>
  );
}
