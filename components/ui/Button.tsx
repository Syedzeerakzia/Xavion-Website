"use client";

import Link from "next/link";
import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/cn";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface BaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  bgColor?: string;
  textColor?: string;
  children?: React.ReactNode;
}

type ButtonAsLink = BaseProps &
  HTMLMotionProps<"a"> & {
    href: string;
  };

type ButtonAsButton = BaseProps &
  HTMLMotionProps<"button"> & {
    href?: undefined;
  };

type ButtonProps = ButtonAsLink | ButtonAsButton;

const variants = {
  primary: "bg-blue-600 text-white shadow-md hover:bg-none transition-shadow duration-300",
  secondary: "border",
  ghost: "",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

const MotionLink = motion.create(Link);

export default function Button(props: ButtonProps) {
  const {
    children,
    variant = "primary",
    size = "md",
    href,
    className,
    bgColor,
    textColor,
    ...rest
  } = props;

  const base =
    "relative inline-flex items-center justify-center overflow-hidden rounded-lg font-medium transition-all duration-300 cursor-pointer";

  const classes = cn(base, variants[variant], sizes[size], className);

  // Only apply static bg/text color for non-animated variants
  const style =
    variant !== "secondary" && (bgColor || textColor)
      ? {
        backgroundColor: bgColor,
        color: textColor,
      }
      : undefined;

  const content =
    variant === "secondary" ? (
      <>
        <motion.span
          className="absolute inset-0"
          style={{ backgroundColor: bgColor || "#ffffff" }}
          variants={{ rest: { x: "-100%" }, hover: { x: "0%" } }}
          transition={{ duration: 0.35, ease: "easeInOut" }}
        />
        <motion.span
          className="relative z-10"
          variants={{
            rest: { color: "#ffffff" },
            hover: { color: textColor || "#000000" },
          }}
          transition={{ duration: 0.35, ease: "easeInOut" }}
        >
          {children}
        </motion.span>
      </>
    ) : (
      children
    );

  if (href) {
    return (
      <MotionLink
        href={href}
        className={classes}
        style={style}
        initial="rest"
        whileHover="hover"
        animate="rest"
        {...(rest as HTMLMotionProps<"a">)}
      >
        {content}
      </MotionLink>
    );
  }

  return (
    <motion.button
      className={classes}
      style={style}
      initial="rest"
      animate="rest"
      whileHover="hover"
      whileTap={{ scale: 0.97 }}
      variants={{
        rest: { scale: 1, y: 0 },
        hover: { scale: 1.03, y: -2 },
      }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      {...(rest as HTMLMotionProps<"button">)}
    >
      {content}
    </motion.button>
  );
}