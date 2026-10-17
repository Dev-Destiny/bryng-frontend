"use client";

import type { ReactNode } from "react";
import { createContext, useContext, useState } from "react";
import type { UserMode } from "@/types/user";

type UserContextValue = {
  isAuthenticated: boolean;
  is_client: boolean;
  is_professional: boolean;
  activeMode: UserMode;
  setActiveMode: (mode: UserMode) => void;
  setSession: (session: { isAuthenticated: boolean; is_client: boolean; is_professional: boolean }) => void;
};

export const UserContext = createContext<UserContextValue | null>(null);

export function Providers({ children }: { children: ReactNode }) {
  const [user, setUser] = useState({
    isAuthenticated: false,
    is_client: false,
    is_professional: false,
    activeMode: "client" as UserMode,
  });

  const value: UserContextValue = {
    ...user,
    setActiveMode: (mode) => {
      const allowed = mode === "client" ? user.is_client : user.is_professional;
      if (allowed) setUser((current) => ({ ...current, activeMode: mode }));
    },
    setSession: (session) => setUser((current) => ({ ...current, ...session })),
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export function useUserContext() {
  const context = useContext(UserContext);
  if (!context) throw new Error("useUserContext must be used within Providers");
  return context;
}
