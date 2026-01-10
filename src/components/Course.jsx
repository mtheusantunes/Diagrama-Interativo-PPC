import { COURSE_STATUS } from "../constants/COURSE_STATUS";

function Course({ course, onCourseClick, isAvailable}) {
  const isDone = course.status === COURSE_STATUS.DONE;
  const isUnlocked = isAvailable(course);

  let displayStatus = course.status;
  if (!isDone) {
    displayStatus = isUnlocked
      ? COURSE_STATUS.AVAILABLE
      :  COURSE_STATUS.UNAVAILABLE;
  }

  return (
    <div
      onClick={() => onCourseClick(course.id)}
      className={`w-30 h-24 lg:w-32 text-white border-violet-600
         rounded-xl border-4 flex items-center justify-center font-bold text-xs
         text-center cursor-pointer select-none p-2 hyphens-auto 
         ${
           displayStatus === COURSE_STATUS.AVAILABLE
             ? "bg-lime-500"
             : displayStatus === COURSE_STATUS.DONE
             ? "bg-sky-400"
             : "bg-black"
         }
         `}
    >
      <p>{course.name}</p>
    </div>
  );
}

export default Course;
