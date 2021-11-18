import { AiFillSetting } from 'react-icons/ai';
import { ResponsiveBar } from "@nivo/bar";
import Draggable from 'react-draggable';
function Graph({handler, id}) { // TO-DO : 서버에서 받아야할 정보 -> 그래프 ID, data, keys, indexBy, 그래프 이름, 그래프 좌표, 그래프 크기(width, height), 그래프 종류 // Graph({ id, data[], keys, indexBy, graph_name, graph_coordinate, width, height, kind})
    const data = [
        { quarter: 5141, earnings: 5231 },
        { quarter: 5143, earnings: 12542 },
        { quarter: 5145, earnings: 6409 },
        { quarter: 5147, earnings: 9234 }
      ];
    return (
        <Draggable
            bounds="parent"
        >
            <div className="flex flex-col w-max h-auto rounded-lg border border-gray-300 p-6 resize overflow-hidden">
                
                <div className="flex flex-row items-center justify-between">
                    <p className="font-bold text-base">전력 사용량(신공학관, 5층, 오늘)</p>
                    <div className="flex items-center">
                        <input type="checkbox" name="selected" value={`GRAPH_` + id}  onChange={(e) => handler(id, e.target.checked)} className="mr-3"/>   
                        <p className="font-bold text-base">신공학관 전체 전기 사용량</p>
                    </div>
                    <AiFillSetting className="text-gray-400" size="20" />
                </div>
                <ResponsiveBar margin={{ top: 30, bottom: 30, left: 50, right: 30}} data={data} keys={["earnings"]} indexBy="quarter" />
            </div>
        </Draggable>
    );
}

export default Graph;


