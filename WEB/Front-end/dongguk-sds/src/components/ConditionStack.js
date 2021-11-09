import { useState } from 'react';

function ConditionStack() {
    const [type, setType] = useState("");

    function renderSwitch(param) {
        switch(param) {
            case "":
                return (<></>);
            case "what":
                return (
                    <>
                    <input type="text" placeholder="Sensor" className="rounded-lg text-sm w-full"/>
                    <input type="text" placeholder="Attribute" className="rounded-lg text-sm w-full"/>
                    <select name="condition-compare" className="rounded-lg text-sm w-full">
                        <option value="">Compare</option>
                        <option value="greater_than">Greater than</option>
                        <option value="less_than">Less than</option>
                        <option value="between">Between</option>
                        <option value="equal_to">Equal to</option>
                    </select>
                    <input type="text" placeholder="Threshold" className="rounded-lg text-sm w-full"/>
                    </>
                );
            case "when":
                return (
                    <>
                        <select name="condition-when" className="rounded-lg text-sm w-full">
                            <option value="">When</option>
                            <option value="after">After</option>
                            <option value="before">Before</option>
                            <option value="always">Always</option>
                        </select>
                        <input type="text" placeholder="Threshold" className="rounded-lg text-sm w-full"/>
                    </>
                )
            case "range":
                return (
                    <>
                        <select name="condition-where" className="rounded-lg text-sm w-full">
                            <option value="">Building/Lecture</option>
                            <option value="신공학관">신공학관</option>
                            <option value="원흥관">원흥관</option>
                            <option value="만해관">만해관</option>
                        </select>
                        <select name="condition-where-detail" className="rounded-lg text-sm w-full">
                            <option value="">Detail</option>
                            <option value="3123">3123</option>
                            <option value="1112">1112</option>
                        </select>
                    </>
                )
        }
    }

    return(
        <div className="flex flex-row justify-between w-full space-x-2">
            <select name="condition-type" className="rounded-lg text-sm" onChange={(e) => setType(e.target.value)}>
                <option value="">Type</option>
                <option value="what">What</option>
                <option value="when">When</option>
                <option value="range">Range</option>
            </select>
            {
                renderSwitch(type)
            }

        </div>
    );

}

export default ConditionStack;