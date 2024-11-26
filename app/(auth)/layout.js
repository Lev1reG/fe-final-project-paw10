"use client";

import { Loading } from "@/components/all-pages/loading";
import { useSession } from "@/providers/session-provider";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function RootLayout({ children }) {
  const { session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session.status === "authenticated") {
      router.push("/dashboard");
    }
  }, [session.status, router]); // Add dependencies here

  if (session.status === "loading") {
    return <Loading />;
  }

  if (session.status === "authenticated") {
    // Since we are redirecting, we can simply return null here to stop rendering children
    return null;
  }

  return <>{children}</>;
}
