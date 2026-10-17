"use client";

import { BriefcaseBusiness, UserRound } from "lucide-react";
import { useRouter } from "next/navigation";
import { useUserStore } from "@/store/useUserStore";
import type { UserMode } from "@/types/user";
import { cn } from "@/utils/cn";

export function ModeSwitcher() {
  const router = useRouter();
  const { is_client, is_professional, activeMode, setActiveMode } = useUserStore();
  const availableModes: { id: UserMode; label: string; Icon: typeof UserRound }[] = [
    ...(is_client ? [{ id: "client" as const, label: "Client Mode", Icon: UserRound }] : []),
    ...(is_professional ? [{ id: "professional" as const, label: "Professional Mode", Icon: BriefcaseBusiness }] : []),
  ];

  if (availableModes.length < 2) {
    const mode = availableModes[0];
    if (!mode) return <span className="rounded-full bg-bg-subtle px-3 py-2 text-xs font-semibold text-text-muted">Workspace</span>;
    return <span className="rounded-full bg-brand-subtle px-3 py-2 text-xs font-semibold text-brand">{mode.label}</span>;
  }

  return (
    <div className="inline-flex rounded-xl border border-border-default bg-bg-subtle p-1" aria-label="Switch workspace mode">
      {availableModes.map(({ id, label, Icon }) => (
        <button key={id} type="button" aria-pressed={activeMode === id} onClick={() => { setActiveMode(id); router.push(`/${id}/dashboard`); }} className={cn("inline-flex min-h-9 items-center gap-2 rounded-lg px-3 text-xs font-semibold transition", activeMode === id ? "bg-white text-brand shadow-sm" : "text-text-secondary hover:text-text-primary")}>
          <Icon size={15} aria-hidden="true" />
          <span className="hidden sm:inline">{label}</span>
        </button>
      ))}
    </div>
  );
}
