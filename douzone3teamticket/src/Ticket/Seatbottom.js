import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import '../css/SeatTB.css'

function Seatbottom() {

    let navigate = useNavigate();

    let state = useSelector((state) => {
        return state;
    });

    let [p, setP] = useState(0)

    useEffect( ()=>{
        setP(state.totalprice);
    },[state.totalprice] )

    return (
        <div>
            <div className="right_contents section_payment">
                <div>
                    <div className="cell_order_form">
                        <div className="clear cell_order_form1 border_add_order" id="payment_info_area">
                            <div className="__payment-view __payment-pg-view">
                                <h1>결제 안내</h1>
                                <ul className="list_payment_order">
                                    {/* <li className="cell_discount_tit new-payment-area">결제 안내</li> */}
                                    <li className="cell_discount_detail payment-area">
                                        <div className="payment-area-wrap">

                                        </div>

                                        <div id="pay_info2">
                                            <div id="div_card" className="box-payment-method">
                                                <div className="box-select">
                                                    <select name="card_code" id="card_code">
                                                        <option value="">카드 선택</option>
                                                        <option value="CCHN" selected="selected">하나카드</option>
                                                        <option value="CCBC" selected="selected">BC카드</option>
                                                        <option value="CCCJ" selected="selected">제주은행</option>
                                                        <option value="CCCT" selected="selected">씨티카드</option>
                                                        <option value="CC48" selected="selected">신협은행</option>
                                                        <option value="CCDI" selected="selected">현대카드</option>
                                                        <option value="CC401" selected="selected">KB증권</option>
                                                        <option value="CCJB" selected="selected">전북은행</option>
                                                        <option value="CC92" selected="selected">카카오뱅크</option>
                                                        <option value="CC215" selected="selected">산업은행</option>
                                                        <option value="CCKJ" selected="selected">광주은행</option>
                                                        <option value="CC302" selected="selected">케이뱅크</option>
                                                        <option value="CCKM" selected="selected">국민카드</option>
                                                        <option value="CCLG" selected="selected">신한카드</option>
                                                        <option value="CCLO" selected="selected">롯데카드</option>
                                                        <option value="CC403" selected="selected">NH투자증권</option>
                                                        <option value="CC207" selected="selected">우체국</option>
                                                        <option value="CC33" selected="selected">우리카드</option>
                                                        <option value="CC216" selected="selected">저축은행</option>
                                                        <option value="CC204" selected="selected">새마을금고</option>
                                                        <option value="CCSS" selected="selected">삼성카드</option>
                                                        <option value="CCSU" selected="selected">수협은행</option>
                                                        <option value="CCNH" selected="selected">농협카드</option>
                                                    </select>

                                                    <select id="card_quota" name="card_quota">
                                                        <option value="1">일시불</option>
                                                        <option value="2">2개월</option>
                                                        <option value="3">3개월</option>
                                                        <option value="4">4개월</option>
                                                        <option value="5">5개월</option>
                                                        <option value="6">6개월</option>
                                                        <option value="7">7개월</option>
                                                        <option value="8">8개월</option>
                                                        <option value="9">9개월</option>
                                                        <option value="10">10개월</option>
                                                        <option value="11">11개월</option>
                                                        <option value="12">12개월</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="btn_wrap order_form__payment-button-wrap">
                        <a id="btn_pay" onclick="Order.payment();" className="order_form__payment-button">
                            <div>{p}원</div>
                        </a>
                    </div>
                </div>
            </div>
        </div>


    );
}

export default Seatbottom;