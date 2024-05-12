import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import {
  BellIcon,
  HomeIcon,
  LandmarkIcon,
  LineChartIcon,
  Package2Icon,
  SettingsIcon,
  UsersIcon,
} from "lucide-react";
import BarChart from "@/components/BarChart";
import { createClient } from "@/utils/supabase/server";

export default async function Dashboard() {
  const supabase = createClient();

  let { data: loan_requests, error } = await supabase
    .from("loan_requests")
    .select("*");

  if (error) {
    console.log("Error fetching loan requests", error);
  }

  if (!loan_requests) {
    loan_requests = [];
  }

  return (
    <div key="1" className="grid min-h-screen w-full lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-gray-100/40 lg:block dark:bg-gray-800/40">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-[60px] items-center border-b px-6">
            <Link className="flex items-center gap-2 font-semibold" href="#">
              <Package2Icon className="h-6 w-6" />
              <span>SMEasy</span>
            </Link>
            <Button className="ml-auto h-8 w-8" size="icon" variant="outline">
              <BellIcon className="h-4 w-4" />
              <span className="sr-only">Toggle notifications</span>
            </Button>
          </div>
          <div className="flex-1 overflow-auto py-2">
            <nav className="grid items-start px-4 text-sm font-medium">
              <Link
                className="flex items-center gap-3 rounded-lg bg-gray-100 px-3 py-2 text-gray-900 transition-all hover:text-gray-900 dark:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50"
                href="/admin"
              >
                <HomeIcon className="h-4 w-4" />
                Dashboard
              </Link>
              <Link
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                href="/applications"
              >
                <LandmarkIcon className="h-4 w-4" />
                Loan Applications
              </Link>

              <Link
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                href="/schemes/add"
              >
                <LineChartIcon className="h-4 w-4" />
                Add Schemes
              </Link>
            </nav>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <div key="1" className="bg-[#F6F8FC] p-8">
          <div className="grid grid-cols-3 gap-6">
            <div className="col-span-2 bg-white p-6 rounded-lg shadow-md">
              <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-semibold">Overview</h1>

                <Button className="ml-auto" variant="secondary">
                  Export
                </Button>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-transparent border-[#4ADE80] border p-4 rounded-lg">
                  <p className="text-xs text-[#4ADE80] mb-1">
                    Requested (&#8377;)
                  </p>
                  <p className="text-lg font-semibold text-[#16A34A]">
                    &#8377;2,165,800
                  </p>
                  <p className="text-xs text-[#16A34A]">+3.2%</p>
                </div>
                <div className="bg-transparent border-[#FDE047] border p-4 rounded-lg">
                  <p className="text-xs text-[#927f1d] mb-1">
                    Applications (#)
                  </p>
                  <p className="text-lg font-semibold text-yellow-700">7</p>
                  <p className="text-xs text-yellow-700">+8.4%</p>
                </div>
                <div className="bg-transparent border-[#FDBA74] border p-4 rounded-lg">
                  <p className="text-xs text-yellow-700 mb-1">
                    Deployed/Approved (&#8377;)
                  </p>
                  <p className="text-lg font-semibold text-[#C2410C]">
                    &#8377;1,136,400
                  </p>
                  <p className="text-xs text-[#C2410C]">-0.9%</p>
                </div>
              </div>
              <BarChart className="pt-12 size-96" />
              <span className="text-xs text-muted-foreground mt-4">
                (*) Application over Past few Months.
              </span>
            </div>
            <div className="bg-white  p-6 rounded-lg shadow-md">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold">Daily Activity</h2>
              </div>
              <Calendar
                // mode="multiple"
                // onSelect={(date) => setDates(ate)}
                className="mb-6"
              />
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-semibold">Feb 10, 24</h3>
                  <Link className="text-xs" href="#">
                    All
                  </Link>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="default">12 Notes</Badge>
                  <p className="text-xs text-muted-foreground">
                    10:08 AM - The borrower's loan application has been
                    received.
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="secondary">L1</Badge>
                  <p className="text-xs text-muted-foreground">
                    11:12 AM - The lending team has requested additional
                    information or documents from...
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="default">L2</Badge>
                  <p className="text-xs text-muted-foreground">
                    2:01 PM - The borrower has accepted the loan offer, and the
                    funds have been...
                  </p>
                </div>
                <Button className="self-start" variant="ghost">
                  All
                </Button>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 mt-6">
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">
                  In Process Applications{" "}
                  <Badge className="ml-2" variant="default">
                    {loan_requests.length}
                  </Badge>
                </h3>
              </div>
              <div className="flex gap-4 overflow-x-auto scrollbar-hide">
                {loan_requests.map((loan_request) => (
                  <LoadCard
                    key={loan_request.id}
                    id={loan_request.id}
                    amount={loan_request.loan_amount}
                    status={loan_request.status}
                    name={loan_request.purpose}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function LoadCard(props: any) {
  return (
    <div className="flex flex-col justify-between items-start bg-white text-slate-900 border border-black p-4 rounded-lg shrink-0 w-[300px]">
      <div className="flex justify-between w-full">
        <p className="text-sm font-bold ">{props.name}</p>
        <Badge className="self-start" variant="outline">
          {props.status}
        </Badge>
      </div>
      <p className="text-2xl font-bold">&#8377;{props.amount}</p>
      <p className="text-xs text-muted-foreground">#{props.id}</p>
    </div>
  );
}
