import { AiFillSetting } from 'react-icons/ai';
import { ResponsiveBar } from "@nivo/bar";
import Draggable from 'react-draggable';
import { useEffect } from 'react';
import analAPI from '../_utils/analCaller';

function Graph() {
    const data = [
        { quarter: 5141, earnings: 95432 },
        { quarter: 5143, earnings: 240523 },
        { quarter: 5145, earnings: 164932 },
        { quarter: 5147, earnings: 123042 }
      ];

    useEffect(() => {
        let today = new Date();
        let zero = new Date();
        zero.setMonth(zero.getMonth() - 1);
        zero.setHours(zero.getHours() - zero.getHours());
        zero.setMinutes(zero.getMinutes() - zero.getMinutes());
        zero.setSeconds(zero.getSeconds() - zero.getSeconds());
        console.log("as");
        analAPI('sensor/get/date', 'POST', null, {
            sensorId: '000100010000000032',
            startDate: zero,
            endDate: today
        }).then(res => {
            console.log("test");
            console.log(res.data);
            console.log("test2");
        })

        console.log("why");
    })

    return (
        <Draggable
            bounds="parent"
        >
            <div className="flex flex-col w-max h-auto rounded-lg border border-gray-300 p-6 resize overflow-hidden">
                <div className="flex flex-row items-center justify-between">
                    <p className="font-bold text-base">전력 사용량 예측(신공학관, 11월)</p>
                    <AiFillSetting className="text-gray-400" size="20" />
                </div>
                <ResponsiveBar margin={{ top: 30, bottom: 30, left: 50, right: 30}} data={data} keys={["earnings"]} indexBy="quarter" />
            </div>
        </Draggable>
    );
}

export default Graph;


