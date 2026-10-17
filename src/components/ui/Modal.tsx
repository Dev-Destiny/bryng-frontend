import type { ReactNode } from "react";
import { cn } from "@/utils/cn";

type ModalProps = {
  open: boolean;
  title: string;
  children: ReactNode;
  className?: string;
};

export function Modal({ open, title, children, className }: ModalProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-black/35 p-4" role="presentation">
      <section role="dialog" aria-modal="true" aria-label={title} className={cn("w-full max-w-lg rounded-2xl border border-border-default bg-white p-6 shadow-2xl", className)}>
        <h2 className="text-lg font-semibold">{title}</h2>
        <div className="mt-4">{children}</div>
      </section>
    </div>
  );
}
