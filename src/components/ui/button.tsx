import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";
type Size = "md" | "lg";

const base =
  "group inline-flex items-center justify-center gap-2 rounded-full font-display font-semibold transition-all duration-300 ease-[var(--ease-produce)] focus-visible:outline-2 focus-visible:outline-leaf disabled:opacity-50 disabled:pointer-events-none";

const variants: Record<Variant, string> = {
  primary:
    "shadow-forest-soft bg-forest text-cream hover:bg-soil hover:shadow-none active:bg-soil",
  secondary:
    "bg-transparent text-forest border-2 border-forest hover:bg-forest hover:text-cream",
  ghost: "bg-transparent text-forest px-0 hover:text-leaf",
};

const sizes: Record<Size, string> = {
  md: "px-5 py-3 text-[15px]",
  lg: "px-7 py-4 text-base",
};

interface CommonProps {
  variant?: Variant;
  size?: Size;
  showArrow?: boolean;
  className?: string;
  children: React.ReactNode;
}

interface ButtonAsLink extends CommonProps {
  href: string;
  external?: boolean;
  onClick?: () => void;
}

interface ButtonAsButton extends CommonProps {
  href?: undefined;
  type?: "button" | "submit" | "reset";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  "aria-label"?: string;
}

function arrowFor() {
  return (
    <ArrowRight
      className="h-4 w-4 shrink-0 transition-transform duration-300 ease-[var(--ease-produce)] group-hover:translate-x-1"
      aria-hidden="true"
    />
  );
}

export function Button(props: ButtonAsLink | ButtonAsButton) {
  const {
    variant = "primary",
    size = "md",
    showArrow = true,
    className,
    children,
  } = props;
  const classes = cn(base, variants[variant], variant !== "ghost" && sizes[size], className);

  if ("href" in props && props.href) {
    const { href, external, onClick } = props;
    if (external) {
      return (
        <a href={href} target="_blank" rel="noreferrer" className={classes} onClick={onClick}>
          {children}
          {showArrow && arrowFor()}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} onClick={onClick}>
        {children}
        {showArrow && arrowFor()}
      </Link>
    );
  }

  const { type = "button", onClick, disabled } = props as ButtonAsButton;
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      aria-label={(props as ButtonAsButton)["aria-label"]}
      className={classes}
    >
      {children}
      {showArrow && arrowFor()}
    </button>
  );
}
