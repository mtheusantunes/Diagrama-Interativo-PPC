import "./App.css";
import { SEMESTER_LIST } from "./data/semester-list";
import Semester from "./components/Semester";
import { useState } from "react";
import { COURSE_STATUS } from "./constants/COURSE_STATUS";

function App() {
  const [semesters, setSemesters] = useState(SEMESTER_LIST);
  const courses = semesters.flatMap((s) => s.courses);

  const doneIds = new Set(
    courses.filter((c) => c.status === COURSE_STATUS.DONE).map((c) => c.id)
  );

  const isAvailable = (course) => {
    if (!course.prerequisites?.length) return true;
    return course.prerequisites.every((id) => doneIds.has(id));
  };

  function onCourseClick(courseId) {
    setSemesters((prevSemesters) =>
      prevSemesters.map((semester) => ({
        ...semester,
        courses: semester.courses.map((course) =>
          course.id === courseId
            ? course.status === COURSE_STATUS.DONE
              ? { ...course, status: COURSE_STATUS.UNDONE }
              : { ...course, status: COURSE_STATUS.DONE }
            : course
        ),
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
          {semesters.map((semester) => (
            <Semester
              key={semester.id}
              semester={semester}
              onCourseClick={onCourseClick}
              isAvailable={isAvailable}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
