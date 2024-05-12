import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import {
  BellIcon,
  ClipboardIcon,
  HomeIcon,
  LandmarkIcon,
  LineChartIcon,
  Package2Icon,
  SettingsIcon,
  UsersIcon,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { createClient } from "@/utils/supabase/server";

export default async function Applications() {
  const supabase = createClient();

  const { data } = await supabase.auth.getUser();
  const { user } = data;
  const email = user?.email;

  console.log(email);

  let { data: loan_requests, error } = await supabase
    .from("loan_requests")
    .select("*")
    // Filters
    .eq("email_id", email);

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
            <Link className="flex items-center gap-2 font-semibold" href="/">
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
                href="/dashboard"
              >
                <ClipboardIcon className="h-4 w-4" />
                Loan Applications
                <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                  {loan_requests.length}
                </Badge>
              </Link>
              <Link
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                href="/schemes"
              >
                <HomeIcon className="h-4 w-4" />
                Matched Schemes
                <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-500">
                  2
                </Badge>
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
                <Link href="/application">
                  <Button>New Application</Button>
                </Link>
              </div>
            </div>
            <div className="grid gap-4">
              {loan_requests.length == 0 ? (
                <div className="text-center text-gray-500 dark:text-gray-400">
                  No loan requests found
                </div>
              ) : (
                loan_requests.map((loan_request) => (
                  <AppCard loan_request={loan_request} />
                ))
              )}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

function AppCard({ loan_request }: any) {
  return (
    <Link href={`/dashboard/${loan_request.id}`}>
      <Card className="hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer transition-colors">
        <CardContent className="flex justify-between py-2 gap-4 items-center">
          <div className="space-y-1">
            <h3 className="text-lg font-medium">
              {loan_request.purpose} Application
            </h3>
            <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
              <Badge variant="outline">{loan_request.business_type}</Badge>
              <span className="px-2 py-1 rounded-full bg-yellow-100 text-yellow-600 dark:bg-yellow-900/20 dark:text-yellow-400">
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
