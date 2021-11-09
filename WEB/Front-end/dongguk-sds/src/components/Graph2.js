import { AiFillSetting } from 'react-icons/ai';
import { ResponsiveBar } from "@nivo/bar";
import Draggable from 'react-draggable';
function Graph() {
    const data = [
        { quarter: 5141, earnings: 119793 },
        { quarter: 5143, earnings: 254057 },
        { quarter: 5145, earnings: 128421 },
        { quarter: 5147, earnings: 148532 }
      ];
    return (
        <Draggable
            bounds="parent"
        >
            <div className="flex flex-col w-max h-auto rounded-lg border border-gray-300 p-6 resize overflow-hidden">
                <div className="flex flex-row items-center justify-between">
                    <p className="font-bold text-base">전력 사용량(신공학관, 5층, 10월)</p>
                    <AiFillSetting className="text-gray-400" size="20" />
                </div>
                <ResponsiveBar margin={{ top: 30, bottom: 30, left: 50, right: 30}} data={data} keys={["earnings"]} indexBy="quarter" />
            </div>
        </Draggable>
    );
}

export default Graph;


