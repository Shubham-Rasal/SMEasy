import { NextRequest, NextResponse } from "next/server";
import { pipeline } from "@xenova/transformers";

export async function POST(request: NextRequest) {
  const body = await request.json();

  const generateEmbedding = await pipeline(
    "feature-extraction",
    "Supabase/gte-small"
  );

  const text = body.objectives + body.description + body.title + body.activites;
  console.log(text);

  return NextResponse.json({ message: "success" });
}
