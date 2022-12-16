import React, {useEffect, useState} from "react";
import store from "../store";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import Form from 'react-bootstrap/Form';

import '../css/Seat.css'
import $ from "jquery";
import {Button} from "react-bootstrap";


export default function SeatAllocationComponent() {

    let state = useSelector((state) => {
        return state;
    });

    let navigate = useNavigate();

    let gc = localStorage.getItem('gocategory');

    let choiceCate;

    function findcate() {
        switch (gc) {
            case 'concert':
                choiceCate = state.concert;
                break;
            case 'theater':
                choiceCate = state.theater;
                break;
            case 'musical':
                choiceCate = state.musical;
                break;
            case 'classic':
                choiceCate = state.classic;
                break;
        }
    }

    useEffect(() => {
        findcate()
    }, [])


    let [count, setCount] = useState(0);
    let [total, setTotal] = useState(0);

    useEffect(() => {
        findcate()
    }, [count])

    useEffect(() => {
        state.totalprice = total;
    }, [total])

    function choiceSeat(w) {

        let money;

        switch (w.charAt(0)) {
            case 'A':
            case 'B':
                money = choiceCate[localStorage.getItem('performanceId')].priceVIP;
                break;
            case 'C':
            case 'D':
                money = choiceCate[localStorage.getItem('performanceId')].priceSR;
                break;
            case 'E':
            case 'F':
                money = choiceCate[localStorage.getItem('performanceId')].priceR;
                break;
            case 'G':
            case 'H':
                money = choiceCate[localStorage.getItem('performanceId')].priceS;
                break;
        }

        if (!state.selectseat.includes(w)) {
            if (count < 4) {
                state.selectseat = [...state.selectseat, w];
                setCount(count + 1);
                setTotal(total + money);
            } else {
                alert('4매까지 구매 가능합니다.');
                $(document.getElementById(w)).prop("checked", false);
            }
        } else {
            for (let i = 0; i < state.selectseat.length; i++) {
                if (w == state.selectseat[i]) {
                    state.selectseat.splice(i, 1);
                    setCount(count - 1);
                    setTotal(total - money);
                }
            }
        }
    }

    return (
        <div className={'seatcs'}>
            <div className={'seatcsfirstdiv'}>
                <div className={'vipclass'}>
                    <div>
                        <div>VIP</div>
                    </div>
                    <div className={'Vip'}>
                        <label><input type='checkbox' id={'A1'} onClick={() => {
                            choiceSeat('A1')
                        }}/>A1</label>
                        <label><input type='checkbox' id={'A2'} onClick={() => {
                            choiceSeat('A2')
                        }}/>A2</label>
                        <label><input type='checkbox' id={'A3'} onClick={() => {
                            choiceSeat('A3')
                        }}/>A3</label>
                        <label><input type='checkbox' id={'A4'} onClick={() => {
                            choiceSeat('A4')
                        }}/>A4</label>
                        <label><input type='checkbox' id={'A5'} onClick={() => {
                            choiceSeat('A5')
                        }}/>A5</label>
                        <label><input type='checkbox' id={'A6'} onClick={() => {
                            choiceSeat('A6')
                        }}/>A6</label>
                        <label><input type='checkbox' id={'A7'} onClick={() => {
                            choiceSeat('A7')
                        }}/>A7</label>
                        <label><input type='checkbox' id={'A8'} onClick={() => {
                            choiceSeat('A8')
                        }}/>A8</label>
                        <label><input type='checkbox' id={'A9'} onClick={() => {
                            choiceSeat('A9')
                        }}/>A9</label>
                        <label><input type='checkbox' id={'A10'} onClick={() => {
                            choiceSeat('A10')
                        }}/>A10</label>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <label><input type='checkbox' id={'A11'} onClick={() => {
                            choiceSeat('A11')
                        }}/>A11</label>
                        <label><input type='checkbox' id={'A12'} onClick={() => {
                            choiceSeat('A12')
                        }}/>A12</label>
                        <label><input type='checkbox' id={'A13'} onClick={() => {
                            choiceSeat('A13')
                        }}/>A13</label>
                        <label><input type='checkbox' id={'A14'} onClick={() => {
                            choiceSeat('A14')
                        }}/>A14</label>
                        <label><input type='checkbox' id={'A15'} onClick={() => {
                            choiceSeat('A15')
                        }}/>A15</label>
                        <label><input type='checkbox' id={'A16'} onClick={() => {
                            choiceSeat('A16')
                        }}/>A16</label>
                        <label><input type='checkbox' id={'A17'} onClick={() => {
                            choiceSeat('A17')
                        }}/>A17</label>
                        <label><input type='checkbox' id={'A18'} onClick={() => {
                            choiceSeat('A18')
                        }}/>A18</label>
                        <label><input type='checkbox' id={'A19'} onClick={() => {
                            choiceSeat('A19')
                        }}/>A19</label>
                        <label><input type='checkbox' id={'A20'} onClick={() => {
                            choiceSeat('A20')
                        }}/>A20</label>

                        <br/>

                        <label><input type='checkbox' id={'B1'} onClick={() => {
                            choiceSeat('B1')
                        }}/>B1</label>
                        <label><input type='checkbox' id={'B2'} onClick={() => {
                            choiceSeat('B2')
                        }}/>B2</label>
                        <label><input type='checkbox' id={'B3'} onClick={() => {
                            choiceSeat('B3')
                        }}/>B3</label>
                        <label><input type='checkbox' id={'B4'} onClick={() => {
                            choiceSeat('B4')
                        }}/>B4</label>
                        <label><input type='checkbox' id={'B5'} onClick={() => {
                            choiceSeat('B5')
                        }}/>B5</label>
                        <label><input type='checkbox' id={'B6'} onClick={() => {
                            choiceSeat('B6')
                        }}/>B6</label>
                        <label><input type='checkbox' id={'B7'} onClick={() => {
                            choiceSeat('B7')
                        }}/>B7</label>
                        <label><input type='checkbox' id={'B8'} onClick={() => {
                            choiceSeat('B8')
                        }}/>B8</label>
                        <label><input type='checkbox' id={'B9'} onClick={() => {
                            choiceSeat('B9')
                        }}/>B9</label>
                        <label><input type='checkbox' id={'B10'} onClick={() => {
                            choiceSeat('B10')
                        }}/>B10</label>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <label><input type='checkbox' id={'B11'} onClick={() => {
                            choiceSeat('B11')
                        }}/>B11</label>
                        <label><input type='checkbox' id={'B12'} onClick={() => {
                            choiceSeat('B12')
                        }}/>B12</label>
                        <label><input type='checkbox' id={'B13'} onClick={() => {
                            choiceSeat('B13')
                        }}/>B13</label>
                        <label><input type='checkbox' id={'B14'} onClick={() => {
                            choiceSeat('B14')
                        }}/>B14</label>
                        <label><input type='checkbox' id={'B15'} onClick={() => {
                            choiceSeat('B15')
                        }}/>B15</label>
                        <label><input type='checkbox' id={'B16'} onClick={() => {
                            choiceSeat('B16')
                        }}/>B16</label>
                        <label><input type='checkbox' id={'B17'} onClick={() => {
                            choiceSeat('B17')
                        }}/>B17</label>
                        <label><input type='checkbox' id={'B18'} onClick={() => {
                            choiceSeat('B18')
                        }}/>B18</label>
                        <label><input type='checkbox' id={'B19'} onClick={() => {
                            choiceSeat('B19')
                        }}/>B19</label>
                        <label><input type='checkbox' id={'B20'} onClick={() => {
                            choiceSeat('B20')
                        }}/>B20</label>


                        <br/><br/><br/>

                    </div>

                    <div>
                        <div>SR</div>
                    </div>
                    <div className={'Sr'}>
                        <label><input type='checkbox' id={'C1'} onClick={() => {
                            choiceSeat('C1')
                        }}/>C1</label>
                        <label><input type='checkbox' id={'C2'} onClick={() => {
                            choiceSeat('C2')
                        }}/>C2</label>
                        <label><input type='checkbox' id={'C3'} onClick={() => {
                            choiceSeat('C3')
                        }}/>C3</label>
                        <label><input type='checkbox' id={'C4'} onClick={() => {
                            choiceSeat('C4')
                        }}/>C4</label>
                        <label><input type='checkbox' id={'C5'} onClick={() => {
                            choiceSeat('C5')
                        }}/>C5</label>
                        <label><input type='checkbox' id={'C6'} onClick={() => {
                            choiceSeat('C6')
                        }}/>C6</label>
                        <label><input type='checkbox' id={'C7'} onClick={() => {
                            choiceSeat('C7')
                        }}/>C7</label>
                        <label><input type='checkbox' id={'C8'} onClick={() => {
                            choiceSeat('C8')
                        }}/>C8</label>
                        <label><input type='checkbox' id={'C9'} onClick={() => {
                            choiceSeat('C9')
                        }}/>C9</label>
                        <label><input type='checkbox' id={'C10'} onClick={() => {
                            choiceSeat('C10')
                        }}/>C10</label>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <label><input type='checkbox' id={'C11'} onClick={() => {
                            choiceSeat('C11')
                        }}/>C11</label>
                        <label><input type='checkbox' id={'C12'} onClick={() => {
                            choiceSeat('C12')
                        }}/>C12</label>
                        <label><input type='checkbox' id={'C13'} onClick={() => {
                            choiceSeat('C13')
                        }}/>C13</label>
                        <label><input type='checkbox' id={'C14'} onClick={() => {
                            choiceSeat('C14')
                        }}/>C14</label>
                        <label><input type='checkbox' id={'C15'} onClick={() => {
                            choiceSeat('C15')
                        }}/>C15</label>
                        <label><input type='checkbox' id={'C16'} onClick={() => {
                            choiceSeat('C16')
                        }}/>C16</label>
                        <label><input type='checkbox' id={'C17'} onClick={() => {
                            choiceSeat('C17')
                        }}/>C17</label>
                        <label><input type='checkbox' id={'C18'} onClick={() => {
                            choiceSeat('C18')
                        }}/>C18</label>
                        <label><input type='checkbox' id={'C19'} onClick={() => {
                            choiceSeat('C19')
                        }}/>C19</label>
                        <label><input type='checkbox' id={'C20'} onClick={() => {
                            choiceSeat('C20')
                        }}/>C20</label>

                        <br/>

                        <label><input type='checkbox' id={'D1'} onClick={() => {
                            choiceSeat('D1')
                        }}/>D1</label>
                        <label><input type='checkbox' id={'D2'} onClick={() => {
                            choiceSeat('D2')
                        }}/>D2</label>
                        <label><input type='checkbox' id={'D3'} onClick={() => {
                            choiceSeat('D3')
                        }}/>D3</label>
                        <label><input type='checkbox' id={'D4'} onClick={() => {
                            choiceSeat('D4')
                        }}/>D4</label>
                        <label><input type='checkbox' id={'D5'} onClick={() => {
                            choiceSeat('D5')
                        }}/>D5</label>
                        <label><input type='checkbox' id={'D6'} onClick={() => {
                            choiceSeat('D6')
                        }}/>D6</label>
                        <label><input type='checkbox' id={'D7'} onClick={() => {
                            choiceSeat('D7')
                        }}/>D7</label>
                        <label><input type='checkbox' id={'D8'} onClick={() => {
                            choiceSeat('D8')
                        }}/>D8</label>
                        <label><input type='checkbox' id={'D9'} onClick={() => {
                            choiceSeat('D9')
                        }}/>D9</label>
                        <label><input type='checkbox' id={'D10'} onClick={() => {
                            choiceSeat('D10')
                        }}/>D10</label>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <label><input type='checkbox' id={'D11'} onClick={() => {
                            choiceSeat('D11')
                        }}/>D11</label>
                        <label><input type='checkbox' id={'D12'} onClick={() => {
                            choiceSeat('D12')
                        }}/>D12</label>
                        <label><input type='checkbox' id={'D13'} onClick={() => {
                            choiceSeat('D13')
                        }}/>D13</label>
                        <label><input type='checkbox' id={'D14'} onClick={() => {
                            choiceSeat('D14')
                        }}/>D14</label>
                        <label><input type='checkbox' id={'D15'} onClick={() => {
                            choiceSeat('D15')
                        }}/>D15</label>
                        <label><input type='checkbox' id={'D16'} onClick={() => {
                            choiceSeat('D16')
                        }}/>D16</label>
                        <label><input type='checkbox' id={'D17'} onClick={() => {
                            choiceSeat('D17')
                        }}/>D17</label>
                        <label><input type='checkbox' id={'D18'} onClick={() => {
                            choiceSeat('D18')
                        }}/>D18</label>
                        <label><input type='checkbox' id={'D19'} onClick={() => {
                            choiceSeat('D19')
                        }}/>D19</label>
                        <label><input type='checkbox' id={'D20'} onClick={() => {
                            choiceSeat('D20')
                        }}/>D20</label>


                        <br/><br/><br/>

                    </div>

                    <div>
                        <div>R</div>
                    </div>
                    <div className={'R'}>
                        <label><input type='checkbox' id={'E1'} onClick={() => {
                            choiceSeat('E1')
                        }}/>E1</label>
                        <label><input type='checkbox' id={'E2'} onClick={() => {
                            choiceSeat('E2')
                        }}/>E2</label>
                        <label><input type='checkbox' id={'E3'} onClick={() => {
                            choiceSeat('E3')
                        }}/>E3</label>
                        <label><input type='checkbox' id={'E4'} onClick={() => {
                            choiceSeat('E4')
                        }}/>E4</label>
                        <label><input type='checkbox' id={'E5'} onClick={() => {
                            choiceSeat('E5')
                        }}/>E5</label>
                        <label><input type='checkbox' id={'E6'} onClick={() => {
                            choiceSeat('E6')
                        }}/>E6</label>
                        <label><input type='checkbox' id={'E7'} onClick={() => {
                            choiceSeat('E7')
                        }}/>E7</label>
                        <label><input type='checkbox' id={'E8'} onClick={() => {
                            choiceSeat('E8')
                        }}/>E8</label>
                        <label><input type='checkbox' id={'E9'} onClick={() => {
                            choiceSeat('E9')
                        }}/>E9</label>
                        <label><input type='checkbox' id={'E10'} onClick={() => {
                            choiceSeat('E10')
                        }}/>E10</label>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <label><input type='checkbox' id={'E11'} onClick={() => {
                            choiceSeat('E11')
                        }}/>E11</label>
                        <label><input type='checkbox' id={'E12'} onClick={() => {
                            choiceSeat('E12')
                        }}/>E12</label>
                        <label><input type='checkbox' id={'E13'} onClick={() => {
                            choiceSeat('E13')
                        }}/>E13</label>
                        <label><input type='checkbox' id={'E14'} onClick={() => {
                            choiceSeat('E14')
                        }}/>E14</label>
                        <label><input type='checkbox' id={'E15'} onClick={() => {
                            choiceSeat('E15')
                        }}/>E15</label>
                        <label><input type='checkbox' id={'E16'} onClick={() => {
                            choiceSeat('E16')
                        }}/>E16</label>
                        <label><input type='checkbox' id={'E17'} onClick={() => {
                            choiceSeat('E17')
                        }}/>E17</label>
                        <label><input type='checkbox' id={'E18'} onClick={() => {
                            choiceSeat('E18')
                        }}/>E18</label>
                        <label><input type='checkbox' id={'E19'} onClick={() => {
                            choiceSeat('E19')
                        }}/>E19</label>
                        <label><input type='checkbox' id={'E20'} onClick={() => {
                            choiceSeat('E20')
                        }}/>E20</label>

                        <br/>

                        <label><input type='checkbox' id={'F1'} onClick={() => {
                            choiceSeat('F1')
                        }}/>F1</label>
                        <label><input type='checkbox' id={'F2'} onClick={() => {
                            choiceSeat('F2')
                        }}/>F2</label>
                        <label><input type='checkbox' id={'F3'} onClick={() => {
                            choiceSeat('F3')
                        }}/>F3</label>
                        <label><input type='checkbox' id={'F4'} onClick={() => {
                            choiceSeat('F4')
                        }}/>F4</label>
                        <label><input type='checkbox' id={'F5'} onClick={() => {
                            choiceSeat('F5')
                        }}/>F5</label>
                        <label><input type='checkbox' id={'F6'} onClick={() => {
                            choiceSeat('F6')
                        }}/>F6</label>
                        <label><input type='checkbox' id={'F7'} onClick={() => {
                            choiceSeat('F7')
                        }}/>F7</label>
                        <label><input type='checkbox' id={'F8'} onClick={() => {
                            choiceSeat('F8')
                        }}/>F8</label>
                        <label><input type='checkbox' id={'F9'} onClick={() => {
                            choiceSeat('F9')
                        }}/>F9</label>
                        <label><input type='checkbox' id={'F10'} onClick={() => {
                            choiceSeat('F10')
                        }}/>F10</label>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <label><input type='checkbox' id={'F11'} onClick={() => {
                            choiceSeat('F11')
                        }}/>F11</label>
                        <label><input type='checkbox' id={'F12'} onClick={() => {
                            choiceSeat('F12')
                        }}/>F12</label>
                        <label><input type='checkbox' id={'F13'} onClick={() => {
                            choiceSeat('F13')
                        }}/>F13</label>
                        <label><input type='checkbox' id={'F14'} onClick={() => {
                            choiceSeat('F14')
                        }}/>F14</label>
                        <label><input type='checkbox' id={'F15'} onClick={() => {
                            choiceSeat('F15')
                        }}/>F15</label>
                        <label><input type='checkbox' id={'F16'} onClick={() => {
                            choiceSeat('F16')
                        }}/>F16</label>
                        <label><input type='checkbox' id={'F17'} onClick={() => {
                            choiceSeat('F17')
                        }}/>F17</label>
                        <label><input type='checkbox' id={'F18'} onClick={() => {
                            choiceSeat('F18')
                        }}/>F18</label>
                        <label><input type='checkbox' id={'F19'} onClick={() => {
                            choiceSeat('F19')
                        }}/>F19</label>
                        <label><input type='checkbox' id={'F20'} onClick={() => {
                            choiceSeat('F20')
                        }}/>F20</label>


                        <br/><br/><br/>

                    </div>

                    <div>
                        <div>S</div>
                    </div>
                    <div className={'S'}>
                        <label><input type='checkbox' id={'G1'} onClick={() => {
                            choiceSeat('G1')
                        }}/>G1</label>
                        <label><input type='checkbox' id={'G2'} onClick={() => {
                            choiceSeat('G2')
                        }}/>G2</label>
                        <label><input type='checkbox' id={'G3'} onClick={() => {
                            choiceSeat('G3')
                        }}/>G3</label>
                        <label><input type='checkbox' id={'G4'} onClick={() => {
                            choiceSeat('G4')
                        }}/>G4</label>
                        <label><input type='checkbox' id={'G5'} onClick={() => {
                            choiceSeat('G5')
                        }}/>G5</label>
                        <label><input type='checkbox' id={'G6'} onClick={() => {
                            choiceSeat('G6')
                        }}/>G6</label>
                        <label><input type='checkbox' id={'G7'} onClick={() => {
                            choiceSeat('G7')
                        }}/>G7</label>
                        <label><input type='checkbox' id={'G8'} onClick={() => {
                            choiceSeat('G8')
                        }}/>G8</label>
                        <label><input type='checkbox' id={'G9'} onClick={() => {
                            choiceSeat('G9')
                        }}/>G9</label>
                        <label><input type='checkbox' id={'G10'} onClick={() => {
                            choiceSeat('G10')
                        }}/>G10</label>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <label><input type='checkbox' id={'G11'} onClick={() => {
                            choiceSeat('G11')
                        }}/>G11</label>
                        <label><input type='checkbox' id={'G12'} onClick={() => {
                            choiceSeat('G12')
                        }}/>G12</label>
                        <label><input type='checkbox' id={'G13'} onClick={() => {
                            choiceSeat('G13')
                        }}/>G13</label>
                        <label><input type='checkbox' id={'G14'} onClick={() => {
                            choiceSeat('G14')
                        }}/>G14</label>
                        <label><input type='checkbox' id={'G15'} onClick={() => {
                            choiceSeat('G15')
                        }}/>G15</label>
                        <label><input type='checkbox' id={'G16'} onClick={() => {
                            choiceSeat('G16')
                        }}/>G16</label>
                        <label><input type='checkbox' id={'G17'} onClick={() => {
                            choiceSeat('G17')
                        }}/>G17</label>
                        <label><input type='checkbox' id={'G18'} onClick={() => {
                            choiceSeat('G18')
                        }}/>G18</label>
                        <label><input type='checkbox' id={'G19'} onClick={() => {
                            choiceSeat('G19')
                        }}/>G19</label>
                        <label><input type='checkbox' id={'G20'} onClick={() => {
                            choiceSeat('G20')
                        }}/>G20</label>

                        <br/>

                        <label><input type='checkbox' id={'H1'} onClick={() => {
                            choiceSeat('H1')
                        }}/>H1</label>
                        <label><input type='checkbox' id={'H2'} onClick={() => {
                            choiceSeat('H2')
                        }}/>H2</label>
                        <label><input type='checkbox' id={'H3'} onClick={() => {
                            choiceSeat('H3')
                        }}/>H3</label>
                        <label><input type='checkbox' id={'H4'} onClick={() => {
                            choiceSeat('H4')
                        }}/>H4</label>
                        <label><input type='checkbox' id={'H5'} onClick={() => {
                            choiceSeat('H5')
                        }}/>H5</label>
                        <label><input type='checkbox' id={'H6'} onClick={() => {
                            choiceSeat('H6')
                        }}/>H6</label>
                        <label><input type='checkbox' id={'H7'} onClick={() => {
                            choiceSeat('H7')
                        }}/>H7</label>
                        <label><input type='checkbox' id={'H8'} onClick={() => {
                            choiceSeat('H8')
                        }}/>H8</label>
                        <label><input type='checkbox' id={'H9'} onClick={() => {
                            choiceSeat('H9')
                        }}/>H9</label>
                        <label><input type='checkbox' id={'H10'} onClick={() => {
                            choiceSeat('H10')
                        }}/>H10</label>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <label><input type='checkbox' id={'H11'} onClick={() => {
                            choiceSeat('H11')
                        }}/>H11</label>
                        <label><input type='checkbox' id={'H12'} onClick={() => {
                            choiceSeat('H12')
                        }}/>H12</label>
                        <label><input type='checkbox' id={'H13'} onClick={() => {
                            choiceSeat('H13')
                        }}/>H13</label>
                        <label><input type='checkbox' id={'H14'} onClick={() => {
                            choiceSeat('H14')
                        }}/>H14</label>
                        <label><input type='checkbox' id={'H15'} onClick={() => {
                            choiceSeat('H15')
                        }}/>H15</label>
                        <label><input type='checkbox' id={'H16'} onClick={() => {
                            choiceSeat('H16')
                        }}/>H16</label>
                        <label><input type='checkbox' id={'H17'} onClick={() => {
                            choiceSeat('H17')
                        }}/>H17</label>
                        <label><input type='checkbox' id={'H18'} onClick={() => {
                            choiceSeat('H18')
                        }}/>H18</label>
                        <label><input type='checkbox' id={'H19'} onClick={() => {
                            choiceSeat('H19')
                        }}/>H19</label>
                        <label><input type='checkbox' id={'H20'} onClick={() => {
                            choiceSeat('H20')
                        }}/>H20</label>


                        <br/><br/><br/>

                    </div>
                </div>

                <div className={'sideclass'}>
                    <span>좌석 선택</span>

                    <div className={'seatnum'}>
                        {state.selectseat}
                    </div>
                    <div className={'seatprice'}>
                        {total}원
                    </div>
                </div>
            </div>

            <div className="right_contents section_payment">
                {/* <h3 className="title-box font-mss">Payment info / Agreement <span
                    className="korSub">결제 정보 / 주문자 동의</span></h3> */}
                <div>
                    <div className="cell_order_form">
                        <div className="clear cell_order_form1 border_add_order" id="payment_info_area">
                            <div className="__payment-view __payment-pg-view">
                                <ul className="list_payment_order">
                                    <li className="cell_discount_tit new-payment-area">결제 안내</li>
                                    <li className="cell_discount_detail payment-area">
                                        <div id="pay_info2">
                                            <div id="div_card" className="box-payment-method">
                                                <div id="div_kkopay">
                                                    {/* <ul className="order-notice__bullet">
                                                        <li className="order-notice__bullet-item">
                                                            카카오페이는 카카오톡에서 카드를 등록, 간단하게 비밀번호만으로 결제할 수 있는 빠르고 편리한 모바일 결제
                                                            서비스입니다.
                                                        </li>
                                                        <li className="order-notice__bullet-item">
                                                            지원 카드 : 모든 카드 등록/결제 가능
                                                        </li>
                                                    </ul> */}
                                                    <div></div>
                                                    <div>- 카카오페이 : 카카오톡에서 카드 등록 후 비밀번호만으로 결제 가능</div>
                                                    <div>- 지원 카드 : 모든 카드 등록/결제 가능</div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>


                    <div className="submitBtn">
                            <Button className="btn btn-dark" onClick={()=>{
                                state.totalprice = total;
                                navigate('/pay');
                            }}>{total}원</Button>
                    </div>
                </div>
            </div>
        </div>
    );

}