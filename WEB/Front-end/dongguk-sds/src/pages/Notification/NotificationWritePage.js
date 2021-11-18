import { useHistory } from "react-router-dom";
import { useState } from "react";
import { NotificationData } from '../../dummyDatas/NotificationData';
import callAPI from "../../_utils/apiCaller"

function NotificationWritePage() {
  const history = useHistory();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  function goToListMode() {
    const dateInstance = new Date()
    const dateString = `${dateInstance.getFullYear()}.${dateInstance.getMonth()}.${dateInstance.getDate()}`
    const writer = localStorage.getItem('user');
    /*console.log(title, content, dateString);
    NotificationData.unshift(   {
      title: `${title}`,
      author: `${writer}`,
      date: `${dateString}`,
      content: `${content}`
    })*/

    callAPI('notice/add', 'POST', null, {
      title: `${title}`,
      author: `${writer}`,
      content: `${content}`
    }).then(res => {
      if(res.data.msg === 'success'){
        history.push("/Notification");
      } else {
        alert("게시글 등록 실패");
      }
    });
  }

  return (
    <div className="w-full h-full px-7 py-3">
      <div className="flex w-full mr-3 rounded-lg border mb-3 h-10 border-gray-300 p-2 pl-4 ">
        <input value={title} onChange={(e) => setTitle(e.target.value)} className="text-sm font-normal border-none ml-1 w-full focus:outline-none" placeholder="Title" />
      </div>
      <div className="rounded-lg h-4/5 border border-gray-300 p-2">
        <textarea value={content} onChange={(e) => setContent(e.target.value)} className="text-sm font-normal border-none w-full h-full focus:outline-none resize-none" placeholder="content.."/>
      </div>
      <div className="flex w-full justify-center mt-3">
      <button type="button" onClick={goToListMode} className="w-60 h-10 text-sm text-white font-semibold shadow-md bg-blue-500 rounded-md hover:bg-blue-600">UPLOAD POST</button>
    
      </div>
     </div>
  );
}

export default NotificationWritePage;
