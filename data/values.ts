import {
  IconBulb,
  IconShieldCheck,
  IconTargetArrow,
  IconUsers,
} from "@tabler/icons-react";

import { Value } from "../types/value";

export const values: Value[] = [
  {
    id: 1,
    title: "Innovation",
    description:
      "We embrace modern technologies to build future-ready automation and software solutions.",
    icon: IconBulb,
  },
  {
    id: 2,
    title: "Reliability",
    description:
      "Every solution is engineered for stability, scalability, and long-term success.",
    icon: IconShieldCheck,
  },
  {
    id: 3,
    title: "Results Driven",
    description:
      "We focus on measurable outcomes that help businesses grow faster and smarter.",
    icon: IconTargetArrow,
  },
  {
    id: 4,
    title: "Transparency",
    description:
      "Open communication and honest collaboration are the foundation of every partnership.",
    icon: IconUsers,
  },
];