import { useEffect, useState } from 'react';
import { HiSearch } from 'react-icons/hi'
import { AiFillSetting } from 'react-icons/ai'
import { ControlDeviceData } from '../../dummyDatas/ControlDeviceData';
import ControlSettingModal from '../../modal/ControlSettingModal';

import callAPI from '../../_utils/apiCaller'

function ControlDeviceContainer() {
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
  const [DeviceData, setDeviceData] = useState(ControlDeviceData);

  useEffect(() => {
    callAPI('device/room', 'POST', null, {room_number: 5147}).then(res => {
      setDeviceData(res.data.return);
    })
  }, []);

  console.log(DeviceData);

  function filterList() {
    return DeviceData.filter((ele) => ele.device_name.includes(searchName) && ele.room_name.includes(filterLocation));
  }


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

  function deleteDevices() {
    if(checkedItems.length > 0) {
      checkedItems.forEach((ele) => {
        const idx = ControlDeviceData.findIndex(function (item) { return item.id === ele });
        ControlDeviceData.splice(idx, 1);
        // window.location.replace('/Notification'); // 서버 연결하고나서는 새로고침해서 리스트 다시 받아와야함
        setCheckedItems([]);
      }
      );
    } else {
      alert("선택한 디바이스가 없습니다.");
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
      filterList().forEach((ele) => idArray.push(ele.id));
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

        <button type="button" onClick={deleteDevices} className="w-80 h-full mr-3 text-sm text-white font-semibold shadow-md bg-red-500 rounded-md hover:bg-red-600">DELETE DEVICE</button>
        <button type="button" onClick={() => handleModalOpen('', '', '')} className="w-80 h-full text-sm text-white font-semibold shadow-md bg-blue-500 rounded-md hover:bg-blue-600">ADD DEVICE</button>

      </div>

      <div className="rounded-lg border border-gray-300 p-1">
        <table className="table-fixed w-full">
          <thead>
            <tr className="h-10 text-sm font-light text-gray-300 text-left border-b-2">
              <th className="w-1/12 text-center"><input type="checkbox" name="selected_all" onChange={(e) => checkAllItemsHandler(e.target.checked)} checked={ checkedItems.length === filterList().length && filterList().length !== 0 }/></th>
              <th className="w-2/12">Name</th>
              <th className="w-3/12">Location</th>
              <th className="w-3/12">Id</th>
              <th className="w-1/12">Status</th>
              <th className="w-1/12">Type</th>
              <th className="w-1/12 text-center">Setting</th>
            </tr>
          </thead>
          <tbody className="text-sm font-normal divide-y divide-gray-200">
            {filterList().map((item, index) => {
              return (
                <tr className="m-4 h-12 items-center" key={index}>
                  <td className="w-1/12 text-center"><input type="checkbox" name="selected" value={`ROW_` + index} onChange={(e) => checkItemHandler(item.id, e.target.checked)} checked={checkedItems.length === filterList().length || checkedItems.includes(item.id)} /></td>
                  <td className="w-2/12">{item.device_name}</td>
                  <td className="w-3/12">{item.room_name}</td>
                  <td className="w-3/12">{item.device_id}</td>
                  <td className="w-1/12"><button type="button" className="w-1/3 h-full mr-10 text-sm text-white font-semibold shadow-md bg-blue-500 rounded-md hover:bg-red-600 items-center">ON</button></td>
                  <td className="w-1/12">{item.device_type}</td>
                  <td className="w-1/12"><div className="flex items-center"><button className="text-gray-800 m-auto" onClick={() => handleModalOpen(item.name, item.column, item.cycle, "edit")}><AiFillSetting size="20"/></button></div></td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
                  //<td className="w-1/12">{item.status}</td>
}

export default ControlDeviceContainer;
