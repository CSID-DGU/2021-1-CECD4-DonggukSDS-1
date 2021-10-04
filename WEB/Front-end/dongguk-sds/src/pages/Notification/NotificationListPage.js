import { HiSearch } from 'react-icons/hi'
import { useHistory, Link } from "react-router-dom";
import { NotificationData } from './NotificationData';

function NotificationListPage() {
  const history = useHistory();

  function goToWriteMode() {
    history.push("/Notification/write");
    console.log("click button");
  }

  return (
    <div className="w-full h-full px-7 py-3">
      <div className="flex flex-row items-center mb-3 h-10 justify-between">
        <div className="flex w-full h-full mr-3 items-center rounded-lg border border-gray-300 p-2 pl-4 ">
          <HiSearch size="19" color="gray" />
          <input className="text-sm font-normal border-none ml-3 w-full focus:outline-none" placeholder="Search Title" />
        </div>

        <button type="button" className="w-60 h-full mr-1.5 text-sm text-white font-semibold shadow-md bg-red-500 rounded-md hover:bg-red-600">DELETE POST</button>
        <button type="button" onClick={goToWriteMode} className="w-60 h-full ml-1.5 text-sm text-white font-semibold shadow-md bg-blue-500 rounded-md hover:bg-blue-600">WRITE POST</button>
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

          <tbody className="text-sm font-normal text-left divide-y divide-gray-200">

          { NotificationData.map((item, index) => {
                    return (
                      <tr className="m-4 h-12" key={index}>
                        <td className="w-1/12 text-center"><input type="checkbox" name="selected" value={`ROW_${index}`} /></td>
                        <td className="w-8/12"><Link to={`Notification/${index}`}>{item.title}</Link></td>
                        <td className="w-2/12">{item.author}</td>
                        <td className="w-2/12">{item.date}</td>
                      </tr>
                    )
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default NotificationListPage;
