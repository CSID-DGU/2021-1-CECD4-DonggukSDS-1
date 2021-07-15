import { IoMdWifi } from 'react-icons/io'
import { BiDevices } from 'react-icons/bi'
import ControlSensorContainer from '../components/ControlSensorContainer'
import ControlDeviceContainer from '../components/ControlDeviceContainer'
import { useState } from 'react'

function ControlPage() {

  const [page, setPage] = useState("sensor") // or device
  const activeClassName = "flex flex-col w-1/2 pb-3 pt-3 rounded-lg border-2 border-blue-500 ring-2 ring-blue-300 items-center text-blue-500"
  const inActiveClassName = "flex flex-col w-1/2 pb-3 pt-3 rounded-lg border border-gray-300 items-center text-gray-400"

  return (
    <div className="w-full h-full">
      <div className="flex justify-between mb-3">
        <button className={ page == "sensor" ? activeClassName+" mr-3" : inActiveClassName+" mr-3" } onClick={ ()=> setPage("sensor") }>
          <IoMdWifi size="48"/>
          <span className="text-lg font-medium">Sensor</span>
        </button>
        <button className={ page == "device" ? activeClassName : inActiveClassName } onClick={ ()=> setPage("device") }>
          <BiDevices size="48"/>
          <span className="text-lg font-medium">Device</span>
        </button>
      </div>
      { page == "sensor" ? <ControlSensorContainer/> : <ControlDeviceContainer/>}
      
    </div>
  );
}

export default ControlPage;
