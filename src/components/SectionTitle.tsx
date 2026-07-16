type SectionTitleProps = {
  id: string;
  title: string;
  description?: string;
};

export function SectionTitle({ id, title, description }: SectionTitleProps) {
  return (
    <div className="section-title">
      <h2 id={id}>{title}</h2>
      {description ? <p>{description}</p> : null}
    </div>
  );
}
