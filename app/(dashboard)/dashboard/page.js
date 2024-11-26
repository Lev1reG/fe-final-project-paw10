import DashboardAdmin from "@/components/dashboard/dashboard-admin";
import { DashboardCustomer } from "@/components/dashboard/dashboard-customer";

export default function Dashboard() {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      {/*<DashboardAdmin />*/}
      <DashboardCustomer />
    </div>
  );
}
