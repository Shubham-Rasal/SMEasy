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

import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from "@/components/ui/card";
import Link from "next/link";

import { Input } from "@/components/ui/input";

export default function Schemes() {
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
                href="/dashboard"
              >
                <ClipboardIcon className="h-4 w-4" />
                Loan Applications
                <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                  2
                </Badge>
              </Link>
              <Link
                className="flex items-center gap-3 rounded-lg bg-gray-100 px-3 py-2 text-gray-900 transition-all hover:text-gray-900 dark:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50"
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
        <section className="w-full py-12">
          <div className="container px-4 md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                AI Recommended Schemes based
              </h2>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Explore the key details and benefits of popular government
                schemes designed to support entrepreneurs and small enterprises
                that match your profile.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 mt-8">
              <Card>
                <CardHeader>
                  <CardTitle>Scheme ID: 123</CardTitle>
                  <CardDescription>Scheme Name: Startup India</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="font-medium">Guarantee Cover:</p>
                    <p>₹1 crore</p>
                  </div>
                  <div>
                    <p className="font-medium">Objectives:</p>
                    <p>
                      To build a strong and sustainable ecosystem for nurturing
                      innovation and startups in the country.
                    </p>
                  </div>
                  <div>
                    <p className="font-medium">Description:</p>
                    <p>
                      The Startup India scheme is a flagship initiative of the
                      Government of India, intended to catalyze startup culture
                      and build a strong and inclusive ecosystem for innovation
                      and entrepreneurship in India.
                    </p>
                  </div>
                  <div>
                    <p className="font-medium">Activities:</p>
                    <ul className="list-disc pl-4 space-y-2">
                      <li>Simplification and handholding</li>
                      <li>Funding support</li>
                      <li>Incentives</li>
                      <li>Industry-academia partnership and incubation</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-medium">Who can apply:</p>
                    <p>
                      Startups incorporated in India not prior to 7 years, with
                      an annual turnover not exceeding ₹100 crore in any
                      preceding financial year.
                    </p>
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col gap-2 sm:flex-row">
                  <Link
                    className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                    href="#"
                  >
                    Scheme Guidelines
                  </Link>
                  <Link
                    className="inline-flex h-9 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                    href="#"
                  >
                    Performance Achievements
                  </Link>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Scheme ID: 456</CardTitle>
                  <CardDescription>
                    Scheme Name: Pradhan Mantri Mudra Yojana
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="font-medium">Guarantee Cover:</p>
                    <p>₹10 lakh</p>
                  </div>
                  <div>
                    <p className="font-medium">Objectives:</p>
                    <p>
                      To provide loans up to ₹10 lakh to non-corporate, non-farm
                      small/micro enterprises.
                    </p>
                  </div>
                  <div>
                    <p className="font-medium">Description:</p>
                    <p>
                      The Pradhan Mantri Mudra Yojana (PMMY) is a scheme
                      launched by the Government of India to provide loans up to
                      ₹10 lakh to the non-corporate, non-farm small/micro
                      enterprises.
                    </p>
                  </div>
                  <div>
                    <p className="font-medium">Activities:</p>
                    <ul className="list-disc pl-4 space-y-2">
                      <li>Loan disbursement</li>
                      <li>Credit guarantee</li>
                      <li>Skill development</li>
                      <li>Handholding support</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-medium">Who can apply:</p>
                    <p>
                      Non-corporate, non-farm small/micro enterprises, including
                      proprietorships, partnerships, and private limited
                      companies.
                    </p>
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col gap-2 sm:flex-row">
                  <Link
                    className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                    href="#"
                  >
                    Scheme Guidelines
                  </Link>
                  <Link
                    className="inline-flex h-9 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                    href="#"
                  >
                    Performance Achievements
                  </Link>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
