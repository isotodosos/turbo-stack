import FormStudent from "@/components/FormStudent";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export default async function StudentPage() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/login");
  }

  return (
    <div className="text-center py-l">
      <FormStudent />
    </div>
  );
}
