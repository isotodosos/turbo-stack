type Student = {
  id: string;
  created: string;
  name: string;
  age: string;
  city: string;
};
export default async function FormStudent() {
  return (
    <div className="flex flex-col justify-between mx-20 pt-8">
      <div className="flex items-center justify-between w-full">
        <h1 className="text-center mb-8 text-2xl bold">
          Formulario de estudiante
        </h1>
      </div>
      <div className="border-slate-400 border-[2px] rounded shadow-lg">
        Aqui el formulario
      </div>
    </div>
  );
}
