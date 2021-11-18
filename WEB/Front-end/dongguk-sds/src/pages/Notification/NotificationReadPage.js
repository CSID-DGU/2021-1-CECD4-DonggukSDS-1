import { NotificationData } from '../../dummyDatas/NotificationData';
import { useEffect, useState } from 'react'
import { useHistory } from "react-router-dom";

import callAPI from "../../_utils/apiCaller"

function NotificationReadPage( { match } ) {
  const { no } = match.params;
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const history = useHistory();

  useEffect(() => {
    callAPI('notice/post', 'POST', null, {id: no}).then(res => {
      if(res.data.msg === 'success'){
        setTitle(res.data.post.title);
        setContent(res.data.post.content);
      } else {
        alert(res.data.msg);
        history.goBack();
      }
    });
  });

  return (
    <div className="w-full h-full px-7 py-3">
      <div className="flex w-full mr-3 rounded-lg border mb-3 h-10 border-gray-300 p-2 pl-4 ">
        <div className="text-sm font-normal border-none w-full">
          { title }
        </div>
      </div>
      <div className="rounded-lg h-4/5 border border-gray-300 p-4">
        <div className="text-sm font-normal border-none w-full h-full">
          { content }
        </div>
      </div>
     </div>
  );
}

export default NotificationReadPage;