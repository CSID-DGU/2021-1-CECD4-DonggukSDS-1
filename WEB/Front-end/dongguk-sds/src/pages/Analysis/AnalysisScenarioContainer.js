import AnalysisScenarioModal from '../../modal/AnalysisScenarioModal'
import { HiSearch } from 'react-icons/hi'
import { AiFillSetting } from 'react-icons/ai';
import { useState } from 'react';
import { useHistory, Link } from "react-router-dom";


var AnalysisScenarioData = [
  {
    scenario_id: 1,
    scenario_name: "전기 사용량 분석",
    comments: '신공 5147 전기 사용량을 분석하여 알람을 보낸다',
    active: "on",
    fire: "not"
  },
  {
    scenario_id: 2,
    scenario_name: "전기 사용량 분석",
    comments: '신공 5147 온도가 28도 이상이면 에어컨을 킨다',
    active: "on",
    fire: "not"
  }]
function AnalysisScenarioContainer() {
  const [checkedItems, setCheckedItems] = useState([]);
  const [searchName, setSearchName] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function handleModalClose() {
    setModalIsOpen(false);
  }
  function handleModalOpen(name, column, cycle) {
    setModalIsOpen(true);
  }

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
    <div className="w-full px-7 py-3">
            { modalIsOpen ? <AnalysisScenarioModal onClose={handleModalClose}/> : <></>}
      <div className="flex flex-row items-center mb-3 h-10 justify-between">
        <div className="flex w-full h-full mr-3 items-center rounded-lg border border-gray-300 p-2 pl-4 ">
          <HiSearch size="19" color="gray" />
          <input onChange={(e) => changeSearchName(e.target.value)} value={searchName} className="text-sm font-normal border-none ml-3 w-full focus:outline-none" placeholder="Search Name" />
        </div>

        <button type="button" onClick={deleteScenarios} className="w-80 h-full mr-3 text-sm text-white font-semibold shadow-md bg-red-500 rounded-md hover:bg-red-600">DELETE SCENARIO</button>
        <button type="button" onClick={handleModalOpen} className="w-80 h-full text-sm text-white font-semibold shadow-md bg-blue-500 rounded-md hover:bg-blue-600">ADD NEW SCENARIO</button>

      </div>

      <div className="rounded-lg border border-gray-300 p-1">
        <table className="table-fixed w-full">
          <thead>
            <tr className="h-10 text-sm font-light text-gray-300 text-left border-b-2">
              <th className="w-1/12 text-center"><input type="checkbox" name="selected_all" onChange={(e) => checkAllItemsHandler(e.target.checked)} checked={ checkedItems.length === AnalysisScenarioData.length }/></th>
              <th className="w-1/12">Scenario ID</th>
              <th className="w-2/12">Name</th>
              <th className="w-6/12">Comments</th>
              <th className="w-1/12 ">Active{"\n"}(ON/OFF)</th>
              <th className="w-1/12 ">Fire{"\n"}(O/!)</th>
            </tr>
          </thead>

          <tbody className="text-sm font-normal divide-y divide-gray-200">
            {AnalysisScenarioData.filter((ele) => ele.scenario_name.includes(searchName)).map((item, index) => { // Link to에서 index->item id로 바꿔야함
              return (
                <tr className="m-4 h-12" key={index}>
                  <td className="w-1/12 text-center"><input type="checkbox" name="selected" value={`ROW_` + index} onChange={(e) => checkItemHandler(index, e.target.checked)} checked={checkedItems.length === AnalysisScenarioData.length || checkedItems.includes(index)} /></td>
                  <td className="w-1/12">{item.scenario_id}</td>
                  <td className="w-2/12"><Link to={`Analysis/${item.scenario_id}`}>{item.scenario_name}</Link></td>
                  <td className="w-6/12">{item.comments}</td>
                  <td className="w-1/12 items-center"><button type="button" className="w-1/3 h-full mr-10 text-sm text-white font-semibold shadow-md bg-blue-500 rounded-md hover:bg-red-600 items-center">ON</button></td> 
                  <td className="w-1/12 text-center">
                  <button type="button" className="w-1/3 h-full mr-10 text-sm text-white font-semibold shadow-md bg-blue-500 rounded-md hover:bg-red-600 items-center">ON</button>
                  </td>
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
