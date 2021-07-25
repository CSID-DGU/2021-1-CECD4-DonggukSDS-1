import { AiFillSetting } from 'react-icons/ai';
import { ResponsiveBar } from "@nivo/bar";
import Draggable from 'react-draggable';
function Graph() {
    const data = [
        { quarter: 1, earnings: 13000 },
        { quarter: 2, earnings: 16500 },
        { quarter: 3, earnings: 14250 },
        { quarter: 4, earnings: 19000 }
      ];
    return (
        <Draggable
            bounds="parent"
        >
            <div className="w-max h-auto mb-6 rounded-lg border border-gray-300 p-6 resize overflow-hidden">
                <div className="flex flex-row items-center justify-between mb-3">
                    <p className="font-bold text-base">신공학관 전체 전기 사용량</p>
                    <AiFillSetting className="text-gray-400" size="20" />
                </div>
                <div className="flex h-full pb-10">
                    <ResponsiveBar data={data} keys={["earnings"]} indexBy="quarter" />
                </div>



            </div>
        </Draggable>
    );
}

export default Graph;


