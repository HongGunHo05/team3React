import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import '../css/etcCss.css'

function Login() {

    let navigate = useNavigate();

    let state = useSelector((state) => {
        return state;
    });

    function logincheck(tf) {
        let n = state.userInfo
        let i;
        for(i = 0; i < n.length; i++){
            if(n[i].userid == localStorage.getItem('userId')){
                return true;
            }
        }
        return false;
    }

    return (

        <div className={'loginForm'}>
            <h1>Login</h1>
            <br/><br/><br/>

            <div className="form-floating mb-3">
                <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com"/>
                    <label htmlFor="floatingInput">Email address</label>
            </div>
            <div className="form-floating">
                <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
                    <label htmlFor="floatingPassword">Password</label>
            </div>

            <div className={"b"}>
                <button type="button" className="btn btn-dark" onClick={ ()=>{
                    let c = document.getElementById('floatingInput').value;

                    localStorage.setItem('userId', c);

                    let tf = logincheck(false);

                    if (c !== '' && tf == true){
                        alert('로그인 성공');
                        navigate('/');
                    }else if(tf == false){
                        alert('아이디가 없습니다.');
                    }
                }}>Login</button>
                <button type="button" className="btn btn-dark" onClick={ ()=>{ navigate('/user/join'); }}>Join</button>
            </div>
        </div>
    );
}


export default Login;