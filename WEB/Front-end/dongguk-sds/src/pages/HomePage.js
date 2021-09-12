import { AiFillNotification } from 'react-icons/ai';
import { RiErrorWarningFill } from 'react-icons/ri'

function HomePage() {
  return (
    <div className="flex flex-col w-full h-full px-7 py-3">    
      <div className="h-3/5 w-full mb-6 rounded-lg border border-gray-300 p-6">
          <p className="font-bold text-base mb-1">신공학관 전체 전기 사용량</p>
          <p className="font-medium text-xs text-gray-400 mb-1">2021-05-16 01:51:00</p>
          <div>
            그래프 들어갈 자리
          </div>

      </div>
      <div className="flex flex-row">
        <div className="flex w-1/2">
          <div className="rounded-lg border border-gray-300 p-6 w-full mr-3">
            <div className="flex flex-row items-center">
              <AiFillNotification className="text-yellow-400" size="20" />
              <p className="font-bold text-base ml-2">Today’s Notification</p>
            </div>
            <table className="table-fixed w-full mt-3">
              <tbody className="text-sm font-normal text-left divide-y divide-gray-200">
                <tr className="m-4 h-12">
                  <td className="w-9/12">안녕하세요</td>
                  <td className="w-3/12 text-gray-400 text-right">송혜민</td>
                </tr>
                <tr className="m-4 h-12">
                  <td className="w-9/12">안녕하세요</td>
                  <td className="w-3/12 text-gray-400 text-right">송혜민</td>
                </tr>
                <tr className="m-4 h-12">
                  <td className="w-9/12">안녕하세요</td>
                  <td className="w-3/12 text-gray-400 text-right">송혜민</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="flex w-1/2">
          <div className="rounded-lg border border-gray-300 p-6 w-full ml-3">
            <div className="flex flex-row items-center">
              <RiErrorWarningFill className="text-red-500" size="20" />
              <p className="font-bold text-base ml-2">Sensor Emergency</p>
            </div>
            <table className="table-fixed w-full mt-3">
              <tbody className="text-sm font-normal text-left divide-y divide-gray-200">
                <tr className="m-4 h-12">
                  <td className="w-6/12">스마트 전등스위치</td>
                  <td className="w-6/12 text-gray-400 text-right">신공학관 4층 4011</td>
                </tr>
                <tr className="m-4 h-12">
                  <td className="w-6/12">스마트 전등스위치</td>
                  <td className="w-6/12 text-gray-400 text-right">신공학관 4층 4011</td>
                </tr>
                <tr className="m-4 h-12">
                  <td className="w-6/12">스마트 전등스위치</td>
                  <td className="w-6/12 text-gray-400 text-right">신공학관 4층 4011</td>
                </tr>
              </tbody>
            </table>


          </div>
        </div>
      </div>

    </div>
  );
}

export default HomePage;
