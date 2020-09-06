import { useState } from "react";

export function useMetrics(metricItems) {
    const [metrics, setMetrics] = useState(metricItems || []);
    return { metrics, setMetrics };
}