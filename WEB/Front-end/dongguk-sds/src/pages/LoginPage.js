import { useState } from "react";
import { useHistory } from "react-router-dom";

function LoginPage() {

  const [userId, setUserId] = useState("");
  const [userPw, setUserPw] = useState("");
  
  const history = useHistory();

  function submit() {
    if(userId == "admin" && userPw == "1234") { // 성공
      sessionStorage.setItem("userId", userId);
      history.push("/Home");
    } else {
      alert("아이디, 패스워드가 일치하지 않습니다.");
      document.location.href = "/Login"
    }
    
  }

  function signup() {
    history.push("/Signup")
  }

  return (
    <div className="flex bg-gray-700 w-full h-screen items-center justify-center">
       <div className="flex bg-white rounded-lg shadow-lg w-1/3 flex-col px-16 py-12 space-y-4 items-center">
          <input type="text" value={userId} onChange={(e) => setUserId(e.target.value)} className="rounded-lg text-sm w-full" placeholder="ID"/>
          <input type="password" value={userPw} onChange={(e) => setUserPw(e.target.value)} className="rounded-lg text-sm w-full" placeholder="Password"/>
          <button type="submit" onClick={submit} className="px-4 py-3 w-full text-sm text-white font-semibold bg-blue-500 rounded-md hover:bg-blue-600 ">LOGIN</button>
          <button type="button" onClick={signup} className="text-sm text-gray-400 font-semibold underline w-1/5">SIGN UP</button>
       </div>
    </div>
  );
}

export default LoginPage;
