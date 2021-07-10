
import { HiSearch } from 'react-icons/hi'
function NotificationPage() {
  return (
    <div className="w-full h-full">
      <div className="flex flex-row items-center mb-3 h-10 justify-between">
        <div className="flex w-full h-full mr-3 items-center rounded-lg border border-gray-300 p-2 pl-4 ">
          <HiSearch size="19" color="gray" />
          <input className="text-sm font-normal border-none ml-3 w-full focus:outline-none" placeholder="Search Title" />
        </div>

        <button type="button" className="w-60 h-full mr-1.5 text-sm text-white font-semibold shadow-md bg-red-500 rounded-md hover:bg-red-600">DELETE POST</button>
        <button type="button" className="w-60 h-full ml-1.5 text-sm text-white font-semibold shadow-md bg-blue-500 rounded-md hover:bg-blue-600">WRITE POST</button>

      </div>

      <div className="rounded-lg border border-gray-300 p-1">
        <table className="table-fixed w-full">
          <thead>
            <tr className="h-10 text-sm font-light text-gray-300 text-left border-b-2">
              <th className="w-1/12 text-center"><input type="checkbox" name="selected_all" /></th>
              <th className="w-8/12">Title</th>
              <th className="w-2/12">Author</th>
              <th className="w-2/12">Date</th>
            </tr>
          </thead>

          <tbody className="text-sm font-normal divide-y divide-gray-200">
            <tr className="m-4 h-12">
              <td className="w-1/12 text-center"><input type="checkbox" name="selected" value="ROW_1" /></td>
              <td className="w-8/12">안녕하세요</td>
              <td className="w-2/12">송혜민</td>
              <td className="w-2/12">2020.07.05, 20:10</td>
            </tr>
            <tr className="m-4 h-12">
              <td className="w-1/12 text-center"><input type="checkbox" name="selected" value="ROW_1" /></td>
              <td className="w-8/12">안녕하세요</td>
              <td className="w-2/12">송혜민</td>
              <td className="w-2/12">2020.07.05, 20:10</td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  );
}

export default NotificationPage;
