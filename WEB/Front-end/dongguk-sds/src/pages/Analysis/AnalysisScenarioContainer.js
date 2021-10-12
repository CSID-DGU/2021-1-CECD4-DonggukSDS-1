import { HiSearch } from 'react-icons/hi'
import { AiFillSetting } from 'react-icons/ai';
import { useState } from 'react';

var AnalysisScenarioData = ["화재 시 시나리오", "강의 시작 10분 전 시나리오"]
function AnalysisScenarioContainer() {
  const [checkedItems, setCheckedItems] = useState([]);
  const [searchName, setSearchName] = useState("");

  function deleteScenarios() {
    if(checkedItems.length > 0) {
      checkedItems.forEach((ele) => {
        const idx = AnalysisScenarioData.findIndex(function (item) { return item === ele });
        AnalysisScenarioData.splice(idx, 1);
        // window.location.replace('/Notification'); // 서버 연결하고나서는 새로고침해서 리스트 다시 받아와야함
        setCheckedItems([]);
      }
      );
    } else {
      alert("선택한 시나리오가 없습니다.");
    }
  }

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
      for(var i = 0 ; i < AnalysisScenarioData.length ; i++) {
        idArray.push(i);
      }
      setCheckedItems(idArray);
    } else {
      setCheckedItems([]);
    }
  }

  function changeSearchName(value) {
    setSearchName(value);
    setCheckedItems([]);
  }

  return (
    <div className="w-full h-full">
      <div className="flex flex-row items-center mb-3 h-10 justify-between">
        <div className="flex w-full h-full mr-3 items-center rounded-lg border border-gray-300 p-2 pl-4 ">
          <HiSearch size="19" color="gray" />
          <input onChange={(e) => changeSearchName(e.target.value)} value={searchName} className="text-sm font-normal border-none ml-3 w-full focus:outline-none" placeholder="Search Name" />
        </div>

        <button type="button" onClick={deleteScenarios} className="w-80 h-full mr-3 text-sm text-white font-semibold shadow-md bg-red-500 rounded-md hover:bg-red-600">DELETE SCENARIO</button>
        <button type="button" className="w-80 h-full text-sm text-white font-semibold shadow-md bg-blue-500 rounded-md hover:bg-blue-600">ADD NEW SCENARIO</button>

      </div>

      <div className="rounded-lg border border-gray-300 p-1">
        <table className="table-fixed w-full">
          <thead>
            <tr className="h-10 text-sm font-light text-gray-300 text-left border-b-2">
              <th className="w-1/12 text-center"><input type="checkbox" name="selected_all" onChange={(e) => checkAllItemsHandler(e.target.checked)} checked={ checkedItems.length === AnalysisScenarioData.length }/></th>
              <th className="w-10/12">Name</th>
              <th className="w-1/12 text-center">Setting</th>
            </tr>
          </thead>

          <tbody className="text-sm font-normal divide-y divide-gray-200">
            {AnalysisScenarioData.filter((ele) => ele.includes(searchName)).map((item, index) => {
              return (
                <tr className="m-4 h-12" key={index}>
                  <td className="w-1/12 text-center"><input type="checkbox" name="selected" value={`ROW_` + index} onChange={(e) => checkItemHandler(index, e.target.checked)} checked={checkedItems.length === AnalysisScenarioData.length || checkedItems.includes(index)} /></td>
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

export default AnalysisScenarioContainer;
