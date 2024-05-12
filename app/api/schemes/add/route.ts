import { createClient } from "@/utils/supabase/server";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.json();

  const text =
    body.description + body.objectives + body.schemeName + body.whoCanApply;
  console.log(text);

  const supabase = createClient();

  const { data } = await supabase.functions.invoke("embed", {
    body: {
      input: text,
    },
  });

  const { embedding } = data;
  console.log(embedding.length);

  const response = await supabase.from("cgtmse_scheme").insert({
    scheme_id: body.schemeId,
    scheme_name: body.schemeName,
    guarantee_cover: body.guaranteeCover,
    objectives: body.objectives,
    description: body.description,
    activities: body.activities,
    who_can_apply: body.whoCanApply,
    scheme_guidelines_link: body.guidelinesLink,
    performance_achievements_link: body.achievementsLink,
    embedding: embedding,
  });

  console.log(response);

  return NextResponse.json({ message: embedding });
}
