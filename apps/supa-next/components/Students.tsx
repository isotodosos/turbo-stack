import { Loading } from "@/components/Loading";
import { createClient } from "@/utils/supabase/server";
import { Suspense } from "react";
type Student = {
  id: string;
  created: string;
  name: string;
  age: string;
  city: string;
};
export default async function Students() {
  const supabase = createClient();
  const { data: students } = await supabase.from("students").select();

  return (
    <Suspense fallback={<Loading students={students} />}>
      <div className="flex flex-col justify-between mx-20 pt-8">
        <h1 className="text-center mb-8 text-2xl bold">
          Listado de estudiantes
        </h1>
        <div className="border-slate-400 border-[2px] rounded shadow-lg">
          {students?.map((student: Student, i: number) => (
            <div key={student.id} className="flex flex-col gap-4">
              <div
                className={`flex ${students.length - 1 !== i ? "border-b-slate-400 border-b-[1px]" : ""}`}
              >
                <div className="p-8 flex justify-start items-center bg-slate-200 text-gray-500 w-[200px]">
                  <b>{student.name}</b>
                </div>
                <div className="flex flex-col gap-4 py-4 bg-slate-200 text-gray-500 w-[500px]">
                  <ul>
                    <li>{student.city}</li>
                    <li>{student.age}</li>
                    <li>{student.created}</li>
                  </ul>
                </div>
                <div className="p-8 flex gap-6 bg-slate-100">
                  <button className="hover:text-blue-500">M</button>
                  <button className="hover:text-blue-500">E</button>
                  <button className="hover:text-blue-500">D</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Suspense>
  );
}
