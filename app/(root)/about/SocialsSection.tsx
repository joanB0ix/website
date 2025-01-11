import { Section } from "@/components/Section";
import { Social } from "@/config/socialList";
import Link from "next/link";

export interface SocialsSectionProps {
  socialList: Social[];
}

export default function SocialsSection({ socialList }: SocialsSectionProps) {
  return (
    <Section title="My Socials">
      <ul className="list-disc pl-6">
        {socialList.map((social) => {
          return (
            <li className="underline" key={social.name}>
              <Link href={social.url}>{social.name}</Link>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
