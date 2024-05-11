"use client";
import {
  SelectValue,
  SelectTrigger,
  SelectItem,
  SelectContent,
  Select,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { ResponsiveBar } from "@nivo/bar";
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

export default function Applications() {
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
              <Link href="/applications/12345">
                <Card className="hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer transition-colors">
                  <CardContent className="flex justify-between py-2 gap-4 items-center">
                    <div className="space-y-2">
                      <h3 className="text-lg font-medium">
                        Home Loan Application
                      </h3>
                      <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                        <Badge variant="outline">Real Estate</Badge>
                        <span className="px-2 py-1 rounded-full bg-green-100 text-green-600 dark:bg-green-900/20 dark:text-green-400">
                          Approved
                        </span>
                        <span>Application ID: #12345</span>
                        <span>April 15, 2023</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold">&#8377;250,000</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Loan Amount
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
              <Card className="hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer transition-colors">
                <CardContent className="flex justify-between py-2 gap-4 items-center">
                  <div className="space-y-1">
                    <h3 className="text-lg font-medium">
                      Auto Loan Application
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                      <Badge variant="outline">Automotive</Badge>
                      <span className="px-2 py-1 rounded-full bg-yellow-100 text-yellow-600 dark:bg-yellow-900/20 dark:text-yellow-400">
                        Pending
                      </span>
                      <span>Application ID: #54321</span>
                      <span>May 1, 2023</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold">&#8377;35,000</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Loan Amount
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card className="hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer transition-colors">
                <CardContent className="flex justify-between py-2 gap-4 items-center">
                  <div className="space-y-1">
                    <h3 className="text-lg font-medium">
                      Personal Loan Application
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                      <Badge variant="destructive">Personal</Badge>
                      <span className="px-2 py-1 rounded-full bg-red-100 text-red-600 dark:bg-red-900/20 dark:text-red-400">
                        Declined
                      </span>
                      <span>Application ID: #67890</span>
                      <span>March 20, 2023</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold">&#8377;15,000</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Loan Amount
                    </p>
                  </div>
                </CardContent>
              </Card>
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

function LoadCard() {
  return (
    <div className="flex flex-col justify-between items-start bg-white text-slate-900 border border-black p-4 rounded-lg shrink-0 w-[300px]">
      <div className="flex justify-between w-full">
        <p className="text-sm font-bold ">Student Loan</p>
        <Badge className="self-start" variant="default">
          In-Process
        </Badge>
      </div>
      <p className="text-4xl font-bold">&#8377;8,000</p>
      <p className="text-xs text-muted-foreground">#6823658 - Jan 8, 2024</p>
    </div>
  );
}

function BarChart(props: any) {
  return (
    <div {...props}>
      <ResponsiveBar
        data={[
          { name: "Jan", count: 111 },
          { name: "Feb", count: 157 },
          { name: "Mar", count: 129 },
          { name: "Apr", count: 150 },
          { name: "May", count: 119 },
          { name: "Jun", count: 72 },
        ]}
        keys={["count"]}
        indexBy="name"
        margin={{ top: 0, right: 0, bottom: 40, left: 40 }}
        padding={0.3}
        colors={["#2563eb"]}
        axisBottom={{
          tickSize: 0,
          tickPadding: 16,
        }}
        axisLeft={{
          tickSize: 0,
          tickValues: 4,
          tickPadding: 16,
        }}
        gridYValues={4}
        theme={{
          tooltip: {
            chip: {
              borderRadius: "9999px",
            },
            container: {
              fontSize: "12px",
              textTransform: "capitalize",
              borderRadius: "6px",
            },
          },
          grid: {
            line: {
              stroke: "#f3f4f6",
            },
          },
        }}
        tooltipLabel={({ id }) => `&#8377;{id}`}
        enableLabel={false}
        role="application"
        ariaLabel="A bar chart showing data"
      />
    </div>
  );
}
