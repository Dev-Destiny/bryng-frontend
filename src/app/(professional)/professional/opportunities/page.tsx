import { SearchCheck } from "lucide-react";
import { Card } from "@/components/ui/Card";

export default function OpportunitiesPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-8">
      <div><p className="text-sm font-medium text-text-secondary">Professional workspace</p><h1 className="mt-1 text-3xl font-bold tracking-tight">Opportunities</h1><p className="mt-2 text-sm text-text-secondary">Browse tasks that match your subject expertise.</p></div>
      <Card className="flex min-h-64 flex-col items-center justify-center p-8 text-center">
        <span className="grid size-12 place-items-center rounded-2xl bg-brand-subtle text-brand"><SearchCheck size={22} /></span>
        <h2 className="mt-4 text-lg font-semibold">Matching tasks will appear here</h2>
        <p className="mt-2 max-w-sm text-sm leading-6 text-text-secondary">Opportunity matching is a placeholder until task data is connected.</p>
      </Card>
    </div>
  );
}
