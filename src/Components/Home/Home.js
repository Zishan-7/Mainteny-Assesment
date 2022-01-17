import { useState } from "react";
import Dialog from "../Dialog/Dialog";

const Home = () => {
  const [showDialog, setshowDialog] = useState(false);

  const toggleShow = () => {
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
                Gender
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
            <tr className="bg-white h-16">
              <td className="p-3 text-base text-gray-700 whitespace-nowrap">
                Student 1
              </td>
              <td className="p-3 text-base text-gray-700 whitespace-nowrap">
                Male
              </td>
              <td className="p-3 text-base text-gray-700 whitespace-nowrap">
                abc@gmail.com
              </td>
              <td className="p-3 text-base text-gray-700 whitespace-nowrap">
                123456789
              </td>
              <td onClick={toggleShow}>
                <button className="px-3 py-2 text-sm  whitespace-nowrap bg-blue-400 rounded-xl text-white">
                  View Courses
                </button>
              </td>
            </tr>
            <tr className="bg-[#f1f9f7] h-16">
              <td className="p-3 text-base text-gray-700 whitespace-nowrap">
                Student 2
              </td>
              <td className="p-3 text-base text-gray-700 whitespace-nowrap">
                Male
              </td>
              <td className="p-3 text-base text-gray-700 whitespace-nowrap">
                abc@gmail.com
              </td>
              <td className="p-3 text-base text-gray-700 whitespace-nowrap">
                123456789
              </td>
              <td>
                <button className="px-3 py-2 text-sm  whitespace-nowrap bg-blue-400 rounded-xl text-white">
                  View Courses
                </button>
              </td>
            </tr>
            <tr className="bg-white h-16">
              <td className="p-3 text-base text-gray-700 whitespace-nowrap">
                Student 3
              </td>
              {/* <td className="p-3 text-base text-gray-700 whitespace-nowrap">
                C++, Science, History
              </td> */}
              <td className="p-3 text-base text-gray-700 whitespace-nowrap">
                Male
              </td>
              <td className="p-3 text-base text-gray-700 whitespace-nowrap">
                abc@gmail.com
              </td>
              <td className="p-3 text-base text-gray-700 whitespace-nowrap">
                123456789
              </td>
              <td>
                <button className="px-3 py-2 text-sm  whitespace-nowrap bg-blue-400 rounded-xl text-white">
                  View Courses
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Dialog  */}

      {showDialog && <Dialog toggle={toggleShow} />}
    </div>
  );
};

export default Home;
