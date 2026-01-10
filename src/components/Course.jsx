import { COURSE_STATUS } from "../constants/COURSE_STATUS";

function Course(props) {
  return (
    <div
      onClick={() => props.onCourseClick(props.course.id)}
      className={`w-30 h-24 lg:w-32 text-white border-violet-600
         rounded-xl border-4 flex items-center justify-center font-bold text-xs
         text-center cursor-pointer select-none p-2 hyphens-auto 
         ${
           props.course.status === COURSE_STATUS.AVAILABLE
             ? "bg-lime-500"
             : "bg-black"
         }
         ${
           props.course.status === COURSE_STATUS.DONE
             ? "bg-sky-400"
             : "bg-black"
         }
         `}
    >
      <p>{props.course.name}</p>
    </div>
  );
}

export default Course;
