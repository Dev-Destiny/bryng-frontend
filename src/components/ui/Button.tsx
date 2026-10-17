import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/utils/cn";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
};

export function Button({ className, variant = "primary", size = "md", type = "button", ...props }: ButtonProps) {
  const variants = {
    primary: "border border-transparent bg-brand text-white shadow-xs hover:bg-brand-hover",
    secondary: "border border-border-subtle bg-bg-subtle text-text-primary hover:bg-border-subtle",
    outline: "border border-border-subtle bg-white text-text-primary hover:border-brand hover:bg-bg-surface",
    ghost: "border border-transparent bg-transparent text-text-secondary hover:bg-bg-subtle hover:text-text-primary",
  };
  const sizes = {
    sm: "min-h-9 px-4 text-xs",
    md: "min-h-11 px-5 text-sm",
    lg: "min-h-12 px-6 text-sm sm:text-base",
  };

  return <button type={type} className={cn("inline-flex items-center justify-center gap-2 rounded-pill py-2.5 font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/30 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50", sizes[size], variants[variant], className)} {...props} />;
}
