import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import Students from "@/components/Students";

export default async function ProtectedPage() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/login");
  }

  return <Students />;
}
