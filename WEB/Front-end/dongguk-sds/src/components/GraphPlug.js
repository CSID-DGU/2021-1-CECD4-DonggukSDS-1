import { AiFillSetting } from 'react-icons/ai';
import { ResponsiveBar } from "@nivo/bar";
import Draggable from 'react-draggable';
import { useEffect, useState } from 'react';
import analAPI from '../_utils/analCaller';
import callAPI from '../_utils/apiCaller';

function Graph() {
    const [data, setData] = useState([]);

    useEffect(() => {
        /*let cur = new Date();
        let today = new Date();
        let zero = new Date();
        zero.setDate(zero.getDate() - 1);
        //var today = cur.getFullYear() + "-" + cur.getMonth() + "-" + cur.getDay() + " " + cur.getHours() + ":" + cur.getMinutes() + ":" + cur.getSeconds();
        //var zero = cur.getFullYear() + "-" + cur.getMonth() + "-" + cur.getDay() + " 00:00:00";
        console.log("as");

        async function call() {
        await analAPI('sensor/get/date', 'POST', null, {
            sensorId: '000100010000000032',
            startDate: zero,
            endDate: today
        }).then(res => {
            console.log("test");
            console.log(res.data);
            console.log("test2");
        })

        console.log("why");
        }
        call();*/

        callAPI('sensor/weekplug', 'POST').then(res => {
            var data = res.data.return;
            var temp = [
                { quarter: "6일전", earnings: data[0] },
                { quarter: "5일전", earnings: data[1] },
                { quarter: "4일전", earnings: data[2] },
                { quarter: "3일전", earnings: data[3] },
                { quarter: "2일전", earnings: data[4] },
                { quarter: "1일전", earnings: data[5] },
                { quarter: "오늘", earnings: data[6] },
            ]
            setData(temp);
        })
    }, [])

    return (
        <Draggable
            bounds="parent"
        >
            <div className="flex flex-col w-max h-auto rounded-lg border border-gray-300 p-6 resize overflow-hidden">
                <div className="flex flex-row items-center justify-between">
                    <p className="font-bold text-base">최근 일주일(스마트 콘센트, 신공학관 5147)</p>
                    <AiFillSetting className="text-gray-400" size="20" />
                </div>
                <ResponsiveBar margin={{ top: 30, bottom: 30, left: 50, right: 30}} data={data} keys={["earnings"]} indexBy="quarter" />
            </div>
        </Draggable>
    );
}

export default Graph;


