import Graph from "../components/Graph";
import Graph2 from "../components/Graph2";
import GraphEnergy from "../components/GraphEnergy";
import GraphPlug from "../components/GraphPlug";
import GraphAll from "../components/GraphAll";
import GraphEmer from "../components/GraphEmer";
import GraphTemp from "../components/GraphTemp";
import { useState } from 'react'

function DashboardPage() {
  const [checkedItems, setCheckedItems] = useState([]);
  //console.log(checkedItems);

  function checkItemHandler(id, isChecked) {
    if(isChecked) { // check
      setCheckedItems([...checkedItems,id]);
    } else { // uncheck
      setCheckedItems(checkedItems.filter((ele) => ele !== id));
    }
  }

  function deleteGraphs() {
    if(checkedItems.length > 0) {
      checkedItems.forEach((ele) => {
        // const idx = ControlDeviceData.findIndex(function (item) { return item.id === ele }); // 서버 연결해서 받아온 데이터리스트 -> ControlDeviceData 이름 바꿔서 넣기
        // ControlDeviceData.splice(idx, 1);
        // window.location.replace('/Dashboard'); // 서버 연결하고나서는 새로고침해서 리스트 다시 받아와야함
        setCheckedItems([]);
        alert("서버 연결 좀요...");
      }
      );
    } else {
      alert("선택한 그래프가 없습니다.");
    }
  }

  return (
    <div className="w-full px-7 py-3 flex-col flex flex-1">
      <div className="flex flex-row items-center mb-3 h-10 justify-end">
        <button type="button" className="w-60 h-full text-sm text-white font-semibold ml-1.5 shadow-md bg-blue-500 rounded-md hover:bg-blue-600">ADD GRAPH</button>
      </div>
      <div className="relative flex-1">
        {localStorage.user === '총무부1' ? <GraphEnergy /> : null}
        {localStorage.user === '총무부1' ? <GraphPlug /> : null}
        {localStorage.user === '총무부2' ? <GraphAll /> : null}
        {localStorage.user === '정보처' ? <GraphEmer /> : null}
        {localStorage.user === '정보처' ? <GraphTemp /> : null}
      </div>
    </div>
  );
}
        //<Graph handler={checkItemHandler} id={1}/>
        //<Graph handler={checkItemHandler} id={2}/>
        //<button type="button" onClick={deleteGraphs} className="w-60 h-full text-sm text-white font-semibold mr-1.5 shadow-md bg-red-500 rounded-md hover:bg-red-600">DELETE GRAPH</button>

export default DashboardPage;
