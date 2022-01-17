const Dialog = (props) => {
  return (
    <div
      class={`fixed  inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full`}
      id="my-modal"
    >
      <div class="relative top-20 mx-auto p-5 border w-5/12 shadow-lg rounded-md bg-white">
        <p
          onClick={props.toggle}
          className="w-full text-right underline cursor-pointer"
        >
          Close
        </p>
        <div class="mt-3 text-center">
          <h3 class="text-2xl font-bold leading-6  text-gray-900">
            Student Name
          </h3>

          <div className="flex flex-col w-full items-start">
            <h1 className="font-medium text-xl mb-2">Enrolled Courses</h1>
            <div className="w-full min-h-[6rem] border-2 border-gray-200 rounded-md flex flex-wrap pb-3">
              <div className="h-10 bg-green-300 rounded-2xl mt-3 mx-3 px-4 flex items-center justify-center">
                <p className="my-auto">Javascript</p>
              </div>
            </div>
            <div className="w-full flex justify-between items-center">
              <input
                className=" w-7/12 border-2 rounded-lg p-3 my-4 h-14"
                type="text"
              />
              <button className=" w-4/12 bg-green-600 hover:bg-green-700 rounded-xl h-11 text-white ">
                Add Course
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialog;
