import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";

function Seattop() {

    let state = useSelector((state) => {
        return state;
    });

    let u = '';
    function whoislogin(){
        let n = state.userInfo
        let i;
        for(i = 0; i < n.length; i++){
            if(n[i].userid == localStorage.getItem('userId')){
                u = n[i];
                break;
            }
        }
    }

    return (
        <div>
            {whoislogin()}
            <div className="wrap">
                <div className="right_area page_order_form">

                    <div className="right_contents">
                        <hr/>
                        <h2 className="title-page">Order / Payment</h2>
                        <hr/>
                    </div>

                    <div className="right_contents section_address section_address--line">
                        {/* <div className="cell_order_form article_tit"> */}

                            {/* <div className="cell_order_form1"> */}
                                {/* <h3 className="title-box font-mss"><span className="korSub">수령자 정보</span></h3> */}
                                <div className="korDiv">
                                 <span className="korSub">수령자 정보</span>
                                 </div>
                            {/* </div> */}
                        {/* </div> */}

                        <div className="cell_order_form box_address_cell">
                            <div className="clear cell_order_form1 border_add_order">
                                <ul className="box_receiver_info">
                                    <li className="cell_discount_tit">
                                        배송지 선택
                                    </li>
                                    <li className="cell_discount_detail">
                                        <div className="receiver-radio-block" id="quickDeliveryList">
                                            <label className="box_choice">
                                                <div>{u.name}님 배송지</div>
                                            </label>
                                        </div>
                                    </li>
                                </ul>
                                <ul className="box_receiver_info">
                                    <li className="cell_discount_tit">수령인</li>
                                    <li className="cell_discount_detail2 order_address_form box_receiver">
                                        <div>
                                            <span id="delivery-name">{u.name}</span>
                                        </div>
                                    </li>
                                </ul>
                                <ul className="box_receiver_info">
                                    <li className="cell_discount_tit">휴대전화</li>
                                    <li className="cell_discount_detail order_address_form box_phone">
                                        <div>
                                            <span id="delivery-mobile">{u.phone}</span>
                                        </div>
                                    </li>
                                </ul>
                                <ul className="box_receiver_info">
                                    <li className="cell_discount_tit">전화번호</li>
                                    <li className="cell_discount_detail order_address_form box_tel">
                                        <div>
                                            <span id="delivery-phone">{u.phone}</span>
                                        </div>
                                    </li>
                                </ul>
                                <ul className="box_receiver_info">
                                    <li className="cell_discount_tit">
                                        배송지 주소
                                    </li>
                                    <li className="cell_discount_detail2 order_address_form box_address">
                                        <div>
                                            <span id="delivery-addr">{u.address}</span>
                                        </div>
                                    </li>
                                </ul>
                                <ul className="box_receiver_info">
                                    <li className="cell_discount_tit">배송 메모<br/>
                                    </li>
                                    <li className="cell_discount_detail box_memo">
                                        <select name="dlv_selectbox" id="dlv_selectbox" onChange="showEtc(this.value);">
                                            <option value="" selected="selected">배송 시 요청사항을 선택해주세요</option>
                                            <option value="부재 시 경비실에 맡겨주세요">부재 시 경비실에 맡겨주세요</option>
                                            <option value="부재 시 택배함에 넣어주세요">부재 시 택배함에 넣어주세요</option>
                                            <option value="부재 시 집 앞에 놔주세요">부재 시 집 앞에 놔주세요</option>
                                            <option value="배송 전 연락 바랍니다">배송 전 연락 바랍니다</option>
                                            <option value="파손의 위험이 있는 상품입니다. 배송 시 주의해 주세요.">파손의 위험이 있는 상품입니다. 배송 시 주의해
                                                주세요.
                                            </option>
                                        </select>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Seattop;