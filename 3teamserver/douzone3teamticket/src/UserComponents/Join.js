import {useNavigate} from "react-router-dom";

function Join() {

    let navigate = useNavigate();

    return (

        <div className={'joinForm'}>
            <h1>Join</h1>
            <br/>

            <div className="form-floating mb-3">
                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
                <label htmlFor="floatingInput">ID</label>
            </div>
            <div className="form-floating mb-3">
                <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
                <label htmlFor="floatingPassword">Password</label>
            </div>
            <div className="form-floating mb-3">
                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
                <label htmlFor="floatingInput">Email address</label>
            </div>
            <div className="form-floating mb-3">
                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
                <label htmlFor="floatingInput">name</label>
            </div>
            <button type="button" className="btn btn-dark" onClick={ ()=>{ navigate('/'); }}>Join</button>
            <button type="button" className="btn btn-dark" onClick={ ()=>{ navigate('/'); }}>Cancle</button>
        </div>

    );
}

export default Join;