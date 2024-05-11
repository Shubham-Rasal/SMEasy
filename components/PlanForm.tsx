"use client";

import { useState } from "react";
import Image from "next/image";
import * as ToggleGroup from "@radix-ui/react-toggle-group";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import FormWrapper from "./FormWrapper";
import { FormItems } from "@/app/application/page";
import personalImg from "../public/assets/personal.png";
import game from "../public/assets/game-console.png";
import proImg from "../public/assets/online-gaming.png";

type stepProps = FormItems & {
  updateForm: (fieldToUpdate: Partial<FormItems>) => void;
};

type Plan = "personal" | "real estate" | "equipment";

const PlanForm = ({ updateForm, plan, yearly }: stepProps) => {
  const [yearlyUpdated, setYearlyUpdated] = useState(yearly);
  const [planSelected, setPlanSelected] = useState<Plan>(plan);

  const handleCheckedChange = (yearlyUpdated: boolean) => {
    setYearlyUpdated((prev) => !prev);
    updateForm({ yearly: yearlyUpdated });
  };

  const handleValueChange = (planSelected: Plan) => {
    if (planSelected) {
      setPlanSelected(planSelected);
      updateForm({ plan: planSelected });
    }
  };

  return (
    <FormWrapper
      title="Select your plan"
      description="You have the option of monthly or yearly billing."
    >
      <ToggleGroup.Root
        orientation="horizontal"
        className="flex flex-col gap-3 my-2 md:flex-row md:items-center md:justify-between md:gap-0"
        type="single"
        value={planSelected}
        onValueChange={handleValueChange}
      >
        <ToggleGroup.Item
          value="personal"
          className="border border-neutral-600 flex items-start gap-3 p-3 h-24 rounded-md aspect-square data-[state=on]:border-[#77f6aa] data-[state=on]:bg-[#77f6aa] focus:border-[#77f6aa] outline-none hover:border-[#77f6aa] md:h-44 md:w-[30%] md:flex-col md:justify-between md:gap-0"
        >
          {/* <Image src={personalImg} alt="personal" width="40" height="40" /> */}
          <div className="relative -top-1 flex flex-col items-start md:top-0">
            <p className="text-white font-semibold">personal</p>
            <p className="text-sm">{yearly ? "$90/yr" : "$9/mo"}</p>
            {yearly && (
              <span className="text-white text-sm">2 months free</span>
            )}
          </div>
        </ToggleGroup.Item>
        <ToggleGroup.Item
          value=""
          className="border border-neutral-600 flex items-start gap-3 p-3 h-24 rounded-md aspect-square data-[state=on]:border-[#77f6aa] data-[state=on]:bg-[#77f6aa] focus:border-[#77f6aa] outline-none hover:border-[#77f6aa] md:h-44 md:w-[30%] md:flex-col md:justify-between md:gap-0"
        >
          {/* <Image src="" alt="real estate" width="40" height="40" /> */}
          <div className="relative -top-1 flex flex-col items-start md:top-0">
            <p className="text-white font-semibold">real estate</p>
            <p className="text-sm">{yearly ? "$120/yr" : "$12/mo"}</p>
            {yearly && (
              <span className="text-white text-sm">2 months free</span>
            )}
          </div>
        </ToggleGroup.Item>

        <ToggleGroup.Item
          className="border border-neutral-600 flex items-start gap-3 p-3 h-24 rounded-md aspect-square data-[state=on]:border-[#77f6aa] data-[state=on]:bg-[#77f6aa] focus:border-[#77f6aa] outline-none hover:border-[#77f6aa] md:h-44 md:w-[30%] md:flex-col md:justify-between md:gap-0"
          value="equipment"
        >
          {/* <Image src={proImg} alt="equipment" width="40" height="40" /> */}
          <div className="relative -top-1 flex flex-col items-start md:top-0">
            <p className="text-white font-semibold">Pro</p>
            <p className="text-sm">{yearly ? "$150/yr" : "$15/mo"}</p>
            {yearly && (
              <span className="text-white text-sm">2 months free</span>
            )}
          </div>
        </ToggleGroup.Item>
      </ToggleGroup.Root>
      <div className="w-full flex items-center justify-center bg-transparent p-3 rounded-md">
        <div className="flex items-center gap-6">
          <Label
            htmlFor="airplane-mode"
            className={yearly ? "" : "text-green-500 font-bold"}
          >
            Monthly
          </Label>
          <Switch
            id="airplane-mode"
            checked={yearlyUpdated}
            onCheckedChange={handleCheckedChange}
          />
          <Label
            htmlFor="airplane-mode"
            className={yearly ? "text-green-500 font-bold" : ""}
          >
            Yearly
          </Label>
        </div>
      </div>
    </FormWrapper>
  );
};

export default PlanForm;
