import { Section } from "../../components/Section";

export interface WhoamiSectionProps {
  content: string;
}

export default function WhoamiSection({ content }: WhoamiSectionProps) {
  return (
    <Section title="Who am I?">
      <p>{content}</p>
    </Section>
  );
}
