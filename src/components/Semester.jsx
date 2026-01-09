import Course from "./Course";

function Semester() {
    return (
        <div className="flex flex-col gap-4">
            <Course/>
            <Course/>
            <Course/>
            <Course/>
        </div>
    );
}

export default Semester;