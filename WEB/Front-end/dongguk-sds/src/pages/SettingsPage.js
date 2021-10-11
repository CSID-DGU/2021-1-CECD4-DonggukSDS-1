import { UserData } from "../dummyDatas/UserData";
import { useState } from "react";
import { useHistory } from "react-router-dom";

function SettingsPage() {
  const history = useHistory();

  const [userOriginalPw, setUserOriginalPw] = useState("");
  const [userNewPw, setUserNewPw] = useState("");
  const [userPwConfirm, setUserPwConfirm] = useState("");

  function submit() {
    if(userNewPw == "" || userPwConfirm == ""){
      alert("빈 칸을 모두 채워주세요.");
    } else {
      // API response 확인 후
      alert("회원가입이 완료되었습니다.");
      // history.push("/Login");
      // alert("오류가 발생했습니다. 다시 시도해주세요.")
    }
  }

  function logout() {
    sessionStorage.clear();
    window.location.replace("/")
  }

  return (
    <div className="w-full h-full px-7 py-3">
      <div className="rounded-lg border border-gray-300 p-6">
      <input type="password" value={userOriginalPw} onChange={(e) => setUserOriginalPw(e.target.value)} className="rounded-lg text-sm mr-3" placeholder="Original Password"/>
          <input type="password" value={userNewPw} onChange={(e) => setUserNewPw(e.target.value)} className="rounded-lg text-sm mr-3" placeholder="New Password"/>
          <input type="password" value={userPwConfirm} onChange={(e) => setUserPwConfirm(e.target.value)} className="rounded-lg text-sm mr-3" placeholder="Confirm Password"/>
          <button type="submit" onClick={submit} className="px-4 py-3 text-sm text-white font-semibold bg-blue-500 rounded-md hover:bg-blue-600 ">CHANGE PASSWORD</button>
          <div className="flex flex-row-reverse">
            <button type="submit" onClick={logout} className="px-4 py-3 text-sm text-white font-semibold bg-red-500 rounded-md hover:bg-red-600">LOGOUT</button>
          </div>
          
      </div>
    </div>
  );
}

export default SettingsPage;
