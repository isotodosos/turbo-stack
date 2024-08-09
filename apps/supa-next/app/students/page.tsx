import { createClient } from "@/utils/supabase/server";

export default async function Students() {
  const supabase = createClient();
  const { data: students } = await supabase.from("students").select();

  return <pre>{JSON.stringify(students, null, 2)}</pre>;
}
