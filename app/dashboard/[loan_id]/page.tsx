import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenu,
} from "@/components/ui/dropdown-menu";
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card";
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import { createClient } from "@/utils/supabase/server";
import { CheckCircleIcon } from "lucide-react";
export default async function LoanStatus({
  params,
}: {
  params: { loan_id: string };
}) {
  const supabase = createClient();

  const { data } = await supabase.auth.getUser();
  const { user } = data;

  let { data: loan_requests, error } = await supabase
    .from("loan_requests")
    .select("*")
    .eq("id", params.loan_id);

  if (error) {
    console.log("Error fetching loan requests", error);
  }

  if (!loan_requests) {
    loan_requests = [];
  }

  console.log(loan_requests);
  const loan = loan_requests[0];

  return (
    <div className="grid min-h-screen w-full overflow-hidden lg:grid-cols-[280px_1fr]">
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
        <header className="flex h-14 lg:h-[60px] items-center gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-800/40">
          <Link className="lg:hidden" href="#">
            <Package2Icon className="h-6 w-6" />
            <span className="sr-only">Home</span>
          </Link>
          <div className="w-full flex-1"></div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                className="rounded-full border border-gray-200 w-8 h-8 dark:border-gray-800"
                size="icon"
                variant="ghost"
              >
                <img
                  alt="Avatar"
                  className="rounded-full"
                  height="32"
                  src="/test.svg"
                  style={{
                    aspectRatio: "32/32",
                    objectFit: "cover",
                  }}
                  width="32"
                />
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>
        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
          <div className="flex items-center gap-4">
            <Link href="/dashboard">
              <Button size="icon" variant="outline">
                <ArrowLeftIcon className="h-4 w-4" />
                <span className="sr-only">Back</span>
              </Button>
            </Link>
            <h1 className="font-semibold text-lg md:text-xl">
              Loan Application #{loan.id} -
              <span className="font-normal text-gray-500 dark:text-gray-400">
                {loan.name}
              </span>
            </h1>
          </div>
          <div className="flex flex-col gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Loan Application Status</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6">
                  <div className="grid grid-cols-[40px_1fr] items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800">
                      <ClipboardIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                    </div>
                    <div>
                      <div className="text-sm font-medium">
                        Application Received
                      </div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        Your loan application was received on May 1, 2024.
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-[40px_1fr] items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800">
                      <FileIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                    </div>
                    <div>
                      <div className="text-sm font-medium">
                        Documents Reviewed
                      </div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        Your documents were reviewed on May 5, 2024.
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-[40px_1fr] items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800">
                      <GaugeIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                    </div>
                    <div>
                      <div className="text-sm font-medium">
                        Credit Check Completed
                      </div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        Your credit check was completed on May 10, 2024.
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-[40px_1fr] items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white">
                      <CheckIcon className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-sm font-medium">Final Decision</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        Your loan application has been {loan.status}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Bank Manager Comments</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  <div className="flex items-start gap-4">
                    <Avatar>
                      <AvatarImage
                        alt="Bank Manager"
                        src="/placeholder-avatar.jpg"
                      />
                      <AvatarFallback>BM</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 space-y-2">
                      <div className="text-sm font-medium">Bank Manager</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        Hi John, I'm pleased to inform you that your loan
                        application has been approved. The credit check went
                        well, and we're confident in your ability to repay the
                        loan. Please let me know if you have any other
                        questions.
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        May 10, 2023
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Avatar>
                      <AvatarImage
                        alt="Bank Manager"
                        src="/placeholder-avatar.jpg"
                      />
                      <AvatarFallback>BM</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 space-y-2">
                      <div className="text-sm font-medium">Bank Manager</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        John, I wanted to provide an update on your loan
                        application. We've reviewed your documents and completed
                        the credit check. Everything looks good, and we're ready
                        to move forward with the final approval. Please let me
                        know if you have any other questions.
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        May 5, 2023
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}

function ArrowLeftIcon(props: any) {
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
      <path d="m12 19-7-7 7-7" />
      <path d="M19 12H5" />
    </svg>
  );
}

function BellIcon(props: any) {
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
      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
    </svg>
  );
}

function CheckIcon(props: any) {
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
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

function ClipboardIcon(props: any) {
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
      <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
    </svg>
  );
}

function FileIcon(props: any) {
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
      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
    </svg>
  );
}

function GaugeIcon(props: any) {
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
      <path d="m12 14 4-4" />
      <path d="M3.34 19a10 10 0 1 1 17.32 0" />
    </svg>
  );
}

// id: 2,
// name: 'Rahul Sharma',
// age: 32,
// loan_amount: 120000,
// business_type: 'Textiles',
// purpose: 'Raw Material Purchase',
// credit_score: 710,
// address: '22 MG Road, Bangalore, India',
// request_letter: 'I am seeking funds to purchase raw materials for my textile business.',
// marital_status: 'Married',
// term: '18 months',
// status: 'pending',
// loan_date: '2024-05-12T01:06:03.433481+00:00',
// revenue: 0.384269878371791,
// transaction_amt_avg: 0.0654861100806616,
// num_transactions: 1,
// email_id: 'test@test.com'
// }

function HomeIcon(props: any) {
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
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

function LineChartIcon(props: any) {
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
      <path d="M3 3v18h18" />
      <path d="m19 9-5 5-4-4-3 3" />
    </svg>
  );
}

function Package2Icon(props: any) {
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
      <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
      <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9" />
      <path d="M12 3v6" />
    </svg>
  );
}

function PackageIcon(props: any) {
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
      <path d="m7.5 4.27 9 5.15" />
      <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
      <path d="m3.3 7 8.7 5 8.7-5" />
      <path d="M12 22V12" />
    </svg>
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

function UsersIcon(props: any) {
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
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}
