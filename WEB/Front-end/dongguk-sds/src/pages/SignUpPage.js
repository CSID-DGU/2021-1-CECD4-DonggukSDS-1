import { useState } from "react";
import { useHistory } from "react-router-dom";

function SignUpPage() {

  const [userId, setUserId] = useState("");
  const [userPw, setUserPw] = useState("");
  const [userPwConfirm, setUserPwConfirm] = useState("");
  const [userName, setUserName] = useState("");
  const history = useHistory();

  function submit() {
    if(userId == "" || userPw == "" || userPwConfirm == "" || userName == ""){
      alert("빈 칸을 모두 채워주세요.");
    } else {
      // API response 확인 후
      alert("회원가입이 완료되었습니다.");
      history.push("/Login")
      // alert("오류가 발생했습니다. 다시 시도해주세요.")
    }
  }

  return (
    <div className="flex bg-gray-700 w-full h-screen items-center justify-center">
       <div className="flex bg-white rounded-lg shadow-lg w-1/3 flex-col px-16 py-12 space-y-4 items-center">
          <input type="text" value={userId} onChange={(e) => setUserId(e.target.value)} className="rounded-lg text-sm w-full" placeholder="ID"/>
          <input type="password" value={userPw} onChange={(e) => setUserPw(e.target.value)} className="rounded-lg text-sm w-full" placeholder="Password"/>
          <input type="password" value={userPwConfirm} onChange={(e) => setUserPwConfirm(e.target.value)} className="rounded-lg text-sm w-full" placeholder="Confirm Password"/>
          <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} className="rounded-lg text-sm w-full" placeholder="Name"/>
          <button type="submit" onClick={submit} className="px-4 py-3 w-full text-sm text-white font-semibold bg-blue-500 rounded-md hover:bg-blue-600 ">SIGN UP</button>
       </div>
    </div>
  );
}

export default SignUpPage;
