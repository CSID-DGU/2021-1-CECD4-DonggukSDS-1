import React from 'react'
import './LoginPage.scss'
import { useHistory } from 'react-router-dom';

function LoginPage() {
    let history = useHistory();
    return (
    <div className="loginStyle">
        <p className="titleStyle">Dongguk SDS</p>
        <img src={"/assets/images/logo.jpg"} alt={"logo"} />
        <form>
            <input type="text" className="loginTextStyle" size="20" name="id" placeholder="ID"/> <br/>
            <input type="password" className="loginPasswordStyle" size="20" name="pw" placeholder="Password"/>
            <div className="btnBindStyle">
                <input type="button" className="btnLoginStyle" name="login" value="LOGIN" onClick={() => history.push("/home")}/> <br/>
                <input type="button" className="btnSignupStyle" name="sigup" value="SIGN UP" onClick={() => history.push("/signup")}/>
            </div>
        </form>
    </div>
    );
}

export default LoginPage;