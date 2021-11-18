import { userConstants as Types } from '../_constants';
import callAPI from '../_utils/apiCaller';

export const userActions = {
    Login
}

function Login(userid, password){
    const actLoginRequest = () => {return {type : Types.LOGIN_REQUEST}}
    var data = {
        userid : userid,
        password : password,
    }
    return (dispatch) => {
        return callAPI('users/login','POST',null, data).then(res => {
            var resResult = res;
            if (resResult.data === '존재하지 않는 아이디입니다.' || resResult.data === '비밀번호를 확인해주세요.') {
                alert(resResult.data);
            } else {
                localStorage.setItem('token', JSON.stringify(res.data.jwt));
                localStorage.setItem('user', JSON.stringify(res.data.user));
                dispatch(actLoginRequest());
            }
        })
    }
}