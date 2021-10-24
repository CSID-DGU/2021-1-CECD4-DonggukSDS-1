import { useState } from 'react';
import { HiSearch } from 'react-icons/hi'
import { AiFillSetting } from 'react-icons/ai';
import { ControlSensorData } from '../../dummyDatas/ControlSensorData';
import ControlSettingModal from '../../modal/ControlSettingModal';

function ControlSensorContainer() {
  const [checkedItems, setCheckedItems] = useState([]);
  const [searchName, setSearchName] = useState("");
  const [filterLocation, setFilterLocation] = useState("");
  const [filterStatus, setFilterStatus] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [info, setInfos] = useState({
    "Name": '',
    "Column": '',
    "Cycle": ''
  });

  function handleModalClose() {
    setModalIsOpen(false);
  }
  function handleModalOpen(name, column, cycle) {
    setInfos({
      "Name": name,
      "Column": column,
      "Cycle": cycle
    })
    setModalIsOpen(true);
  }

  function deleteSensors() {
    if(checkedItems.length > 0) {
      checkedItems.forEach((ele) => {
        const idx = ControlSensorData.findIndex(function (item) { return item.id === ele });
        ControlSensorData.splice(idx, 1);
        // window.location.replace('/Notification'); // 서버 연결하고나서는 새로고침해서 리스트 다시 받아와야함
        setCheckedItems([]);
      }
      );
    } else {
      alert("선택한 센서가 없습니다.");
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
      ControlSensorData.forEach((ele) => idArray.push(ele.id));
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
    { modalIsOpen ? <ControlSettingModal info={info} onClose={handleModalClose}/> : <></>}
      <div className="flex flex-row items-center mb-3 h-10 justify-between">
        <div className="flex w-full h-full mr-3 items-center rounded-lg border border-gray-300 p-2 pl-4 ">
          <HiSearch size="19" color="gray" />
          <input onChange={(e) => changeSearchName(e.target.value)} value={searchName} className="text-sm font-normal border-none ml-3 w-full focus:outline-none" placeholder="Search Name" />
        </div>

        <select name="select-location" onChange={(e) => setFilterLocation(e.target.value)} id="location-option-select" className="w-60 h-full mr-3 rounded-lg border border-gray-300 text-sm font-normal focus:outline-none">
          <option value="">Location</option>
          <option value="신공학관">신공학관</option>
          <option value="원흥관">원흥관</option>
          <option value="혜화관">혜화관</option>
        </select>

        <select name="select-status" onChange={(e) => setFilterStatus(e.target.value)} id="location-option-select" className="w-60 h-full mr-3 rounded-lg border border-gray-300 text-sm font-normal focus:outline-none">
        <option value="">Status</option>
          <option value="ON">ON</option>
          <option value="ERROR">ERROR</option>
          <option value="OFF">OFF</option>
        </select>

        <button type="button" onClick={deleteSensors} className="w-80 h-full mr-3 text-sm text-white font-semibold shadow-md bg-red-500 rounded-md hover:bg-red-600">DELETE SENSOR</button>
        <button type="button" onClick={() => handleModalOpen('', '', '')} className="w-80 h-full text-sm text-white font-semibold shadow-md bg-blue-500 rounded-md hover:bg-blue-600">ADD SENSOR</button>
      </div>

      <div className="rounded-lg border border-gray-300 p-1">
        <table className="table-fixed w-full">
          <thead>
            <tr className="h-10 text-sm font-light text-gray-300 text-left border-b-2">
              <th className="w-1/12 text-center"><input type="checkbox" name="selected_all" onChange={(e) => checkAllItemsHandler(e.target.checked)} checked={ checkedItems.length === ControlSensorData.length } /></th>
              <th className="w-2/12">Name</th>
              <th className="w-3/12">Location</th>
              <th className="w-3/12">Column</th>
              <th className="w-1/12">Status</th>
              <th className="w-1/12">Cycle</th>
              <th className="w-1/12 text-center">Setting</th>
            </tr>
          </thead>

          <tbody className="text-sm font-normal divide-y divide-gray-200">
            {ControlSensorData.filter((ele) => ele.name.includes(searchName) && ele.location.includes(filterLocation) && ele.status.includes(filterStatus)).map((item, index) => {
              return (
                <tr className="m-4 h-12" key={index}>
                  <td className="w-1/12 text-center"><input type="checkbox" name="selected" value={`ROW_` + index} onChange={(e) => checkItemHandler(item.id, e.target.checked)} checked={checkedItems.length === ControlSensorData.length || checkedItems.includes(item.id)} /></td>
                  <td className="w-2/12">{item.name}</td>
                  <td className="w-3/12">{item.location}</td>
                  <td className="w-3/12">{item.column}</td>
                  <td className="w-1/12">{item.status}</td>
                  <td className="w-1/12">{item.cycle}</td>
                  <td className="w-1/12"><div className="flex items-center"><button className="text-gray-800 m-auto" onClick={() => handleModalOpen(item.name, item.column, item.cycle)}><AiFillSetting size="20"/></button></div></td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ControlSensorContainer;
