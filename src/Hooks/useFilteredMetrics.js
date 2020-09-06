import { useState } from "react";

export function useFilteredMetrics() {
    const [filteredMetrics, setFilteredMetrics] = useState([]);
    return { filteredMetrics, setFilteredMetrics };
}