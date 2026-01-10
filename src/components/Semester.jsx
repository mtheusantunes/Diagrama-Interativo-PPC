import Course from "./Course";

function Semester(props) {

  const courses = props.semester.courses;
  return (
    <div className="flex flex-col gap-4">
      <div
        className="flex justify-center bg-violet-950 border-4 rounded-xl border-violet-700 
         text-white font-bold text-base items-center h-12"
      >
        <p>{props.semester.name}</p>
      </div>
      {courses.map((course) => (
        <Course key={course.id} course={course} onCourseClick={props.onCourseClick}/>
      ))}
    </div>
  );
}

export default Semester;
