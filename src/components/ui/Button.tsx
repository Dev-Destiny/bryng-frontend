import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/utils/cn";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "ghost";
};

export function Button({ className, variant = "primary", ...props }: ButtonProps) {
  const variants = {
    primary: "bg-brand text-white hover:bg-brand-hover",
    secondary: "border border-border-default bg-white text-text-primary hover:bg-bg-subtle",
    ghost: "text-text-secondary hover:bg-bg-subtle hover:text-text-primary",
  };

  return <button className={cn("inline-flex min-h-10 items-center justify-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand disabled:pointer-events-none disabled:opacity-50", variants[variant], className)} {...props} />;
}
