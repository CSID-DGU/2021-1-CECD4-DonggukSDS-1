import { HiSearch } from 'react-icons/hi'
import { useHistory, Link } from "react-router-dom";
import { NotificationData } from '../../dummyDatas/NotificationData';
import { useState } from 'react';

// TO DO : Search한 다음에 전체선택 체크박스 누르고 delete하면 싹 날아가는 버그있음 (코드에서 전체 게시물을 지우는걸로 설정했기 때문에)

function NotificationListPage() {
  const history = useHistory();
  const [checkedItems, setCheckedItems] = useState([]);
  const [searchTitle, setSearchTitle] = useState("");

  // useEffect(() => {

  // }, [searchTitle]);

  function deletePosts() {
    if(checkedItems.length > 0) {
      checkedItems.forEach((ele) => {
        const idx = NotificationData.findIndex(function (item) { return item.id === ele });
        NotificationData.splice(idx, 1);
        // window.location.replace('/Notification'); // 서버 연결하고나서는 새로고침해서 리스트 다시 받아와야함
        setCheckedItems([]);
      }
      );
    } else {
      alert("선택한 글이 없습니다.");
    }
  }

  function goToWriteMode() {
    history.push("/Notification/write");
    console.log("click button");
  }

  function checkItemHandler(id, isChecked) {
    if(isChecked) { // check
      setCheckedItems([...checkedItems,id]);
    } else { // uncheck
      setCheckedItems(checkedItems.filter((ele) => ele !== id));
    }
  }

  function checkAllItemsHandler(checked) {
    if(checked) {
      const idArray = [];
      NotificationData.forEach((ele) => idArray.push(ele.id)); // 고쳐야함, Search 결과에서 전체 선택 삭제하는 것으로
      setCheckedItems(idArray);
    } else {
      setCheckedItems([]);
    }
  }

  function changeSearchTitle(value) {
    setSearchTitle(value);
    setCheckedItems([]);
  }

  return (
    <div className="w-full h-full px-7 py-3">
      <div className="flex flex-row items-center mb-3 h-10 justify-between">
        <div className="flex w-full h-full mr-3 items-center rounded-lg border border-gray-300 p-2 pl-4 ">
          <HiSearch size="19" color="gray" />
          <input onChange={(e) => changeSearchTitle(e.target.value) } value={searchTitle} className="text-sm font-normal border-none ml-3 w-full focus:outline-none" placeholder="Search Title" />
        </div>

        <button type="button" onClick={deletePosts} className="w-60 h-full mr-1.5 text-sm text-white font-semibold shadow-md bg-red-500 rounded-md hover:bg-red-600">DELETE POST</button>
        <button type="button" onClick={goToWriteMode} className="w-60 h-full ml-1.5 text-sm text-white font-semibold shadow-md bg-blue-500 rounded-md hover:bg-blue-600">WRITE POST</button>
      </div>

      <div className="rounded-lg border border-gray-300 p-1">
        <table className="table-fixed w-full">
          <thead>
            <tr className="h-10 text-sm font-light text-gray-300 text-left border-b-2">
              <th className="w-1/12 text-center"><input type="checkbox" name="selected_all" onChange={(e) => checkAllItemsHandler(e.target.checked)} checked={ checkedItems.length === NotificationData.length }/></th>
              <th className="w-8/12">Title</th>
              <th className="w-2/12">Author</th>
              <th className="w-2/12">Date</th>
            </tr>
          </thead>

          <tbody className="text-sm font-normal text-left divide-y divide-gray-200">
            {NotificationData.filter((ele) => ele.title.includes(searchTitle)).map((item, index) => {
              return (
                <tr className="m-4 h-12" key={index}>
                  <td className="w-1/12 text-center"><input type="checkbox" name="selected" value={`ROW_${index}`} onChange={(e) => checkItemHandler(item.id, e.target.checked)} checked={checkedItems.length === NotificationData.length || checkedItems.includes(item.id)} /></td>
                  <td className="w-8/12"><Link to={`Notification/${index}`}>{item.title}</Link></td>
                  <td className="w-2/12">{item.author}</td>
                  <td className="w-2/12">{item.date}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default NotificationListPage;
