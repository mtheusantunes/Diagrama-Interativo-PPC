import Course from "./Course";

function Semester({ semester, onCourseClick, isAvailable}) {
  const courses = semester.courses;
  return (
    <div className="flex flex-col gap-4">
      <div
        className="flex justify-center bg-violet-950 border-4 rounded-xl border-violet-700 
         text-white font-bold text-base items-center h-12"
      >
        <p>{semester.name}</p>
      </div>
      {courses.map((course) => (
        <Course
          key={course.id}
          course={course}
          onCourseClick={onCourseClick}
          isAvailable={isAvailable}
        />
      ))}
    </div>
  );
}

export default Semester;
