import Course from "./Course";

function Semester() {
  return (
    <div className="flex flex-col gap-4">
      <div
        className="flex justify-center bg-violet-950 border-4 rounded-xl border-violet-700 
         text-white font-bold text-base items-center h-12"
      >
        <p>1º Período</p>
      </div>
      <Course />
      <Course />
      <Course />
      <Course />
      <Course />
      <Course />
    </div>
  );
}

export default Semester;
