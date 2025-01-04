import { JSX } from "react";

export interface SectionProps {
  title: string;
  content: JSX.Element;
}

export function Section(props: SectionProps) {
  return (
    <div className="my-6">
      <h2 className="font-semibold pb-2">{props.title}</h2>
      <div>{props.content}</div>
    </div>
  );
}
