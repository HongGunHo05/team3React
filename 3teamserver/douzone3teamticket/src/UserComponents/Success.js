import '../css/etcCss.css'

import {useNavigate} from "react-router-dom";

function Success() {
    let navigate = useNavigate();

    return (
        <div className={'successPage'}>
            <h1>감사합니다.</h1>

            <button type="button" className="btn btn-secondary"
                    onClick={ ()=>{ navigate('/'); }}>Home</button>
        </div>
    );
}

export default Success;