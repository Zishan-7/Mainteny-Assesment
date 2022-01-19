import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Dialog from "../Dialog/Dialog";

const Home = () => {
  useEffect(() => {
    getStudents();
  }, []);
  const [showDialog, setshowDialog] = useState(false);
  const [students, setStudents] = useState([]);
  const [studentIndex, setStudentIndex] = useState(0);

  const navigate = useNavigate();

  const getStudents = async () => {
    const response = await axios.get("/api/v1/student/getAllStudents", {
      headers: {
        "Content-type": "application/json",
        "x-access-token": localStorage.getItem("token"),
      },
    });
    if (response.data.statusCode === 403 || response.data.statusCode === 401) {
      navigate("/login");
    }
    if (response.data.statusCode === 200) {
      setStudents(response.data.data);
    }
  };

  const toggleShow = (index) => {
    if (index >= 0) {
      setStudentIndex(index);
    }
    setshowDialog(!showDialog);
  };
  return (
    <div className="mt-4 mx-5 flex flex-col">
      <div className=" w-11/12 overflow-auto rounded-lg mt-3 shadow block mx-auto ">
        <h1 className="text-2xl font-medium text-green-500">Students List</h1>
        <table className="w-full  mt-6 ">
          <thead className="bg-[#f1f9f7] border-b-2 border-gray-200">
            <tr>
              <th className=" p-3 text-base font-semibold tracking-wide text-left">
                Name
              </th>
              <th className=" p-3 text-base font-semibold tracking-wide text-left">
                Address
              </th>
              <th className=" p-3 text-base font-semibold tracking-wide text-left">
                Email
              </th>
              <th className=" p-3 text-base font-semibold tracking-wide text-left">
                Phone No.
              </th>
              <th className=" p-3 text-base font-semibold tracking-wide text-left">
                More
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {students.map((student, index) => (
              <tr
                className={`${
                  (index + 1) % 2 === 0 ? "bg-[#f1f9f7]" : "bg-white"
                } h-16`}
                key={student._id}
              >
                <td className="p-3 text-base text-gray-700 whitespace-nowrap">
                  {student.name}
                </td>
                <td className="p-3 text-base text-gray-700 whitespace-nowrap">
                  {student.address}
                </td>
                <td className="p-3 text-base text-gray-700 whitespace-nowrap">
                  {student.email}
                </td>
                <td className="p-3 text-base text-gray-700 whitespace-nowrap">
                  {student.phoneNo}
                </td>
                <td>
                  <button
                    onClick={() => toggleShow(index)}
                    className="px-3 py-2 text-sm  whitespace-nowrap bg-blue-400 rounded-xl text-white"
                  >
                    View Courses
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Dialog  */}
      {showDialog && (
        <Dialog
          toggle={toggleShow}
          courses={students[studentIndex].courses}
          id={students[studentIndex]._id}
          name={students[studentIndex].name}
        />
      )}
    </div>
  );
};

export default Home;
