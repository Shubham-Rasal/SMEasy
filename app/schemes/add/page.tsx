"use client";
import {
  SelectValue,
  SelectTrigger,
  SelectItem,
  SelectContent,
  Select,
} from "@/components/ui/select";
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
import { useState } from "react";
import { addDays } from "date-fns";
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
export default function AddScheme() {
  const [schemeName, setSchemeName] = useState(
    "Financial Support to MSMEs in ZED Certification Scheme"
  );
  const [schemeId, setSchemeId] = useState("");
  const [guaranteeCover, setGuaranteeCover] = useState(
    "50% to 80% Subsidy for MSMEs towards ZED Certification"
  );
  const [objectives, setObjectives] = useState(
    "The scheme is an extensive drive to create proper awareness in MSMEs about ZED manufacturing and motivate them for assessment of their enterprise for ZED and support them. After ZED assessment, MSMEs can reduce wastages substantially, increase productivity, expand their market as IOPs, become vendors to CPSUs, have more IPRs, develop new products and processes etc."
  );
  const [description, setDescription] = useState(
    "Assessment & Rating/Re-rating/Gap analysis/Hand holding"
  );
  const [activities, setActivities] = useState(
    "a) Assessment/Rating by empanelled Credit Rating Agencies/other Agencies valid for 4 years (Ministry of MSME will subsidize* 80% of Micro, 60% of Small, 50% of Medium Enterprises' Certification Fee: average 70% of Fee) (Assessment Fee Rs. 10,000/-& Rs 80,000/- per enterprise respectively for Desktop Assessment and ZED rating Complete Assessment).\n\nb) Additional rating for Defence angle i.e. Defence ZED by empanelled Credit Rating Agencies/other Agencies valid for 4 years (Ministry of MSME will subsidize* 80% of Micro, 60% of Small, 50% of Medium Enterprises' Certification Fee: average 70% of Fee) (Assessment Fee Rs. 40,000/- per enterprise.\n\nc) Gap Analysis, Handholding, Consultancy for improving rating of MSMEs by Consultants through QCI/NPC, Field formations of O/o DC-MSME viz. MSME-DI, MSME-TC including its autonomous bodies, BEE etc. (Ministry of MSME will subsidize* 80% of Micro, 60% of Small, 50% of Medium Enterprises' Consultancy charges: average 70% of Fee) (Hand holding charges Rs. 1.9 Lakh per enterprise whereas in case of MSMEs owned by SC/ST entrepreneurs additional support of Rs 10,000/- will be provided.\n\nd) Re-Assessment/Re-Rating by Credit Rating Agencies & Other Agencies (Ministry of MSME will subsidize* 80% of Micro, 60% of Small, 50% of Medium Enterprises' Certification Fee: average 70% of Fee) (Assessment Fee Rs. 40000/- per enterprise."
  );
  const [whoCanApply, setWhoCanApply] = useState(
    "Manufacturing Micro, Small & Medium Enterprises."
  );
  const [guidelinesLink, setGuidelinesLink] = useState(
    "http://dcmsme.gov.in/Guidelines-ZED-Final.pdf"
  );
  const [achievementsLink, setAchievementsLink] = useState(
    "http://msme.gov.in/MyMsme/Reg/COM_ZedAppForm.aspx"
  );

  const handleSubmit = async () => {
    console.log({
      schemeName,
      schemeId,
      guaranteeCover,
      objectives,
      description,
      activities,
      whoCanApply,
      guidelinesLink,
      achievementsLink,
    });

    const response = await fetch("/api/schemes/add", {
      body: JSON.stringify({
        schemeName,
        schemeId,
        guaranteeCover,
        objectives,
        description,
        activities,
        whoCanApply,
        guidelinesLink,
        achievementsLink,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });
  };

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
                href="/dashboard"
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
                href="#"
              >
                <UsersIcon className="h-4 w-4" />
                Customers
              </Link>
              <Link
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                href="#"
              >
                <LineChartIcon className="h-4 w-4" />
                Schemes
              </Link>
              <Link
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                href="#"
              >
                <SettingsIcon className="h-4 w-4" />
                Settings
              </Link>
            </nav>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <Card className="w-full max-w-2xl">
          <CardHeader>
            <CardTitle>MSME Development Institute Schemes</CardTitle>
            <CardDescription>
              Fill out the form to input details for the Scheme.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="grid gap-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="scheme-id">Scheme ID</Label>
                  <Input
                    id="scheme-id"
                    placeholder="Enter scheme ID"
                    type="number"
                    value={schemeId}
                    onChange={(e) => setSchemeId(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="scheme-name">Scheme Name</Label>
                  <Input
                    id="scheme-name"
                    placeholder="Enter scheme name"
                    value={schemeName}
                    onChange={(e) => setSchemeName(e.target.value)}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="guarantee-cover">Guarantee Cover</Label>
                <Input
                  id="guarantee-cover"
                  placeholder="Enter guarantee cover"
                  value={guaranteeCover}
                  onChange={(e) => setGuaranteeCover(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="objectives">Objectives</Label>
                <Textarea
                  className="min-h-[100px]"
                  id="objectives"
                  placeholder="Enter objectives"
                  value={objectives}
                  onChange={(e) => setObjectives(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  className="min-h-[100px]"
                  id="description"
                  placeholder="Enter description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="activities">Activities</Label>
                <Textarea
                  className="min-h-[100px]"
                  id="activities"
                  placeholder="Enter activities"
                  value={activities}
                  onChange={(e) => setActivities(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="who-can-apply">Who Can Apply</Label>
                <Textarea
                  className="min-h-[100px]"
                  id="who-can-apply"
                  placeholder="Enter who can apply"
                  value={whoCanApply}
                  onChange={(e) => setWhoCanApply(e.target.value)}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="scheme-guidelines-link">
                    Scheme Guidelines Link
                  </Label>
                  <Input
                    id="scheme-guidelines-link"
                    placeholder="Enter scheme guidelines link"
                    value={guidelinesLink}
                    onChange={(e) => setGuidelinesLink(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="performance-achievements-link">
                    Performance Achievements Link
                  </Label>
                  <Input
                    id="performance-achievements-link"
                    placeholder="Enter performance achievements link"
                    value={achievementsLink}
                    onChange={(e) => setAchievementsLink(e.target.value)}
                  />
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex justify-end">
            <Button onClick={handleSubmit}>Save</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
