"use client";

import { useRef, useState, type ChangeEvent, type ClipboardEvent, type FormEvent, type KeyboardEvent } from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

const CODE_LENGTH = 6;

function OtpCodeInput({
  value,
  onChange,
  error,
}: {
  value: string[];
  onChange: (value: string[]) => void;
  error?: string;
}) {
  const refs = useRef<Array<HTMLInputElement | null>>([]);
  const digits = value;
  const success = digits.every(Boolean) && !error;

  function focus(index: number) {
    refs.current[index]?.focus();
    refs.current[index]?.select();
  }

  function distribute(startAt: number, rawValue: string) {
    const enteredDigits = rawValue.replace(/\D/g, "").slice(0, CODE_LENGTH - startAt);
    const next = startAt === 0 ? Array.from({ length: CODE_LENGTH }, () => "") : [...digits];
    enteredDigits.split("").forEach((digit, offset) => {
      next[startAt + offset] = digit;
    });
    onChange(next);
    if (enteredDigits) focus(Math.min(startAt + enteredDigits.length, CODE_LENGTH - 1));
  }

  function handleChange(index: number, event: ChangeEvent<HTMLInputElement>) {
    const entered = event.currentTarget.value.replace(/\D/g, "");
    if (entered.length > 1) {
      distribute(index, entered);
      return;
    }

    const next = [...digits];
    next[index] = entered;
    onChange(next);
    if (entered && index < CODE_LENGTH - 1) focus(index + 1);
  }

  function handleKeyDown(index: number, event: KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Backspace" || event.key === "Delete") {
      event.preventDefault();
      const next = [...digits];
      const targetIndex = (digits[index] || index === 0) ? index : index - 1;
      next[targetIndex] = "";
      onChange(next);
      focus(index === 0 ? 0 : index - 1);
    } else if (event.key === "ArrowLeft" && index > 0) {
      event.preventDefault();
      focus(index - 1);
    } else if (event.key === "ArrowRight" && index < CODE_LENGTH - 1) {
      event.preventDefault();
      focus(index + 1);
    }
  }

  function handlePaste(index: number, event: ClipboardEvent<HTMLInputElement>) {
    const pasted = event.clipboardData.getData("text").replace(/\D/g, "");
    if (!pasted) return;
    event.preventDefault();
    distribute(index, pasted);
  }

  return (
    <div role="group" aria-label="Six-digit verification code" className="grid grid-cols-6 gap-2 sm:gap-3">
      {digits.map((digit, index) => (
        <Input
          key={index}
          ref={(element) => { refs.current[index] = element; }}
          type="text"
          inputMode="numeric"
          pattern="[0-9]*"
          maxLength={CODE_LENGTH}
          autoComplete={index === 0 ? "one-time-code" : "off"}
          aria-label={`Digit ${index + 1}`}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? "otp-error" : undefined}
          value={digit}
          onChange={(event) => handleChange(index, event)}
          onKeyDown={(event) => handleKeyDown(index, event)}
          onPaste={(event) => handlePaste(index, event)}
          onFocus={(event) => event.currentTarget.select()}
          validationState={error ? "error" : success ? "success" : undefined}
          className="h-12 min-h-12 px-0 text-center text-lg font-bold sm:h-14 sm:min-h-14"
        />
      ))}
    </div>
  );
}

export function OtpVerificationForm() {
  const [code, setCode] = useState<string[]>(Array.from({ length: CODE_LENGTH }, () => ""));
  const [submitted, setSubmitted] = useState(false);
  const error = submitted && !code.every(Boolean) ? "Enter all 6 digits to continue." : undefined;

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <form noValidate onSubmit={submit} className="mt-8">
      <OtpCodeInput value={code} onChange={setCode} error={error} />
      {error && <p id="otp-error" role="alert" className="mt-2 text-ui-caption font-medium text-error">{error}</p>}
      <Button type="submit" size="lg" className="mt-6 w-full">Verify email</Button>
    </form>
  );
}
