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

// cgtmse_scheme (
//     scheme_id INT PRIMARY KEY,
//     scheme_name VARCHAR(100),
//     guarantee_cover VARCHAR(100),
//     objectives TEXT,
//     description TEXT,
//     activities TEXT,
//     who_can_apply TEXT,
//     scheme_guidelines_link VARCHAR(255),
//     performance_achievements_link VARCHAR(255),
//     embedding vector(384)
// );
