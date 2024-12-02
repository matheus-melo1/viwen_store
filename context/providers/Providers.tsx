"use client";

import AuthProvider from "./AuthProvider";
import GlobalProvider from "./GlobalProvider";

interface ProvidersProps {
  children: React.ReactNode;
}

export default function Providers({ children }: ProvidersProps) {
  return (
    <GlobalProvider>
      <AuthProvider>{children}</AuthProvider>
    </GlobalProvider>
  );
}
