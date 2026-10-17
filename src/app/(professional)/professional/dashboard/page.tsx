import { BriefcaseBusiness, Star } from "lucide-react";
import { Card } from "@/components/ui/Card";

export default function ProfessionalDashboardPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-8">
      <div><p className="text-sm font-medium text-text-secondary">Professional workspace</p><h1 className="mt-1 text-3xl font-bold tracking-tight">Active assignments</h1></div>
      <div className="grid gap-5 sm:grid-cols-3">
        <Card className="p-5"><p className="text-sm text-text-secondary">Average rating</p><p className="mt-2 inline-flex items-center gap-2 text-2xl font-bold">— <Star size={18} className="text-amber-500" /></p><p className="mt-1 text-xs text-text-muted">Your rating will appear here</p></Card>
        <Card className="p-5"><p className="text-sm text-text-secondary">Active assignments</p><p className="mt-2 text-2xl font-bold">—</p><p className="mt-1 text-xs text-text-muted">No assignment data connected yet</p></Card>
        <Card className="p-5"><p className="text-sm text-text-secondary">Completed</p><p className="mt-2 text-2xl font-bold">—</p><p className="mt-1 text-xs text-text-muted">Completed work summary placeholder</p></Card>
      </div>
      <Card className="flex min-h-64 flex-col items-center justify-center p-8 text-center">
        <span className="grid size-12 place-items-center rounded-2xl bg-brand-subtle text-brand"><BriefcaseBusiness size={22} /></span>
        <h2 className="mt-4 text-lg font-semibold">No active assignments yet</h2>
        <p className="mt-2 max-w-sm text-sm leading-6 text-text-secondary">When you accept an opportunity, the assignment will appear here.</p>
      </Card>
    </div>
  );
}
