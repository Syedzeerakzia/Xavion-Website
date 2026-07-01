import Link from "next/link";

import Card from "@/components/ui/Card";

import {
  IconMail,
  IconPhone,
  IconMapPin,
  IconClock,
  IconBrandLinkedin,
  IconBrandGithub,
  IconBrandWhatsapp,
} from "@tabler/icons-react";

export default function ContactInfo() {
  return (
    <div className="space-y-6">
      <Card>
        <h3 className="text-xl font-semibold">
          Contact Information
        </h3>

        <div className="mt-8 space-y-6">
          <div className="flex items-start gap-4">
            <IconMail className="mt-1 text-primary" />

            <div>
              <p className="font-medium">Email</p>

              <a
                href="mailto:info@xaviontech.com"
                className="text-gray-400 hover:text-primary"
              >
                info@xaviontech.com
              </a>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <IconPhone className="mt-1 text-primary" />

            <div>
              <p className="font-medium">Phone</p>

              <a
                href="tel:+923392000330"
                className="text-gray-400 hover:text-primary"
              >
                +92 339 2000330
              </a>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <IconMapPin className="mt-1 text-primary" />

            <div>
              <p className="font-medium">Location</p>

              <p className="text-gray-400">
                Karachi, Pakistan
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <IconClock className="mt-1 text-primary" />

            <div>
              <p className="font-medium">Response Time</p>

              <p className="text-gray-400">
                Usually within 24 hours
              </p>
            </div>
          </div>
        </div>
      </Card>

      <Card>
        <h3 className="text-xl font-semibold">
          Connect With Us
        </h3>

        <div className="mt-6 flex gap-4">
          <Link
            href="#"
            className="rounded-lg border border-white/10 p-3 transition hover:border-primary hover:text-primary"
          >
            <IconBrandLinkedin size={22} />
          </Link>

          <Link
            href="#"
            className="rounded-lg border border-white/10 p-3 transition hover:border-primary hover:text-primary"
          >
            <IconBrandGithub size={22} />
          </Link>

          <Link
            href="#"
            className="rounded-lg border border-white/10 p-3 transition hover:border-primary hover:text-primary"
          >
            <IconBrandWhatsapp size={22} />
          </Link>
        </div>
      </Card>

      <Card>
        <h3 className="text-xl font-semibold">
          Let's Build Something Great
        </h3>

        <p className="mt-4 text-gray-400">
          Looking to automate your workflows, integrate AI, or build a custom web application? We'd love to discuss your ideas.
        </p>
      </Card>
    </div>
  );
}