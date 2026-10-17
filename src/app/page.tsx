"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useUserStore } from "@/store/useUserStore";

export default function EntryPage() {
  const router = useRouter();
  const { isAuthenticated, is_client, is_professional, activeMode } = useUserStore();

  useEffect(() => {
    if (!isAuthenticated) {
      router.replace("/login");
      return;
    }

    if (activeMode === "professional" && is_professional) {
      router.replace("/professional/dashboard");
    } else if (activeMode === "client" && is_client) {
      router.replace("/client/dashboard");
    } else if (is_client) {
      router.replace("/client/dashboard");
    } else if (is_professional) {
      router.replace("/professional/dashboard");
    } else {
      router.replace("/signup");
    }
  }, [activeMode, isAuthenticated, is_client, is_professional, router]);

  return (
    <main className="grid min-h-dvh place-items-center px-6 text-sm text-text-secondary">
      Preparing your Bryng workspace…
    </main>
  );
}
