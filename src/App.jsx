import "./App.css";
import Semester from "./components/Semester";

function App() {
  return (
    <div className="w-screen h-screen bg-violet-900 flex flex-col justify-center p-6 overflow-x-hidden">
      <h1 className="text-white text-center">
        Projeto Pedagógico de Curso (PPC) - Ciência da Computação
      </h1>
      <div className="grid overflow-x-auto scrollbar-gutter-stable custom-scroll md:scrollbar-thin">
        <div className="flex gap-4 my-2 mx-auto">
          <Semester />
          <Semester />
          <Semester />
          <Semester />
          <Semester />
          <Semester />
          <Semester />
          <Semester />
          <Semester />
          <Semester />
        </div>
      </div>
    </div>
  );
}

export default App;
