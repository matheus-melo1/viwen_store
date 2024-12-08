"use client";

import AuthProvider from "./AuthProvider";
import GlobalProvider from "./GlobalProvider";
import ProductProvider from "./ProductProvider";

interface ProvidersProps {
  children: React.ReactNode;
}

export default function Providers({ children }: ProvidersProps) {
  return (
    <AuthProvider>
      <GlobalProvider>
        <ProductProvider>{children}</ProductProvider>
      </GlobalProvider>
    </AuthProvider>
  );
}
