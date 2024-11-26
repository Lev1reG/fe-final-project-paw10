"use client";

import DashboardAdmin from "@/components/dashboard/dashboard-admin";
import { DashboardCustomer } from "@/components/dashboard/dashboard-customer";
import { useSession } from "@/providers/session-provider";

export default function Dashboard() {
  const { session } = useSession();

  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      {session.user.role === "admin" ? (
        <DashboardAdmin />
      ) : (
        <DashboardCustomer />
      )}
    </div>
  );
}
