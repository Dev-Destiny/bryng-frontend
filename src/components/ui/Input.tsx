import { forwardRef, type InputHTMLAttributes } from "react";
import { cn } from "@/utils/cn";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  bare?: boolean;
  validationState?: "error" | "success";
};

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { className, bare = false, validationState, ...props },
  ref,
) {
  const baseStyles = bare
    ? "min-h-10 w-full rounded-xl bg-transparent px-3.5 py-2.5 text-sm text-text-primary outline-none placeholder:text-text-muted focus-visible:ring-0"
    : "min-h-11 w-full rounded-xl border border-border-subtle bg-bg-surface px-3.5 py-2.5 text-sm text-text-primary outline-none placeholder:text-text-muted transition-colors focus:border-brand focus-visible:ring-2 focus-visible:ring-brand/30 disabled:cursor-not-allowed disabled:bg-bg-subtle disabled:text-text-muted";
  const stateStyles = bare
    ? ""
    : validationState === "error"
    ? "border-error focus:border-error focus-visible:ring-error/20"
    : validationState === "success"
      ? "border-field-success focus:border-field-success focus-visible:ring-field-success/20"
      : "";

  return <input ref={ref} className={cn(baseStyles, stateStyles, className)} {...props} />;
});
