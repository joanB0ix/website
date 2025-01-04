export interface SectionProps {
  title: string;
  children: React.ReactNode;
}

export function Section(props: SectionProps) {
  return (
    <div className="my-6">
      <h2 className="font-semibold pb-2">{props.title}</h2>
      {props.children}
    </div>
  );
}
