import Link from "next/link";
import { Section } from "../../components/Section";

export default function SocialsSection() {
  return (
    <Section title="My Socials">
      <ul className="list-disc pl-6">
        <li className="underline">
          <Link href="https://github.com/joanB0ix">GitHub</Link>
        </li>
        <li className="underline">
          <Link href="https://x.com/JoanBoixAv">X (Formerly twitter)</Link>
        </li>
        <li className="underline">
          <Link href="https://www.linkedin.com/in/joanboixavalos/">
            LinkedIn
          </Link>
        </li>
      </ul>
    </Section>
  );
}
