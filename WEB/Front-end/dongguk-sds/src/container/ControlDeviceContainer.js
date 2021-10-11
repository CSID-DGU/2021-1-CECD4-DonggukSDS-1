import { useState } from 'react';
import { HiSearch } from 'react-icons/hi'
import { AiFillSetting } from 'react-icons/ai'
import { ControlDeviceData } from '../dummyDatas/ControlDeviceData';

function ControlDeviceContainer() {
  const [checkedItems, setCheckedItems] = useState([]);

  function checkItemHandler(id, isChecked) {
    if(isChecked) { // check
      setCheckedItems([...checkedItems,id]);
    } else { // uncheck
      setCheckedItems(checkedItems.filter((ele) => ele !== id));
    }
  }

  function checkAllItemsHandler(checked) {
    if(checked) {
      const idArray = [];
      ControlDeviceData.forEach((ele) => idArray.push(ele.id));
      setCheckedItems(idArray);
    } else {
      setCheckedItems([]);
    }
  }

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
        <button type="button" className="w-80 h-full text-sm text-white font-semibold shadow-md bg-blue-500 rounded-md hover:bg-blue-600">ADD DEVICE</button>

      </div>

      <div className="rounded-lg border border-gray-300 p-1">
        <table className="table-fixed w-full">
          <thead>
            <tr className="h-10 text-sm font-light text-gray-300 text-left border-b-2">
              <th className="w-1/12 text-center"><input type="checkbox" name="selected_all" onChange={(e) => checkAllItemsHandler(e.target.checked)} checked={ checkedItems.length === ControlDeviceData.length }/></th>
              <th className="w-2/12">Name</th>
              <th className="w-3/12">Location</th>
              <th className="w-3/12">Column</th>
              <th className="w-1/12">Status</th>
              <th className="w-1/12">Cycle</th>
              <th className="w-1/12 text-center">Setting</th>
            </tr>
          </thead>
          <tbody className="text-sm font-normal divide-y divide-gray-200">
            { ControlDeviceData.map((item, index) => {
                    return (
                      <tr className="m-4 h-12" key={index}>
                        <td className="w-1/12 text-center"><input type="checkbox" name="selected" value={`ROW_`+index} onChange={(e) => checkItemHandler(item.id, e.target.checked)} checked={ checkedItems.length === ControlDeviceData.length || checkedItems.includes(item.id) }/></td>
                        <td className="w-2/12">{item.name}</td>
                        <td className="w-3/12">{item.location}</td>
                        <td className="w-3/12">{item.column}</td>
                        <td className="w-1/12">{item.status}</td>
                        <td className="w-1/12">{item.cycle}</td>
                        <td className="w-1/12"><AiFillSetting className="text-gray-800 m-auto" size="20" /></td>
                      </tr>
                    )
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ControlDeviceContainer;
