import type { ReactNode } from "react";
import { WorkspaceShell } from "@/components/navigation/WorkspaceShell";

export default function ClientLayout({ children }: { children: ReactNode }) {
  return <WorkspaceShell mode="client">{children}</WorkspaceShell>;
}
