import { useState } from "react";

export function useFilteredMetrics(metricItems) {
    const [filteredMetrics, setFilteredMetrics] = useState([]);
    return { filteredMetrics, setFilteredMetrics };
}