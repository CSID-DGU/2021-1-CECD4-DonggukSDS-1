
function LoginPage() {
  return (
    <div className="flex bg-gray-700 w-full h-screen items-center justify-center">
       <div className="flex bg-white rounded-lg shadow-lg w-1/3 flex-col px-16 py-12 space-y-4 items-center">
          <input type="text" className="rounded-lg text-sm w-full" placeholder="ID"/>
          <input type="password" className="rounded-lg text-sm w-full" placeholder="Password"/>
          <button type="submit" className="px-4 py-3 w-full text-sm text-white font-semibold bg-blue-500 rounded-lg hover:bg-blue-600 ">LOGIN</button>
          <button type="button" className="text-sm text-gray-400 font-semibold underline w-1/5 ">SIGN UP</button>

       </div>
    </div>
  );
}

export default LoginPage;
