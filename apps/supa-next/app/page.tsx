import { createClient } from "@/utils/supabase/server";
import Login from "./login/page";
import ProtectedPage from "./protected/page";

export default async function Index({ searchParams }: any) {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();
  return (
    <div className="flex-1 w-full flex flex-col gap-20 items-center">
      {user ? <ProtectedPage /> : <Login searchParams={searchParams} />}
    </div>
  );
}
