import { useState } from 'react';

function ActionStack() {
    const [type, setType] = useState("");

    function renderSwitch(param) {
        switch(param) {
            case "":
                return (<></>);
            case "control":
                return (
                    <>
                    <select name="action-device" className="rounded-lg text-sm w-full">
                        <option value="">Device</option>
                        <option value="smart_switch">스마트 스위치</option>
                        <option value="smart_onseubdo">스마트 온습도장치</option>
                    </select>
                    <input type="text" placeholder="action" className="rounded-lg text-sm w-full"/>
                    </>
                );
            case "notify":
                return (
                    <>
                        <select name="condition-target" className="rounded-lg text-sm w-full">
                            <option value="">Target</option>
                            <option value="student">학생</option>
                            <option value="staff">교직원</option>
                        </select>
                        <input type="text" placeholder="Content" className="rounded-lg text-sm w-full"/>
                        <select name="condition-method" className="rounded-lg text-sm w-full">
                            <option value="">Method</option>
                            <option value="mail">메일</option>
                            <option value="message">메시지</option>
                        </select>
                    </>
                )
        }
    }

    return(
        <div className="flex flex-row justify-between w-full space-x-2">
            <select name="action-type" className="rounded-lg text-sm" onChange={(e) => setType(e.target.value)}>
                <option value="">Type</option>
                <option value="control">Control</option>
                <option value="notify">Notify</option>
            </select>
            {
                renderSwitch(type)
            }
        </div>
    );

}

export default ActionStack;