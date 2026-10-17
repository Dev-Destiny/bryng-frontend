import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Card } from "@/components/ui/Card";

export default function NewTaskPage() {
  return (
    <div className="mx-auto max-w-4xl space-y-6">
      <Link href="/client/dashboard" className="inline-flex items-center gap-2 text-sm font-medium text-text-secondary hover:text-text-primary"><ArrowLeft size={16} /> Back to dashboard</Link>
      <div><p className="text-sm font-medium text-text-secondary">Client workspace</p><h1 className="mt-1 text-3xl font-bold tracking-tight">Create a task</h1></div>
      <Card className="border-dashed p-8 text-sm leading-6 text-text-secondary">Task creation fields and submission flow will be added in a later step.</Card>
    </div>
  );
}
