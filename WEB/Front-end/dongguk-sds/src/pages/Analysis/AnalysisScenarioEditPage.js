import { useEffect, useState } from 'react'
import { useHistory } from "react-router-dom";

var AnalysisScenarioData = 
    {
      scenario_id: 1,
      scenario_name: "전기 사용량 분석",
      comments: '신공 5147 전기 사용량을 분석하여 알람을 보낸다',
      active: "on",
      fire: "not"
    };

function AnalysisScenarioEditPage({ match }) {
    const { no } = match.params;
    const history = useHistory();
    console.log("hihi");
    const [conditionList, setConditionList] = useState([
        {
          condition_id: 1,
          type: "what",
          sensor: '스마트 에너지미터',
          attribute: "전류(Voltage)",
          condition: ">(클 때)",
          threshold: 100
        },
        {
          condition_id: 2,
          type: "when",
          scheduled: '운영체제(CSE2021-01)',
          time: "10분",
          condition: "이전에"
        },
        {
            condition_id: 3,
            type: "range",
            building: '신공학관',
            target: "5147호",
        }
    ]);
    const [actionList, setActionCount] = useState([
        {
          action_id: 1,
          type: "control",
          device: "스마트 콘센트",
          action: "끈다",
          attribute: "해당 없음",
          value: "해당 없음"
        },
        {
            action_id: 2,
            type: "notify",
            send_to: "유저 그룹 2(미리 정의된)",
            method: "메시지",
            context: "신공학관 전력 사용량이 100을 초과하였습니다!"
        }
    ]);

    function submit() {
        alert("수정 완료되었습니다.");
        history.goBack();
    }

    function back() {
        history.goBack();
    }


    return (
        <div className="w-full h-full px-7 py-3">
        <div className="flex flex-col px-16 py-12 space-y-2 bg-white rounded-md items-center border border-gray-300">
            <div className="bg-gray-200 w-full text-center">Scenario Content</div>
                <table className="table-fixed w-full">
                    <thead>
                        <tr className="h-10 text-sm font-light text-gray-300 text-left border-b-2">
                            <th className="w-1/12">Scenario ID</th>
                            <th className="w-2/12">Name</th>
                            <th className="w-7/12">Comments</th>
                            <th className="w-1/12 ">Active (ON/OFF)</th>
                            <th className="w-1/12 ">Fire (O/!)</th>
                        </tr>
                    </thead>

                    <tbody className="text-sm font-normal divide-y divide-gray-200">
                        <tr className="m-4 h-12">
                            <td className="w-1/12"><input type="text" value={AnalysisScenarioData.scenario_id}/></td>
                            <td className="w-2/12">{AnalysisScenarioData.scenario_name}</td>
                            <td className="w-6/12">{AnalysisScenarioData.comments}</td>
                            <td className="w-1/12 items-center"><button type="button" className="w-1/3 h-full mr-10 text-sm text-white font-semibold shadow-md bg-blue-500 rounded-md hover:bg-red-600 items-center">ON</button></td>
                            <td className="w-1/12 text-center">
                                <button type="button" className="w-1/3 h-full mr-10 text-sm text-white font-semibold shadow-md bg-blue-500 rounded-md hover:bg-red-600 items-center">ON</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div className="bg-gray-200 w-full text-center">Analysis Content</div>
                <table className="table-fixed w-full">
                <tbody className="text-sm font-normal">
                {
                    conditionList.map((item, index) => {
                        switch(item.type) {
                            case "what":
                                return(
                                <tr className="m-4 h-12">
                                    <td className="w-1/7 text-center">
                                        <div className="bg-gray-100 w-full text-center">Condition ID</div>
                                        {item.condition_id}
                                    </td>
                                    <td className="w-1/7 text-center">
                                        <div className="bg-gray-100 w-full text-center">Type</div>
                                        {item.type}
                                    </td>
                                    <td className="w-1/7 text-center">
                                        <div className="bg-gray-100 w-full text-center">Sensor</div>
                                        {item.sensor}
                                    </td>
                                    <td className="w-1/7 text-center">
                                        <div className="bg-gray-100 w-full text-center">Attribute</div>
                                        {item.attribute}
                                    </td>
                                    <td className="w-1/7 text-center">
                                        <div className="bg-gray-100 w-full text-center">Condition</div>
                                        {item.condition}
                                    </td>
                                    <td className="w-1/7 text-center">
                                    <div className="bg-gray-100 w-full text-center">Threshold</div>
                                        {item.threshold}
                                    </td>
                                </tr>
                                );
                            case "when":
                                return(
                                    <tr className="m-4 h-12">
                                        <td className="w-1/7 text-center">
                                            <div className="bg-gray-100 w-full text-center">Condition ID</div>
                                            {item.condition_id}
                                        </td>
                                        <td className="w-1/7 text-center">
                                            <div className="bg-gray-100 w-full text-center">Type</div>
                                            {item.type}
                                        </td>
                                        <td className="w-1/7 text-center">
                                            <div className="bg-gray-100 w-full text-center">Scheduled</div>
                                            {item.scheduled}
                                        </td>
                                        <td className="w-1/7 text-center">
                                            <div className="bg-gray-100 w-full text-center">Time</div>
                                            {item.time}
                                        </td>
                                        <td className="w-1/7 text-center" colSpan="2">
                                            <div className="bg-gray-100 w-full text-center">Condition</div>
                                            {item.condition}
                                        </td>
                                    </tr>
                                    );
                            case "range":
                                return(
                                    <tr className="m-4 h-12">
                                        <td className="w-1/7 text-center">
                                            <div className="bg-gray-100 w-full text-center">Condition ID</div>
                                            {item.condition_id}
                                        </td>
                                        <td className="w-1/7 text-center">
                                            <div className="bg-gray-100 w-full text-center">Type</div>
                                            {item.type}
                                        </td>
                                        <td className="w-1/7 text-center">
                                            <div className="bg-gray-100 w-full text-center">Building</div>
                                            {item.building}
                                        </td>
                                        <td className="w-1/7 text-center" colSpan="3">
                                            <div className="bg-gray-100 w-full text-center">Target</div>
                                            {item.target}
                                        </td>
                                    </tr>
                                
                                    );
                        }
                    })
                }  
                </tbody>
                </table>
                
                <div className="bg-gray-200 w-full text-center">Control Content</div>
                <table className="table-fixed w-full">
                    <tbody className="text-sm font-normal">
                        {
                            actionList.map((item, index) => {
                                switch (item.type) {
                                    case "control":
                                        return (
                                            <tr className="m-4 h-12">
                                                <td className="w-1/6 text-center">
                                                    <div className="bg-gray-100 w-full text-center">Action ID</div>
                                                    {item.action_id}
                                                </td>
                                                <td className="w-1/6 text-center">
                                                    <div className="bg-gray-100 w-full text-center">Type</div>
                                                    {item.type}
                                                </td>
                                                <td className="w-1/6 text-center">
                                                    <div className="bg-gray-100 w-full text-center">Device</div>
                                                    {item.device}
                                                </td>
                                                <td className="w-1/6 text-center">
                                                    <div className="bg-gray-100 w-full text-center">Action</div>
                                                    {item.action}
                                                </td>
                                                <td className="w-1/6 text-center">
                                                    <div className="bg-gray-100 w-full text-center">Attribute</div>
                                                    {item.attribute}
                                                </td>
                                                <td className="w-1/6 text-center">
                                                    <div className="bg-gray-100 w-full text-center">Value</div>
                                                    {item.value}
                                                </td>
                                            </tr>
                                        );
                                    case "notify":
                                        return (
                                            <tr className="m-4 h-12">
                                                <td className="w-1/6 text-center">
                                                    <div className="bg-gray-100 w-full text-center">Action ID</div>
                                                    {item.action_id}
                                                </td>
                                                <td className="w-1/6 text-center">
                                                    <div className="bg-gray-100 w-full text-center">Type</div>
                                                    {item.type}
                                                </td>
                                                <td className="w-1/6 text-center">
                                                    <div className="bg-gray-100 w-full text-center">Send to</div>
                                                    {item.send_to}
                                                </td>
                                                <td className="w-1/6 text-center">
                                                    <div className="bg-gray-100 w-full text-center">Method</div>
                                                    {item.method}
                                                </td>
                                                <td className="w-1/6 text-center" colSpan="2">
                                                    <div className="bg-gray-100 w-full text-center">Context</div>
                                                    {item.context}
                                                </td>
                                            </tr>
                                        );
                                    
                                }
                            })
                        }
                    </tbody>
                </table>
                
                <div className="flex flex-row space-x-4 pt-5">
                <button type="button" onClick={submit} className="px-4 py-3 text-sm text-white font-semibold bg-blue-500 rounded-md hover:bg-blue-600 ">SUBMIT</button>
                <button type="button" onClick={back} className="text-sm text-gray-400 font-semibold underline">BACK</button>
                </div>

            </div>
        </div>

    );

}

export default AnalysisScenarioEditPage;