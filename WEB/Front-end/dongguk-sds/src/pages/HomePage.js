import { AiFillNotification } from 'react-icons/ai';
import { RiErrorWarningFill } from 'react-icons/ri'

function HomePage() {
  return (
    <div className="flex flex-col w-full h-screen px-7 py-6">
      <div className="flex flex-row items-center mb-6 justify-between">
        <p className="w-min text-xl font-bold text-gray-800">Home</p>
        <div className="flex flex-row items-center">
          <p className="text-sm font-medium">Song Hyemin</p>
          <img className="w-9 h-9 rounded-full items-end ml-3" src="/hedgehog.jpeg"/>
        </div>
      </div>
      
      
      <div className="flex flex-col h-3/5 w-full mb-6 rounded-lg border border-gray-300 p-6">
          <p className="font-bold text-base mb-1">신공학관 전체 전기 사용량</p>
          <p className="font-medium text-xs text-gray-400 mb-1">2021-05-16 01:51:00</p>
          <div>
            그래프 들어갈 자리
          </div>

      </div>
      <div className="flex flex-row h-2/5">
        <div className="flex w-1/2 h-full">
          <div className="rounded-lg border border-gray-300 p-6 w-full mr-3">
            <div className="flex flex-row items-center">
              <AiFillNotification className="text-yellow-400" size="20" />
              <p className="font-bold text-base ml-2">Today’s Notification</p>
            </div>


          </div>
        </div>

        <div className="flex w-1/2 h-full">
          <div className="rounded-lg border border-gray-300 p-6 w-full ml-3">
            <div className="flex flex-row items-center">
              <RiErrorWarningFill className="text-red-500" size="20" />
              <p className="font-bold text-base ml-2">Sensor Emergency</p>
            </div>


          </div>
        </div>
      </div>

    </div>
  );
}

export default HomePage;
