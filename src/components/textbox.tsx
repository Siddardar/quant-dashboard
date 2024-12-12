"use client";

import { TrendingUp } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { StringToBoolean } from "class-variance-authority/types";

type TextboxType = {
  title: string;
  description: string;
  content1: string;
  content2: string;
};

export function Textbox(props: TextboxType) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{props.title}</CardTitle>
        <CardDescription>{props.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          {props.content1} <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          {props.content2}
        </div>
      </CardContent>
    </Card>
  );
}
