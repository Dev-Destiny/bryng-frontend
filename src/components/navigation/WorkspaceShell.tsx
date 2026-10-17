"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import { BookOpenCheck, BriefcaseBusiness, ClipboardList, Compass, LayoutDashboard, Wallet } from "lucide-react";
import { ModeSwitcher } from "@/components/navigation/ModeSwitcher";
import { cn } from "@/utils/cn";
import type { UserMode } from "@/types/user";

const navigation = {
  client: [
    { href: "/client/dashboard", label: "Overview", Icon: LayoutDashboard },
    { href: "/client/tasks/new", label: "Create a task", Icon: ClipboardList },
  ],
  professional: [
    { href: "/professional/dashboard", label: "Assignments", Icon: BriefcaseBusiness },
    { href: "/professional/opportunities", label: "Opportunities", Icon: Compass },
  ],
};

export function WorkspaceShell({ mode, children }: { mode: UserMode; children: ReactNode }) {
  const pathname = usePathname();
  const isClient = mode === "client";

  return (
    <div className="min-h-dvh">
      <header className="sticky top-0 z-20 border-b border-border-default bg-white/90 backdrop-blur">
        <div className="mx-auto flex h-17 max-w-360 items-center justify-between gap-4 px-4 sm:px-7">
          <Link href={`/${mode}/dashboard`} className="inline-flex items-center gap-2.5 font-bold tracking-tight">
            <span className="grid size-9 place-items-center rounded-xl bg-brand text-white"><BookOpenCheck size={18} aria-hidden="true" /></span>
            <span className="text-lg">bryng</span>
          </Link>
          <div className="flex items-center gap-3">
            <ModeSwitcher />
            <span className="hidden h-8 w-px bg-border-default sm:block" />
            {isClient ? <span className="hidden items-center gap-2 text-xs font-medium text-text-secondary sm:inline-flex"><Wallet size={15} /> Wallet · ₦ —</span> : <span className="hidden items-center gap-1.5 rounded-full bg-amber-50 px-3 py-2 text-xs font-semibold text-amber-700 sm:inline-flex">★ &nbsp; Rating —</span>}
            <button type="button" aria-label="Account menu placeholder" className="grid size-9 place-items-center rounded-full bg-brand-subtle text-sm font-bold text-brand">B</button>
          </div>
        </div>
      </header>
      <div className="mx-auto grid max-w-360 gap-6 px-4 py-6 sm:px-7 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-9 lg:py-9">
        <aside className="lg:sticky lg:top-23 lg:h-[calc(100dvh-116px)]">
          <p className="mb-3 px-3 text-ui-caption font-bold uppercase tracking-widest text-text-muted">{isClient ? "Client space" : "Professional space"}</p>
          <nav aria-label={`${mode} workspace`} className="flex gap-2 overflow-x-auto lg:flex-col">
            {navigation[mode].map(({ href, label, Icon }) => {
              const active = pathname === href;
              return <Link key={href} href={href} aria-current={active ? "page" : undefined} className={cn("inline-flex shrink-0 items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition", active ? "bg-brand-subtle text-brand" : "text-text-secondary hover:bg-white hover:text-text-primary")}><Icon size={17} aria-hidden="true" />{label}</Link>;
            })}
          </nav>
          <div className="mt-8 hidden rounded-2xl border border-border-default bg-white p-4 lg:block">
            <p className="text-sm font-semibold">Need a hand?</p>
            <p className="mt-1 text-xs leading-5 text-text-secondary">Support links will be available here.</p>
          </div>
        </aside>
        <main className="min-w-0">{children}</main>
      </div>
    </div>
  );
}
