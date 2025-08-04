"use client";

import { useEffect, useState } from "react";
import { useTranslation } from "@/hooks/useTranslation";
import '@/lib/i18n'; // Initialize i18n

export default function ClientBody({
  children,
}: {
  children: React.ReactNode;
}) {
  const { currentLanguage, isReady } = useTranslation();
  const [isClient, setIsClient] = useState(false);

  // Prevent hydration mismatch by ensuring we're on the client
  useEffect(() => {
    setIsClient(true);

    // This runs only on the client after hydration
    document.body.className = "antialiased";
  }, []);

  // Update HTML lang attribute when language changes (only on client)
  useEffect(() => {
    if (isClient && currentLanguage) {
      document.documentElement.lang = currentLanguage;
    }
  }, [currentLanguage, isClient]);

  // Show children only when i18n is ready and we're on the client to prevent hydration issues
  if (!isClient || !isReady) {
    return <div className="antialiased" />;
  }

  return <div className="antialiased">{children}</div>;
}
