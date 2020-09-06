import React from "react";
import styled from "styled-components";

export function MetricsItem({ table, column, metric, value }) {
  return (
    <ul>
      <span>{table}</span>
      <span>{column}</span>
      <span>{metric}</span>
      <span>{value}</span>
    </ul>
  );
}
