import { IoMdWifi } from 'react-icons/io'
import { BiDevices } from 'react-icons/bi'
import ControlSensorContainer from '../components/ControlSensorContainer'

function ControlPage() {
  return (
    <div className="w-full h-full">
      <div className="flex justify-between mb-3">
        <button className="flex flex-col mr-3 w-1/2 pb-3 pt-3 rounded-lg border-2 border-blue-500 ring-2 ring-blue-300 items-center">
          <IoMdWifi className="text-blue-500" size="48"/>
          <span className="text-blue-500 text-lg font-medium">Sensor</span>
        </button>
        <button className="flex flex-col w-1/2 pb-3 pt-3 rounded-lg border border-gray-300 items-center">
          <BiDevices className="text-gray-400" size="48"/>
          <span className="text-gray-400 text-lg font-medium">Device</span>
        </button>
      </div>
      <ControlSensorContainer/>
    </div>
  );
}

export default ControlPage;
