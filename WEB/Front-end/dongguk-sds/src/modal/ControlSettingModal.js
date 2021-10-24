function ControlSettingModal({ info, onClose }) {
    function submit() {
        // 변경 내용 저장
        onClose()
    }
    function cancel() {
        onClose()
    }
    return (
        <div className="bg-black bg-opacity-25 absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
            <div className="flex m-auto shadow-lg w-1/3 flex-col px-16 py-12 space-y-4 bg-white rounded-md items-center">
                <input type="text" placeholder="Name" defaultValue={info.Name} className="rounded-lg text-sm w-full"/>
                <input type="text" placeholder="Column" defaultValue={info.Column} className="rounded-lg text-sm w-full"/>
                <input type="number" placeholder="Cycle" defaultValue={info.Cycle} className="rounded-lg text-sm w-full"/>
                <button type="submit" onClick={submit} className="px-4 py-3 text-sm text-white font-semibold bg-blue-500 rounded-md hover:bg-blue-600 ">APPLY</button>
                <button type="button" onClick={cancel} className="text-sm text-gray-400 font-semibold underline w-1/5">CANCEL</button>
            </div>

        </div>
    );
}

export default ControlSettingModal;
