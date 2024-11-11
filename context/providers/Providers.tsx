"use client";

import GlobalProvider from "./GlobalProvider";

interface ProvidersProps {
  children: React.ReactNode;
}

export default function Providers({ children }: ProvidersProps) {
  return <GlobalProvider>{children}</GlobalProvider>;
}
