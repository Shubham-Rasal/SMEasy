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
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { createClient } from "@/utils/supabase/server";
import { loadBindings } from "next/dist/build/swc";

export default async function Applications() {
  const supabase = createClient();

  let { data: loan_requests, error } = await supabase
    .from("loan_requests")
    .select("*");

  console.log(loan_requests);

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
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                href="/admin"
              >
                <HomeIcon className="h-4 w-4" />
                Dashboard
              </Link>
              <Link
                className="flex items-center gap-3 rounded-lg bg-gray-100 px-3 py-2 text-gray-900 transition-all hover:text-gray-900 dark:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50"
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
        <section className="w-full py-6 md:py-10">
          <div className="container grid gap-4 px-4 md:px-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Loan Applications</h2>
              <div className="relative">
                <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500 dark:text-gray-400" />
                <Input
                  className="pl-10 pr-4 h-10 rounded-md border border-gray-200 bg-white text-sm shadow-sm focus:border-primary focus:outline-none dark:border-gray-800 dark:bg-gray-950 dark:text-gray-50"
                  placeholder="Search applications..."
                  type="search"
                />
              </div>
            </div>
            <div className="grid gap-4">
              {loan_requests.map((loan_request: any) => (
                <LoanCard key={loan_request.id} loan_request={loan_request} />
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

function SearchIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

function LoanCard({ loan_request }: any) {
  return (
    <Link href={`/applications/${loan_request.id}`}>
      <Card className="hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer transition-colors">
        <CardContent className="flex justify-between py-2 gap-4 items-center">
          <div className="space-y-2">
            <h3 className="text-lg font-medium">Home Loan Application</h3>
            <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
              <Badge variant="outline">Real Estate</Badge>
              <span className="px-2 py-1 rounded-full bg-yellow-100 text-yellow-600 dark:bg-green-900/20 dark:text-green-400">
                {loan_request.status}
              </span>
              <span>Application ID: #{loan_request.id}</span>
              <span>
                {new Date(loan_request.loan_date).toLocaleDateString()}
              </span>
            </div>
          </div>
          <div className="text-right">
            <p className="text-2xl font-bold">
              &#8377;{loan_request.loan_amount}
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Loan Amount
            </p>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}

// id
// bigint

// number
// name
// character varying

// string
// age
// integer

// number
// loan_amount
// numeric

// number
// business_type
// character varying

// string
// purpose
// character varying

// string
// credit_score
// integer

// number
// address
// character varying

// string
// request_letter
// text

// string
// marital_status
// character varying

// string
// term
// character varying

// string
// status
// text

// string
