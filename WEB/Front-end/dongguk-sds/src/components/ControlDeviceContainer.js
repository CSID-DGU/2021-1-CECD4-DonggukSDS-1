import { HiSearch } from 'react-icons/hi'
import { AiFillSetting } from 'react-icons/ai'


function ControlDeviceContainer() {

  return (
    <div className="w-full h-full">
      <div className="flex flex-row items-center mb-3 h-10 justify-between">
        <div className="flex w-full h-full mr-3 items-center rounded-lg border border-gray-300 p-2 pl-4 ">
          <HiSearch size="19" color="gray" />
          <input className="text-sm font-normal border-none ml-3 w-full focus:outline-none" placeholder="Search Name" />
        </div>

        <select name="select-location" id="location-option-select" className="w-60 h-full mr-3 rounded-lg border border-gray-300 text-sm font-normal focus:outline-none">
          <option value="신공학관">신공학관</option>
          <option value="신공학관">원흥관</option>
          <option value="혜화관">혜화관</option>
        </select>

        <select name="select-status" id="location-option-select" className="w-60 h-full mr-3 rounded-lg border border-gray-300 text-sm font-normal focus:outline-none">
          <option value="정상">정상</option>
          <option value="오류 발생">오류 발생</option>
          <option value="OFF">OFF</option>
        </select>

        <button type="button" className="w-80 h-full mr-3 text-sm text-white font-semibold shadow-md bg-red-500 rounded-md hover:bg-red-600">DELETE DEVICE</button>
        <button type="button" className="w-80 h-full text-sm text-white font-semibold shadow-md bg-blue-500 rounded-md hover:bg-blue-600">WRITE DEVICE</button>

      </div>

      <div className="rounded-lg border border-gray-300 p-1">
        <table className="table-fixed w-full">
          <thead>
            <tr className="h-10 text-sm font-light text-gray-300 text-left border-b-2">
              <th className="w-1/12 text-center"><input type="checkbox" name="selected_all" /></th>
              <th className="w-2/12">Name</th>
              <th className="w-2/12">Location</th>
              <th className="w-2/12">Column</th>
              <th className="w-2/12">Status</th>
              <th className="w-2/12">Cycle</th>
              <th className="w-1/12 text-center">Setting</th>
            </tr>
          </thead>

          <tbody className="text-sm font-normal divide-y divide-gray-200">
            <tr className="m-4 h-12">
              <td className="w-1/12 text-center"><input type="checkbox" name="selected" value="ROW_1" /></td>
              <td className="w-2/12">에어컨/히터1</td>
              <td className="w-2/12">신공학관 3층 3106</td>
              <td className="w-2/12">3106_airconditioner1</td>
              <td className="w-2/12">정상</td>
              <td className="w-2/12">10분</td>
              <td className="w-1/12"><AiFillSetting className="text-gray-800 m-auto" size="20"/></td>
            </tr>
            <tr className="m-4 h-12">
              <td className="w-1/12 text-center"><input type="checkbox" name="selected" value="ROW_1" /></td>
              <td className="w-2/12">에어컨/히터2</td>
              <td className="w-2/12">신공학관 3층 3107</td>
              <td className="w-2/12">3107_airconditioner2</td>
              <td className="w-2/12">정상</td>
              <td className="w-2/12">10분</td>
              <td className="w-1/12"><AiFillSetting className="text-gray-800 m-auto" size="20"/></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ControlDeviceContainer;
