import { ArrowUpRight, ClipboardList, Plus } from "lucide-react";
import Link from "next/link";
import { Card } from "@/components/ui/Card";

export default function ClientDashboardPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-8">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div><p className="text-sm font-medium text-text-secondary">Client workspace</p><h1 className="mt-1 text-3xl font-bold tracking-tight">Your dashboard</h1></div>
        <Link href="/client/tasks/new" className="inline-flex items-center gap-2 rounded-xl bg-brand px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-hover"><Plus size={17} /> Post a task</Link>
      </div>
      <div className="grid gap-5 sm:grid-cols-3">
        <Card className="p-5"><p className="text-sm text-text-secondary">Wallet balance</p><p className="mt-2 text-2xl font-bold">₦ —</p><p className="mt-1 text-xs text-text-muted">Balance details will appear here</p></Card>
        <Card className="p-5"><p className="text-sm text-text-secondary">Open tasks</p><p className="mt-2 text-2xl font-bold">—</p><p className="mt-1 text-xs text-text-muted">No task data connected yet</p></Card>
        <Card className="p-5"><p className="text-sm text-text-secondary">In progress</p><p className="mt-2 text-2xl font-bold">—</p><p className="mt-1 text-xs text-text-muted">Assignment summary placeholder</p></Card>
      </div>
      <Card className="flex min-h-64 flex-col items-center justify-center p-8 text-center">
        <span className="grid size-12 place-items-center rounded-2xl bg-brand-subtle text-brand"><ClipboardList size={22} /></span>
        <h2 className="mt-4 text-lg font-semibold">Your tasks will show up here</h2>
        <p className="mt-2 max-w-sm text-sm leading-6 text-text-secondary">Create a task to get matched with an academic professional.</p>
        <Link href="/client/tasks/new" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand">Create a task <ArrowUpRight size={16} /></Link>
      </Card>
    </div>
  );
}
