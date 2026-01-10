import "./App.css";
import { SEMESTER_LIST } from "./data/semester-list";
import Semester from "./components/Semester";
import { useState } from "react";
import { COURSE_STATUS } from "./constants/COURSE_STATUS";

function App() {
  const [semesters, setSemesters] = useState(SEMESTER_LIST);

  function onCourseClick(courseId) {
    setSemesters((prevSemesters) =>
      prevSemesters.map((semester) => ({
        ...semester,
        courses: semester.courses.map((course) =>
          course.id === courseId
            ? { ...course, status: COURSE_STATUS.DONE }
            : course
        )
      }))
    );
  }

  return (
    <div className="w-full h-full bg-violet-900 flex flex-col justify-center p-6 overflow-x-hidden">
      <h1 className="text-white text-center">
        Projeto Pedagógico de Curso (PPC) - Ciência da Computação
      </h1>
      <div className="grid overflow-x-auto scrollbar-gutter-stable custom-scroll md:scrollbar-thin">
        <div className="flex gap-4 my-2 mx-auto">
          <Semester semester={semesters.find((s) => s.id === 1)} onCourseClick={onCourseClick}/>
          <Semester semester={semesters.find((s) => s.id === 2)} onCourseClick={onCourseClick}/>
          <Semester semester={semesters.find((s) => s.id === 3)} onCourseClick={onCourseClick}/>
          <Semester semester={semesters.find((s) => s.id === 4)} onCourseClick={onCourseClick}/>
          <Semester semester={semesters.find((s) => s.id === 5)} onCourseClick={onCourseClick}/>
          <Semester semester={semesters.find((s) => s.id === 6)} onCourseClick={onCourseClick}/>
          <Semester semester={semesters.find((s) => s.id === 7)} onCourseClick={onCourseClick}/>
          <Semester semester={semesters.find((s) => s.id === 8)} onCourseClick={onCourseClick}/>
          <Semester semester={semesters.find((s) => s.id === 9)} onCourseClick={onCourseClick}/>
          <Semester semester={semesters.find((s) => s.id === 10)} onCourseClick={onCourseClick}/>
        </div>
      </div>
    </div>
  );
}

export default App;
