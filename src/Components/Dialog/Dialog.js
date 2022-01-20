import axios from "axios";
import { useEffect, useState } from "react";

const Dialog = (props) => {
  useEffect(() => {
    getCourses();
  }, []);

  const [courses, setCourses] = useState([]);
  const [course, setCourse] = useState("");

  const addCourse = async (e) => {
    e.preventDefault();
    const response = await axios.post(
      `/api/v1/student/addCourse/${props.id}`,
      {
        course: {
          courseName: course,
        },
      },
      {
        headers: {
          "Content-type": "application/json",
          "x-access-token": localStorage.getItem("token"),
        },
      }
    );

    if (response.data.statusCode === 200) {
      setCourses([
        ...courses,
        {
          courseName: course,
        },
      ]);
      setCourse("");
    }
  };

  const getCourses = async () => {
    console.log("hii");
    const response = await axios.get(
      `/api/v1/student/viewCourses/${props.id}`,
      {
        headers: {
          "Content-type": "application/json",
          "x-access-token": localStorage.getItem("token"),
        },
      }
    );

    if (response.data.statusCode === 200) {
      console.log(response.data.data);
      setCourses(response.data.data);
    }
  };

  return (
    <div
      className={`fixed  inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full`}
      id="my-modal"
    >
      <div className="relative top-20 mx-auto p-5 border w-5/12 shadow-lg rounded-md bg-white">
        <p
          onClick={props.toggle}
          className="w-full text-right underline cursor-pointer"
        >
          Close
        </p>
        <div className="mt-3 text-center">
          <h3 className="text-2xl font-bold leading-6  text-gray-900">
            {props.name}
          </h3>

          <div className="flex flex-col w-full items-start">
            <h1 className="font-medium text-xl mb-2">Enrolled Courses</h1>
            <div className="w-full min-h-[6rem] border-2 border-gray-200 rounded-md flex flex-wrap pb-3">
              {courses.map((course) => (
                <div className="h-10 bg-green-300 rounded-2xl mt-3 mx-3 px-4 flex items-center justify-center">
                  <p className="my-auto">{course.courseName}</p>
                </div>
              ))}
            </div>
            <form
              onSubmit={addCourse}
              className="w-full flex justify-between items-center"
            >
              <input
                className=" w-7/12 border-2 rounded-lg p-3 my-4 h-14"
                type="text"
                required={true}
                value={course}
                onChange={(e) => setCourse(e.target.value)}
              />
              <button
                type="submit"
                className=" w-4/12 bg-green-600 hover:bg-green-700 rounded-xl h-11 text-white "
              >
                Add Course
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialog;
