"use client";

import { navigate } from "@/app/server-actions/actions";

export default function CreateStudent() {
  return (
    <button
      className="bg-purple-950 text-white hover:bg-purple-300 hover:text-purple-900  text-sm py-4 px-2 rounded-full"
      onClick={() => navigate(`/student`)}
    >
      Crear
    </button>
  );
}
