import { createClient } from "@/utils/supabase/server";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.json();

  const text = body.input;
  console.log(text);

  const supabase = createClient();

  const { data } = await supabase.functions.invoke("embed", {
    body: {
      input: text,
    },
  });

  const { embedding } = data;
  console.log(embedding.length);

  const match_threshold = 0.2;

  let res = await supabase.rpc("query_embeddings", {
    embedding,
    match_threshold,
  });
  if (res.error) console.error(res.error);
  else console.log(data);

  return NextResponse.json({ message: data });
}
