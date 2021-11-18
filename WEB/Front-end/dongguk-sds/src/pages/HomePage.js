import { Link } from 'react-router-dom'
import { AiFillNotification } from 'react-icons/ai';
import { RiErrorWarningFill } from 'react-icons/ri';
import { NotificationData } from '../dummyDatas/NotificationData';
import Graph from "../components/Graph";

function HomePage() {
  const dateInstance = new Date()
  const todayString = `${dateInstance.getFullYear()}.${dateInstance.getMonth()}.${dateInstance.getDate()}`
  const todayNotificationList = NotificationData.filter((ele) => (ele.date === todayString))
          //<p className="font-medium text-xs text-gray-400 mb-1">2021-11- 01:51:00</p>
  return (
    <div className="flex flex-col w-full h-full px-7 py-3">    
      <div className="h-3/5 w-full mb-6 rounded-lg border border-gray-300 p-6">
          <p className="font-bold text-base mb-1">주요 그래프</p>
          <div>
            <div className="relative flex-1">
              <Graph></Graph>
            </div>
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
                {todayNotificationList.map((item, index) => {
                  return (
                    <tr className="m-4 h-12" key={index}>
                      <td className="w-9/12"><Link to={`Notification/${item.id}`}>{item.title}</Link></td>
                      <td className="w-3/12 text-gray-400 text-right">{item.author}</td>
                    </tr>
                  )
                })}
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
                  <td className="w-6/12"></td>
                  <td className="w-6/12 text-gray-400 text-right"></td>
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
