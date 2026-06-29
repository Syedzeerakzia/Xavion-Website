import Image from "next/image";

import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";

import { team } from "@/data/team";

import { IconBrandLinkedin } from "@tabler/icons-react";

export default function TeamSection() {
  return (
    <Section>
      <Container>
        <SectionHeading
          centered
          title="Meet Our Team"
          subtitle="Experienced professionals passionate about automation and innovation."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {team.map((member) => (
            <Card
              key={member.id}
              className="overflow-hidden p-0"
            >
              <div className="relative aspect-square">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold">
                  {member.name}
                </h3>

                <p className="mt-1 text-primary">
                  {member.role}
                </p>

                <p className="mt-4 text-sm text-gray-400">
                  {member.bio}
                </p>

                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 text-primary hover:underline"
                >
                  <IconBrandLinkedin size={18} />

                  LinkedIn
                </a>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}