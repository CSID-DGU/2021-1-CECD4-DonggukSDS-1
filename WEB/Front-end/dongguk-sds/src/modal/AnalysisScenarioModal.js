import { useState } from 'react';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import ActionStack from '../components/ActionStack';
import ConditionStack from '../components/ConditionStack';
function AnalysisScenarioModal({ onClose }) {
    const [conditionList, setConditionCount] = useState([]);
    const [actionList, setActionCount] = useState([]);

    function submit() {
        // 변경 내용 저장, 서버 통신
        onClose()
    }
    function cancel() {
        onClose()
    }

    function addCondition() {
        setConditionCount([...conditionList, {
            "type": ""
        }]);
    }

    function addAction() {
        setActionCount([...actionList, {
            "type": ""
        }]);
    }

    function editCondition(index) {

    }

    function editAction(index) {

    }

    return (
        <div className="bg-black bg-opacity-25 absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">

            <div className="flex m-auto shadow-lg w-2/3 flex-col px-16 py-12 space-y-2 bg-white rounded-md items-center">
                <div className="bg-gray-200 w-full text-center">Scenario</div>
                <div className="flex flex-row justify-between w-full space-x-2">
                    <input type="text" placeholder="Name" className="rounded-lg text-sm w-full"/>
                    <input type="number" placeholder="Evaluation Period(time)" className="rounded-lg text-sm w-full"/>
                    <input type="text" placeholder="Comments (nullable)" className="rounded-lg text-sm w-full"/>
                </div>
                <div className="bg-gray-200 w-full text-center">Condition</div>
                {
                    conditionList.map((item, index) => {
                        return(<ConditionStack key={index} data={item}/>);
                    })
                }   
                
                <button type="button" onClick={addCondition} className="bg-gray-50 text-gray-500 w-full text-left p-2 flex flex-row items-center"><AiOutlinePlusCircle className="text-gray-500 mr-2" size="18" />Add Condition</button>
                <div className="bg-gray-200 w-full text-center">Action</div>
                {
                    actionList.map((item, index) => {
                        return(<ActionStack key={index} data={item}/>);
                    })
                } 
                <button type="button" onClick={addAction} className="bg-gray-50 text-gray-500 w-full text-left p-2 flex flex-row items-center"><AiOutlinePlusCircle className="text-gray-500 mr-2" size="18" />Add Action</button>
                
                <button type="submit" onClick={submit} className="px-4 py-3 text-sm text-white font-semibold bg-blue-500 rounded-md hover:bg-blue-600 ">APPLY</button>
                <button type="button" onClick={cancel} className="text-sm text-gray-400 font-semibold underline">CANCEL</button>
            </div>

        </div>
    );
}

export default AnalysisScenarioModal;
