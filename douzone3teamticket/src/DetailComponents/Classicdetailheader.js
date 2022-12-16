import { useSelector } from "react-redux";
import ClassicdetailBody from "./Classicdetailbody";
import {useNavigate} from "react-router-dom";
import 'react-calendar/dist/Calendar.css'; // css import
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState} from "react";
import { ko } from "date-fns/esm/locale";
import '../css/Detailheader.css'
import moment from "moment";
import 'react-calendar/dist/Calendar.css'; // css import

function Classicdetailheader() {

    let state = useSelector((state) => state)

    let find;
    function sortAfter (){
        let i;
        
        for (i = 0; i < state.classic.length; i++) {
            if(localStorage.getItem('performanceId') == state.classic[i].id){
                find = state.classic[i];
                break;
            }
        }
    }


    let navigate = useNavigate();

    return (
        <div>
             {sortAfter()}
            <div className="renew-wrap">
                <div className="renew-content">

                    <div className="rn-02">
                        <p className="rn-big-title">{find.title}</p>
                    </div>
                </div>
            </div>
            <div className="movie-pop-wrap">
            </div>
            <div className="renew-wrap rw2">
                <div className="renew-content">
                    <div className="rn-03">
                        <div className="rn-03-left">
                            <div className="rn-product-imgbox">
                                <img src={find.imageadr} />
                            </div>
                        </div>
                        <div className="rn-03-right">
                            <div className="rn-product-area1">
                                <dl>
                                    <dt>등급</dt>
                                    <dd>&nbsp;{find.rate}</dd>
                                    <dt>관람시간</dt>
                                    <dd>&nbsp;{find.showtime}</dd>
                                    <dt>출연</dt>
                                    <dd>&nbsp;<a className='rn-product-peole'>{find.cast}</a></dd>
                                    <dt id="dtPrice">가격</dt>
                                    <dd id="divPrice" className="rn-product-price">
                                        <ul className="rn-product-price1">
                                            <li>VIP석 <span className='rn-red'>{find.priceVIP}</span>원</li>
                                            <li>SR석 <span className='rn-red'>{find.priceSR}</span>원</li>
                                            <li>R석 <span className='rn-red'>{find.priceR}</span>원</li>
                                            <li>S석 <span className='rn-red'>{find.priceS}</span>원</li>
                                        </ul>
                                    </dd>
                                    <dd className="rn-product-dc"></dd>
                                </dl>
                            </div>

                            <div className="rn-product-area3">
                                <dl>
                                    <dt>공연시간 안내</dt>
                                    <dd>{find.showyear}년 {find.showmonth}월 {find.showday}일 오후 {find.starttime}시</dd>
                                    <dt id="deliveryTitle">배송정보</dt>
                                    <dd>{find.delivery}</dd>
                                </dl>
                            </div>

                        </div>
                    </div>
                    <div className="rn-05">
                        <div className="calender2-1">
                            
                                <a className="calender3-1">날짜 선택 및 일정</a>
                            
                            <div className="calender3-2">
                                <Calender />
                                <div className="calender4-2">

                                </div>
                            </div>
                        </div>
                        <div className="calender2-2">
                            <div className="calender3-3">

                            </div>
                            <div className="caleder3-4">

                            </div>
                        </div>
                        <a onClick={ () => {
                            if (localStorage.getItem('userId') == ''){
                                alert('로그인 필요');
                                navigate('/user/login');
                            }else{
                                localStorage.setItem('gocategory', 'classic')
                                navigate('/seat');
                            }
                        } } className='rn-bb03'>예매하기</a>
                    </div>
                    <ClassicdetailBody/>
                </div>
            </div>
            
        </div>
    )
}

export default Classicdetailheader;

function Calender() {
    let state = useSelector((state) => state);
    let find;
    let i;
    for (i = 0; i < state.musical.length; i++) {
        if(localStorage.getItem('performanceId') == state.musical[i].id){
            find = state.musical[i];
            break;
        }
    }
    const [startDate, setStartDate] = useState(null);
    let showdate = find.showdate
    let showtime = find.starttime
    let vip = find.vipticket
    let sr = find.srticket
    let r = find.rticket
    let s = find.sticket

    let priceVIP = find.priceVIP
    let priceSR = find.priceSR
    let priceR = find.priceR
    let priceS = find.priceS

    return (
        <div>
            <DatePicker
            locale={ko}
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            includeDates={[new Date(), new Date(showdate)]}
            inline
            />
            <p className="calender3-1">
                * {moment(startDate).format("YYYY년 MM월 DD일")}의 예매 가능 일정 *
                {
                    moment(startDate).format("YYYY-MM-DD") === showdate ?
                    <p className="calender3-1-1">
                        <br />
                        <br />
                        {showtime}시에 공연 예정입니다.
                        <br />
                        <br />
                        <br />
                        <br />
                         #예매 가능한 좌석 
                         <br/>
                         <br/>
                         <div className="ticket">
                            <span className="ticket1"> VIP 좌석 {priceVIP} 원</span> <span className="ticket2">잔여 {vip} 석</span> <br/>
                            <br/><span className="ticket1">SR 좌석 {priceR} 원</span><span className="ticket2">잔여 {sr} 석</span> <br/>
                            <br/><span className="ticket1">R 좌석 {priceR} 원</span><span className="ticket2"> 잔여 {r} 석</span> <br/>
                            <br/><span className="ticket1">S 좌석 {priceS} 원</span><span className="ticket2"> 잔여 {s} 석</span>
                         </div>
                    </p>
                    
                    : <p className="calender3-1-1">
                        일정이 없습니다.
                    </p>
                }
            </p>
            
        </div>
    );
  };