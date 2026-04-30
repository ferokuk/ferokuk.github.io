import type { Metric } from "../data/cv";

type MetricCardProps = {
  metric: Metric;
};

export function MetricCard({ metric }: MetricCardProps) {
  return (
    <article className="metric-card" aria-label={`${metric.value}: ${metric.label}`}>
      <p className="metric-card__value">{metric.value}</p>
      <h3>{metric.label}</h3>
      <p>{metric.note}</p>
    </article>
  );
}
