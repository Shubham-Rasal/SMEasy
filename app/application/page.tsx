"use client";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  SelectValue,
  SelectTrigger,
  SelectItem,
  SelectContent,
  Select,
} from "@/components/ui/select";
import { RadioGroupItem, RadioGroup } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { createClient } from "@/utils/supabase/client";

export default function LoanApplication() {
  const [selectedPurpose, setSelectedPurpose] =
    useState<string>("home-improvement");
  const [selectedTerm, setSelectedTerm] = useState<string>("12-months");
  const [selectedMaritalStatus, setSelectedMaritalStatus] =
    useState<string>("not married");

  const [name, setName] = useState<string>("Shubham Rasal");
  const [age, setAge] = useState<number>(23);
  const [loanAmount, setLoanAmount] = useState<number>(120000);
  const [businessType, setBusinessType] = useState<string>("IT");
  const [creditScore, setCreditScore] = useState<number>(750);
  const [address, setAddress] = useState<string>("Pune");
  const [requestLetter, setRequestLetter] = useState<string>(
    "I am an owner of a ZED certified MSE in Pune. I am looking for a loan to expand my business."
  );

  return (
    <div className="mx-auto w-screen space-y-6 py-12 px-4 sm:px-6 lg:px-8">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold">Loan Application</h1>
        <p className="text-gray-500 dark:text-gray-400">
          Fill out the form to apply for a loan.
        </p>
      </div>
      <form className="space-y-6">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="loan-amount">Name</Label>
            <Input id="name" placeholder="Enter name" type="text" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="loan-amount">Marital Status</Label>
            <Input
              id="loan-amount"
              placeholder="Enter loan amount"
              required
              type="text"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="loan-amount">Age</Label>
            <Input
              id="loan-amount"
              placeholder="Enter age"
              required
              type="number"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="loan-amount">Loan Amount</Label>
            <Input
              id="loan-amount"
              placeholder="Enter loan amount"
              required
              type="number"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="loan-amount">Business Type</Label>
            <Input
              id="loan-amount"
              placeholder="Enter business type"
              required
              type="text"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="purpose">Purpose of Loan</Label>
            <Select required>
              <SelectTrigger>
                <SelectValue placeholder="Select purpose" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="home-purchase">Home Purchase</SelectItem>
                <SelectItem value="home-improvement">
                  Home Improvement
                </SelectItem>
                <SelectItem value="debt-consolidation">
                  Debt Consolidation
                </SelectItem>
                <SelectItem value="small-business">Small Business</SelectItem>
                <SelectItem value="personal">Personal</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="credit-score">Credit Score</Label>
            <Input
              id="credit-score"
              placeholder="Enter your credit score"
              required
              type="number"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="documents">Financial Documents</Label>
            <Input id="documents" multiple required type="file" />
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="loan-term">Loan Term</Label>
            <RadioGroup defaultValue="12-months">
              <div className="flex items-center space-x-4">
                <RadioGroupItem id="12-months" value="12-months" />
                <Label htmlFor="12-months">12 Months</Label>
              </div>
              <div className="flex items-center space-x-4">
                <RadioGroupItem id="24-months" value="24-months" />
                <Label htmlFor="24-months">24 Months</Label>
              </div>
              <div className="flex items-center space-x-4">
                <RadioGroupItem id="36-months" value="36-months" />
                <Label htmlFor="36-months">36 Months</Label>
              </div>
            </RadioGroup>
          </div>
          <div className="space-y-2">
            <Label htmlFor="request-letter">Address</Label>
            <Textarea id="request-letter" placeholder="Address" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="request-letter">Request Letter</Label>
            <Textarea
              id="request-letter"
              placeholder="Explain why you need the loan"
              required
            />
          </div>
        </div>
        <div className="flex justify-end">
          <Button type="submit">Submit Application</Button>
        </div>
      </form>
    </div>
  );
}
