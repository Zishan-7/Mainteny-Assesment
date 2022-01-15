const Home = () => {
  return (
    <div className="mt-4 mx-5 flex flex-col">
      <h1 className="text-2xl font-medium text-green-500">Students List</h1>

      <div class="overflow-auto rounded-lg mt-6 shadow block">
        <table class="w-full">
          <thead class="bg-[#f1f9f7] border-b-2 border-gray-200">
            <tr>
              <th class=" p-3 text-base font-semibold tracking-wide text-left">
                Name
              </th>
              <th class="p-3 text-base font-semibold tracking-wide text-left">
                Courses
              </th>
              <th class=" p-3 text-base font-semibold tracking-wide text-left">
                Gender
              </th>
              <th class=" p-3 text-base font-semibold tracking-wide text-left">
                Email
              </th>
              <th class=" p-3 text-base font-semibold tracking-wide text-left">
                Phone No.
              </th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-100">
            <tr class="bg-white h-16">
              <td class="p-3 text-base text-gray-700 whitespace-nowrap">
                Student 1
              </td>
              <td class="p-3 text-base text-gray-700 whitespace-nowrap">
                Java, Python, Javascript
              </td>
              <td class="p-3 text-base text-gray-700 whitespace-nowrap">
                Male
              </td>
              <td class="p-3 text-base text-gray-700 whitespace-nowrap">
                abc@gmail.com
              </td>
              <td class="p-3 text-base text-gray-700 whitespace-nowrap">
                123456789
              </td>
            </tr>
            <tr class="bg-[#f1f9f7] h-16">
              <td class="p-3 text-base text-gray-700 whitespace-nowrap">
                Student 2
              </td>
              <td class="p-3 text-base text-gray-700 whitespace-nowrap">
                Solidity, Mathematics
              </td>
              <td class="p-3 text-base text-gray-700 whitespace-nowrap">
                Male
              </td>
              <td class="p-3 text-base text-gray-700 whitespace-nowrap">
                abc@gmail.com
              </td>
              <td class="p-3 text-base text-gray-700 whitespace-nowrap">
                123456789
              </td>
            </tr>
            <tr class="bg-white h-16">
              <td class="p-3 text-base text-gray-700 whitespace-nowrap">
                Student 3
              </td>
              <td class="p-3 text-base text-gray-700 whitespace-nowrap">
                C++, Science, History
              </td>
              <td class="p-3 text-base text-gray-700 whitespace-nowrap">
                Male
              </td>
              <td class="p-3 text-base text-gray-700 whitespace-nowrap">
                abc@gmail.com
              </td>
              <td class="p-3 text-base text-gray-700 whitespace-nowrap">
                123456789
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
