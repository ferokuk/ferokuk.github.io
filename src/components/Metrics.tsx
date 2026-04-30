import type { Metric } from "../data/cv";
import { MetricCard } from "./MetricCard";

type MetricsProps = {
  metrics: Metric[];
};

export function Metrics({ metrics }: MetricsProps) {
  return (
    <section className="metrics" aria-labelledby="metrics-title">
      <h2 className="sr-only" id="metrics-title">
        Ключевые результаты
      </h2>
      <div className="metrics-grid">
        {metrics.map((metric) => (
          <MetricCard metric={metric} key={`${metric.value}-${metric.label}`} />
        ))}
      </div>
    </section>
  );
}
