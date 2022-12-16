import React, {useState} from 'react';
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

function Pay() {
    let state = useSelector((state) => {
        return state;
    });

    let navigate = useNavigate();

    function onClickPayment() {

        const {IMP} = window;
        IMP.init('imp02185252');

        const data = {
            pg: 'kakaopay',
            pay_method: 'card',
            merchant_uid: `mid_${new Date().getTime()}`,
            amount: state.totalprice,
            name: '티켓'
        };

        IMP.request_pay(data, callback);
    }

    function callback(response) {
        const {
            success,
            merchant_uid,
            error_msg,
        } = response;

        if (success) {
            let pur = JSON.parse(localStorage.getItem("buy") || "[]");

            let today = new Date();

            let year = today.getFullYear(); // 년도
            let month = today.getMonth() + 1;  // 월
            let date = today.getDate();  // 날짜
            let day = today.getDay();  // 요일

            switch (day){
                case 1: day = '월'; break;
                case 2: day = '화'; break;
                case 3: day = '수'; break;
                case 4: day = '목'; break;
                case 5: day = '금'; break;
                case 6: day = '토'; break;
                case 7: day = '일'; break;
            }

            let buydate = year + '/' + month + '/' + date + '/' + day;


            pur.push({userid: localStorage.getItem('userId'), seatnum:[...state.selectseat],
            cate: localStorage.getItem('gocategory'), cateid: localStorage.getItem('performanceId'),
            purdate: buydate, totalprice : state.totalprice});

            localStorage.setItem('buy', JSON.stringify(pur));

            alert('결제 성공');
            navigate('/success');
        } else {
            alert(`결제 실패: ${error_msg}`);
            window.location.href = '/seat';
        }
    }

    return (

        <div>
            {onClickPayment()}
        </div>

    );
}

export default Pay;