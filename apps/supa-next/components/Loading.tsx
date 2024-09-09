export const Loading = (students: any) => {
  const { isLoading } = students;
  return (
    <h1>
      {isLoading && (
        <div className="text-center text-red-600 pt-20">Cargando</div>
      )}
    </h1>
  );
};
