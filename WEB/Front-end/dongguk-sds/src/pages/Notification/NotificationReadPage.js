import { NotificationData } from "./NotificationData";

function NotificationReadPage( { match } ) {
  const { no } = match.params;
  return (
    <div className="w-full h-full px-7 py-3">
      <div className="flex w-full mr-3 rounded-lg border mb-3 h-10 border-gray-300 p-2 pl-4 ">
        <div className="text-sm font-normal border-none w-full">
          { NotificationData[no].title }
        </div>
      </div>
      <div className="rounded-lg h-4/5 border border-gray-300 p-4">
        <div className="text-sm font-normal border-none w-full h-full">
          { NotificationData[no].content }
        </div>
      </div>
     </div>
  );
}

export default NotificationReadPage;