import { Card } from "@/components/ui/Card";

export default function VerifyOtpPage() {
  return (
    <main className="grid min-h-dvh place-items-center px-5 py-12">
      <Card className="w-full max-w-md p-8 text-center sm:p-10">
        <p className="text-sm font-semibold text-brand">Email verification</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight">Check your inbox</h1>
        <p className="mt-3 text-sm leading-6 text-text-secondary">Enter the six-digit code sent to your email to continue.</p>
        <div className="mt-8 rounded-xl border border-dashed border-border-default bg-bg-subtle p-4 text-sm text-text-muted">OTP verification placeholder</div>
      </Card>
    </main>
  );
}
