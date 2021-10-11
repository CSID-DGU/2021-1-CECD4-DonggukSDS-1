import { HiSearch } from 'react-icons/hi'
import { AiFillSetting } from 'react-icons/ai'
import { useState } from 'react';

var AnalysisModelData = ["강의 종료 모델", "인물 존재 감지"]
function AnalysisModelContainer() {
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
      for(var i = 0 ; i < AnalysisModelData.length ; i++) {
        idArray.push(i);
      }
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

        <button type="button" className="w-80 h-full mr-3 text-sm text-white font-semibold shadow-md bg-red-500 rounded-md hover:bg-red-600">DELETE MODEL</button>
        <button type="button" className="w-80 h-full text-sm text-white font-semibold shadow-md bg-blue-500 rounded-md hover:bg-blue-600">ADD NEW MODEL</button>

      </div>

      <div className="rounded-lg border border-gray-300 p-1">
        <table className="table-fixed w-full">
          <thead>
            <tr className="h-10 text-sm font-light text-gray-300 text-left border-b-2">
              <th className="w-1/12 text-center"><input type="checkbox" name="selected_all" onChange={(e) => checkAllItemsHandler(e.target.checked)} checked={ checkedItems.length === AnalysisModelData.length } /></th>
              <th className="w-10/12">Name</th>
              <th className="w-1/12 text-center">Setting</th>
            </tr>
          </thead>

          <tbody className="text-sm font-normal divide-y divide-gray-200">
          { AnalysisModelData.map((item, index) => {
                    return (
                      <tr className="m-4 h-12">
                        <td className="w-1/12 text-center"><input type="checkbox" name="selected" value={`ROW_`+index}  onChange={(e) => checkItemHandler(index, e.target.checked)} checked={ checkedItems.length === AnalysisModelData.length || checkedItems.includes(index) }/></td>
                        <td className="w-10/12">{item}</td>
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

export default AnalysisModelContainer;
