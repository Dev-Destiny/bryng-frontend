import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { AuthHeading } from "@/components/auth/AuthLayout";
import { OtpVerificationForm } from "@/components/auth/OtpVerificationForm";

export default function VerifyOtpPage() {
  return (
    <div>
      <Link href="/signup" className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-text-secondary transition-colors hover:text-brand">
        <ArrowLeft size={16} aria-hidden="true" /> Back to sign up
      </Link>

      <AuthHeading title="Verify your email" description="Enter the 6-digit code we sent to your email address." />
      <OtpVerificationForm />
      <p className="mt-6 text-center text-sm text-text-secondary">
        Didn’t get a code? <button type="button" className="font-bold text-brand hover:text-brand-hover">Resend code</button>
      </p>
    </div>
  );
}
