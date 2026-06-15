import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "solid" | "outline" | "gold" | "light";

const cls: Record<Variant, string> = {
  solid: "btn btn-solid",
  outline: "btn",
  gold: "btn btn-gold",
  light: "btn btn-light",
};

export default function CTAButton({
  children,
  href,
  variant = "outline",
  block = false,
  external = false,
  onClick,
  type = "button",
  ariaLabel,
}: {
  children: ReactNode;
  href?: string;
  variant?: Variant;
  block?: boolean;
  external?: boolean;
  onClick?: () => void;
  type?: "button" | "submit";
  ariaLabel?: string;
}) {
  const className = `${cls[variant]}${block ? " btn-block" : ""}`;

  if (href) {
    if (external) {
      return (
        <a
          className={className}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={ariaLabel}
        >
          {children}
        </a>
      );
    }
    return (
      <Link className={className} href={href} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }

  return (
    <button className={className} type={type} onClick={onClick} aria-label={ariaLabel}>
      {children}
    </button>
  );
}
