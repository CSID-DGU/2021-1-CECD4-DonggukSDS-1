import { HiSearch } from 'react-icons/hi'
import { AiFillSetting } from 'react-icons/ai'
import { useState } from 'react';

var AnalysisModelData = ["강의 종료 모델", "인물 존재 감지"] // TO-DO : 데이터 제대로 받아온거 정해지면 수정해야함.
function AnalysisModelContainer() {
  const [checkedItems, setCheckedItems] = useState([]);
  const [searchName, setSearchName] = useState("");

  function deleteModels() {
    if(checkedItems.length > 0) {
      checkedItems.forEach((ele) => {
        const idx = AnalysisModelData.findIndex(function (item) { return item === ele });
        AnalysisModelData.splice(idx, 1);
        // window.location.replace('/Notification'); // 서버 연결하고나서는 새로고침해서 리스트 다시 받아와야함
        setCheckedItems([]);
      }
      );
    } else {
      alert("선택한 데이터 분석 모델이 없습니다.");
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
      for(var i = 0 ; i < AnalysisModelData.length ; i++) {
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

        <button type="button" onClick={deleteModels} className="w-80 h-full mr-3 text-sm text-white font-semibold shadow-md bg-red-500 rounded-md hover:bg-red-600">DELETE MODEL</button>
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
          { AnalysisModelData.filter((ele) => ele.includes(searchName)).map((item, index) => {
                    return (
                      <tr className="m-4 h-12" key={index} >
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
