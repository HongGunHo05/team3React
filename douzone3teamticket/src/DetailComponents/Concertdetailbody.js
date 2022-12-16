import React from "react";
import { useContext, useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import { NavLink } from "react-router-dom";
import '../css/Detailbody.css'

function Concertdetailbody(){
    let state = useSelector((state) => state)
    let [clickTab, setClickTab] = useState(0);
    const [visible, setvisible] = useState(true);
    return(
    <table class="table">
        <div>
            <div class="rn-07">
                {visible ? <a href="rn-tab01" class="on">
                <NavLink onClick={()=>{setClickTab(0);setvisible(true);}}>
                        <span>상세정보</span>
                    </NavLink>
                </a> : <a href="rn-tab01" class="off">
                    <NavLink onClick={()=>{setClickTab(0);setvisible(true);}}>
                        <span>상세정보</span>
                    </NavLink>
                </a>}
                {!visible ? <a href="rn-tab01" class="on">
                <NavLink onClick={()=>{setClickTab(1);setvisible(false);}}>
                        <span>예매/취소 안내</span>
                    </NavLink>
                </a> : <a href="rn-tab01" class="off">
                    <NavLink onClick={()=>{setClickTab(1);setvisible(false);}}>
                        <span>예매/취소 안내</span>
                    </NavLink>
                </a>}
                <TabContent clickTab={clickTab}/> 
            </div>
        </div>
        </table>
        
    )
}

function TabContent({clickTab}) {
  let [fade, setFade] = useState('')
  useEffect(()=>{
    setTimeout(() => {  setFade('end') }, 10);
    return()=>{  setFade('') }
  }, [clickTab])
  let state = useSelector((state) => state)
  let divstate = true;

  let find = state.concertinfo[localStorage.getItem('performanceId')]
  let find2 = state.concert[localStorage.getItem('performanceId')]
  return (
      <div className= {`start  ${fade}`} >
        {[<div><div class="rn-tab-boxes">
                <div class="rn-tab-area rn-08 on" id="rn-tab01">
                    <div class="rn-0801">
                        <p class="rn08-tit" id="titPerfNotice">유의사항</p>

                        <div class="rn08-txt" >
                            <div class="rn08-txt" >
                                <p class="rn-blue">※ 본 공연은 가상계좌 입금 마감 시간이 예매 당일 23시 29분이오니, 무통장 입금 선택 예매 시 착오 없으시기 바랍니다.</p>
                                <br />
                                <p class="rn-blue">※ 본 공연은 네이버 쿠폰이 적용되지 않습니다.</p>
                                <p>
                                    <b>
                                        <span color="red">※ 라이브네이션 선예매는 무통장입금이 불가합니다. </span>
                                    </b>
                                </p>
                                <p class="rn-blue">※ 본 공연은 YES24공연에서 진행하는 할인쿠폰이벤트 대상에서 제외됩니다.</p>
                                <br />
                                <p>※ 매수제한 : 1인 4매</p>
                                <p>※ 티켓 수령 : {find2.delivery}</p>
                            </div>
                        </div>
                    </div>
                    <div class="rn-0802">
                        <p class="rn08-tit" id="titPerfPromotion">할인정보</p>
                        <div class="rn08-txt" id="divPerfPromotion">
                            <p>- 장애인 본인 및 동반자 1인 할인 30%</p>
                            <p>- 국가유공상이자 본인 할인 30%</p>
                            <br />
                            <p>* 온라인 예매 시 복지할인 적용이 가능합니다.</p>
                            <p>* 국가유공상이자증 또는 복지카드 상의 이름이 '예매자 본인'인 경우에만 예매 가능합니다.</p>
                            <p>* 복지할인이 적용된 티켓은 복지카드 혹은 국가유공상이자증 확인 후 현장수령만 가능합니다.</p>
                            <p>* 예매자 본인 복지카드 미 지참 시, 현장에서 차액 지불하셔야 티켓 수령이 가능합니다.</p>
                            <p>* 장애인 할인은 기타 할인과 중복 적용되지 않습니다.</p>
                        </div>
                    </div>
                    <div class="rn-0803">
                        <p class="rn08-tit">공연정보</p>
                        <div class="rn08-txt" id="divPerfContent">
                            <p className="PageDetailImage1">
                                <img src={find.imageadr1} className="txc-image">
                                </img>
                            </p>
                            <p className="PageDetailImage2">
                                
                                <img src={find.imageadr2} className="txc-image">
                                </img>
                            </p>
                        </div>
                    </div>
                   
                    <div class="rn-0805">
                        <p class="rn08-tit">상품정보제공 고시</p>
                        <div class="rn08-txt">
                            <div class="rn08-tbl rn08-tbl-plus">
                                <table>
                                    <caption></caption>
                                    <colgroup>
                                        <col width="18.5%" />
                                        <col width="31.5%" />
                                        <col width="18.5%" />
                                        <col width="31.5%" />
                                    </colgroup>
                                    <tbody>
                                        <tr>
                                            <th scope="row" class="rn08-tbl-tit2">주최/기획</th>
                                            <td>{find.agencyinfo}</td>
                                            <th scope="row" class="rn08-tbl-tit2">소비자상담</th>
                                            <td>{find.consultation}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row" class="rn08-tbl-tit2">주연</th>
                                            <td>{find.cast}</td>
                                            <th scope="row" class="rn08-tbl-tit2">관람등급</th>
                                            <td>{find.rate}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row" class="rn08-tbl-tit2">공연시간</th>
                                            <td>{find.showtime}</td>
                                            <th scope="row" class="rn08-tbl-tit2">공연장소</th>
                                            <td>{find.place}</td>
                                        </tr>
                                        <tr><th scope="row" class="rn08-tbl-tit2">취소/환불방법</th><td colspan="3">
                                            <div class="rn08-detail-box">
                                                <p>
                                                    취소 일자에 따라 아래와 같이 취소수수료가 부과됩니다. 예매일보다 관람일 기준이 우선 적용되오니 유의해주시기 바랍니다.<br />
                                                    단, 예매 후 7일 이내라도 취소시점이 공연일로부터 10일 이내라면 그에 해당하는 취소수수료가 부과됩니다.<br />
                                                    (단, 상품에 따라 취소 정책이 달라질 수 있고, 각 공연이 공지하는 취소 정책이 우선 적용되므로, 예매 시 참고하시기 바랍니다.)
                                                </p>
                                                <div class="rn08-detail-tbl">
                                                    <table>
                                                        <caption></caption>
                                                        <colgroup>
                                                            <col width="50%" />
                                                            <col width="50%" />
                                                        </colgroup>
                                                        <tbody>
                                                            <tr><th scope="col">취소일</th><th scope="col">취소수수료</th></tr>
                                                            <tr><td>예매 후 7일 이내</td><td>없음</td></tr>
                                                            <tr><td>예매 후 8일 ~ 관람일 10일 전까지</td><td>뮤지컬, 콘서트, 클래식 등: <span class="rn-red">장당 4,000원</span> / <br />연극, 전시 등: <span class="rn-red">장당 2,000원</span>(단, 티켓 금액의 10% 이내)</td></tr>
                                                            <tr><td>관람일 9일 전 ~ 관람일 7일 전까지</td><td>티켓 금액의 10%</td></tr>
                                                            <tr><td>관람일 6일 전 ~ 관람일 3일 전까지</td><td>티켓 금액의 20%</td></tr>
                                                            <tr><td>관람일 2일 전 ~ 취소마감일시까지</td><td>티켓 금액의 30%</td></tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                                <p>
                                                    예매수수료는 예매 당일 밤 12시 이전 취소 시에만 환불되며, 그 이후 기간에는 환불되지 않습니다.<br />
                                                    취소는 MY공연 예매확인/취소 에서 직접 취소 또는 고객센터(1544-6399)를 통해 취소 가능합니다.<br />
                                                    티켓이 배송된 후에는 PC/모바일 취소가 불가, 취소마감시간 이전에 예스24 고객센터로 티켓이 반송되어야 취소 가능합니다.<br />
                                                    (취소수수료는 티켓 도착일 기준으로 부과되며, 배송비는 환불되지 않습니다.)<br />
                                                    각 상품별로 취소 정책이 다르게 적용될 수 있으니, 각 상품 안내 사항을 확인해주시기 바랍니다.
                                                </p>
                                            </div>
                                        </td></tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    <div class="rn-0806">
					    <div class="rn-1101">
						    <p class="rn-1101-tit">
                                <span id="TheaterName">{find.place}</span>
                            </p>
						    <p class="rn-1101-other">
                                <span id="TheaterAddress">{find.placeadr} </span>
                                <span id="TheaterTel">{find.placeconsultation} </span>
                                
                            </p>
					    </div>
					    <div class="rn-1103">
                            <div class="rn-1103-btns">
                                <a href="javascript:;" onclick="resetMap();">되돌아가기</a>
                                <a href="javascript:;" onclick="quickSearch();">빠른길찾기</a>
                            </div>
                            <Location />
                        </div>
				    </div>
                </div>
                <div class="rn-tab-area rn-12 off" id="rn-tab05">
                </div>
            </div>
            <div class="pop-alert">
            </div>
            </div>, <div>
            <div class="rn-tab-area rn-12 on" id="rn-tab05">
    <div class="rn-1201 rn-infos-1">
        <div class="rn12-left-tit">예매</div>
        <div class="rn12-right-box">
            예매는 PC, 모바일, 고객센터 를 통해 신용카드, 가상계좌(무통장 입금), YES머니, YES상품권, 예치금 등으로 예매하실 수 있습니다.
            <br />
			    (단, 상품마다 사용 가능한 결제 수단이 다르게 적용될 수 있으니 상품 상세페이지 안내 사항을 확인해주세요.) 
            <br />
			<span class="rn12-right-underline">무통장입금 결제 선택 시 입금 마감시간은 예매일 익일 밤 11시 29분까지
            </span>
            입니다. 입금 마감시간 내 미입금 된 경우 예매가 자동 취소됩니다. 
            <br />
			(단, 상품에 따라 예매 당일 밤 11시 29분에 마감되는 경우가 있으니 예매 전후 반드시 확인해주시기 바랍니다.)
            <br/>
			예매수수료는 다음과 같습니다.
			<div class="rn12-tbl">
			    <table>
			        <caption></caption>
			        <colgroup>
				        <col width="42%" />
				        <col width="29%" />
				        <col width="29%" />
                    </colgroup>
			        <tbody>
				        <tr>
                            <th scope="col">장르</th>
                            <th scope="col">PC / 모바일</th>
                            <th scope="col">전화예매</th>
                        </tr>
				        <tr>
                            <td>콘서트, 뮤지컬, 클래식, 국악, 무용</td>
                            <td>장당 1,000원</td>
                            <td rowspan="3">장당 2,000원</td>
                        </tr>
				        <tr>
                            <td>연극, 전시</td>
                            <td>장당 500원</td>
                        </tr>
				        <tr>
                            <td>체험, 행사</td>
                            <td>장당 300원</td>
                        </tr>
			        </tbody>
			    </table>
		    </div>
	    </div>
    </div>
	<div class="rn-1201 rn-infos-2">
		<div class="rn12-left-tit">티켓수령방법</div>
			<div class="rn12-right-box">
				<div class="rn12-line"></div>
				<p>
                    <span class="rn12-right-bold">현장수령 </span>
				    티켓은 예매자 본인 수령이 기본 원칙입니다.
                    <br />
					공연 당일 예매확인서와 예매자의 신분증 을 지참하신 후 공연장 매표소에서 티켓을 수령하시면 됩니다.
                </p>
				<p>
                    <span class="rn12-right-bold">배송</span>
					배송을 선택하신 경우 예매완료(결제익일) 기준 5~7일 이내에 예매 시 입력하신 주소로 배송됩니다.(영업일 기준)
                    <br />
					일괄배송의 경우 각 상품의 지정된 배송일부터 순차적으로 배송이 시작됩니다. 영업일 기준 5~7일 정도가 소요되며, 주소지에 따라 추가될 수 있습니다.
                    <br />
					배송 시작일은 상세정보 및 예매공지사항에서 확인하실 수 있습니다.
                    <br />
					티켓 배송은 일반 택배가 아닌 인편 배송으로 진행됩니다. 인편 배송의 경우 경비실이나 우편함 등에 보관이 불가하며 부재 시 반송되니
                    <br />
                    반드시 티켓을 직접 받을 수 있는 주소를 기입 바랍니다.
                    <br />
					티켓 수령과 관련된 정책은 상품별로 상이하니 자세한 내용은 각 상품 상세정보에서 확인 부탁드립니다.
				</p>
            </div>
		</div>
		<div class="rn-1201 rn-infos-3">
			<div class="rn12-left-tit">취소마감시간</div>
			<div class="rn12-right-box">
				<div class="rn12-line"></div>
				<div class="rn12-tbl">
					<table>
						<caption></caption>
						<colgroup>
							<col width="32%" />
							<col width="28%" />
							<col width="40%" />
						</colgroup>
					    <tbody>
							<tr>
                                <th scope="col">공연 관람일</th>
                                <th scope="col">취소 마감일</th>
                            </tr>
							<tr>
                                <td>화요일 ~ 토요일</td>
                                <td>관람일 전일 평일 오후 5시</td>
                            </tr>
							<tr>
                                <td>일요일 ~ 월요일</td>
                                <td>토요일 오전 11시</td>
                            </tr>
							<tr>
                                <td >공휴일 및 공휴일 익일</td>
                                <td >공휴일 전일이 평일인 경우 - 오후 5시
                                    <br />공휴일 전일이 토요일, 일요일인 경우 - 토요일 오전 11시
                                    <br />
                                    <span class="rn12-right-red">공휴일에는 예매 취소 불가</span>
                                </td>
                            </tr>
						</tbody>
					</table>
				</div>
				<p>
					관람일 당일 예매하신 건은 취소, 변경, 환불 불가합니다.
                    <br />
					배송이 시작된 티켓의 경우 티켓이 예스24 공연 고객센터로 취소마감시간 이전까지 반송되어야 취소 가능합니다.(취소수수료는 도착일 기준으로 부과됩니다.)
                    <br />
					결제수단을 복수로 선택한 경우 인터넷으로 부분취소가 불가하오니, 고객센터로 문의해주시기 바랍니다.
				</p>
				<span class="rn12-right-red rn12-caution">
					일부 공연에 한해, 취소 마감 정책이 달라질 수 있습니다. 
                    <br />
					각 상품 상세페이지에 안내되어 있는 취소 정책이 우선 적용되오니, 반드시 예매 전 확인해주시기 바랍니다.
				</span>
			</div>
		</div>
		<div class="rn-1201 rn-infos-4">
			<div class="rn12-left-tit">취소수수료</div>
			<div class="rn12-right-box">
			    <div class="rn12-line"></div>
				<div class="rn12-tbl">
					<table>
						<caption></caption>
						<colgroup>
							<col width="40%" />
							<col width="60%" />
						</colgroup>
						<tbody>
							<tr>
                                <th scope="col">취소일</th>
                                <th scope="col">취소수수료</th>
                            </tr>
							<tr>
                                <td class="rn-color-333">예매 후 7일 이내</td>
                                <td>없음</td>
                            </tr>
							<tr>
                                <td class="rn-color-333">예매 후 8일 ~ 관람일 10일 전까지</td>
                                <td>뮤지컬, 콘서트, 클래식 : 장당 4,000원 / 연극, 전시 : 장당 2,000원(단, 티켓 금액의 10% 이내)</td>
                            </tr>
							<tr>
                                <td>관람일 9일 전 ~ 관람일 7일 전까지</td>
                                <td>티켓 금액의 10%</td>
                            </tr>
							<tr>
                                <td>관람일 6일 전 ~ 관람일 3일 전까지</td>
                                <td>티켓 금액의 20%</td>
                            </tr>
							<tr>
                                <td>관람일 2일 전 ~ 취소마감일시까지</td>
                                <td>티켓 금액의 30%</td>
                            </tr>
						</tbody>
					</table>
				</div>
				예매 후 7일 이내라도 취소시점이 관람일로부터 10일 이내라면 그에 해당하는 취소수수료가 부과됩니다. 
                <br />
				관람일 당일 취소 가능한 상품의 경우 관람일 당일 취소 시 티켓금액의 90%가 부과됩니다.
                <br/>
				<span class="rn12-right-red">상품의 특성에 따라 취소수수료 정책이 달라질 수 있습니다.(각 상품 예매 시 취소수수료 확인)</span>
			</div>
		</div>
		<div class="rn-1201 rn-infos-5">
			<div class="rn12-left-tit">환불</div>
			<div class="rn12-right-box">
				<div class="rn12-line"></div>
				예매수수료는 예매 당일 밤 12시 이전까지 환불되며, 그 이후 기간에는 환불되지 않습니다. 
                <br/>
				배송 및 반송처리 된 티켓의 배송비는 환불되지 않습니다.
				<div class="rn12-tbl">
					<table>
						<caption></caption>
						<colgroup>
							<col width="40%" />
							<col width="60%" />
						</colgroup>
					    <tbody>
							<tr>
                                <th scope="col">결제수단</th>
                                <th scope="col">환불안내</th>
                            </tr>
							<tr>
                                <td class="rn-color-333">신용카드</td>
                                <td>
                                    <p>
										일반적으로 취소완료 되고 4~5일(토, 공휴일 제외) 후 카드 승인 취소가 확인됩니다.
                                        <br/>
										취소시점에 따라 취소수수료와 예매수수료, 배송 받으신 경우 배송비를 제외한 금액만큼 환불 처리 됩니다.&nbsp;
                                        <br/>(부분 취소 시에는 잔여 티켓 금액 + 수수료 등을 제외하고 환불 처리 됩니다.)
                                        <br/>
										각 카드사의 취소 정책에 따라 승인취소 및 환급일에 차이가 있을 수 있습니다.  
                                        <br/>
										자세한 사항은 카드사로 문의 바랍니다. 
									</p>
                                </td>
                            </tr>
							<tr>
                                <td class="rn-color-333">무통장입금</td>
                                <td >
									<p>
										예매 취소 시 반드시 환불 받으실 계좌번호와 은행명을 입력하세요.
                                        <br/>
										취소수수료,예매수수료와 배송 받으신 경우 배송비를 제외한 후 환불 처리됩니다.
                                        <br/>
										취소 후 환불 처리는 영업일 기준 3~5일 정도 소요됩니다.
                                        <br/>
										환불진행상태는 MY공연&gt;예매확인/취소 상세내역에서 확인할 수 있습니다.
									</p>
									<span class="rn12-right-red">
										* 배송 받은 티켓의 취소를 위해 고객센터로 발송하실 때, 환불 받으실 계좌 정보를 기입하여 보내주시면 보다 빠른 환불 처리가 가능합니다. 
									</span>
								</td>
                            </tr>
							<tr>
                                <td >YES머니, 예치금, YES상품권, 공연예매권</td>
                                <td>
										예매 취소 시 바로 복원됩니다. 
                                        <br/>(단, 사용기간이 만료된 경우 복원되지 않으니 취소 전 확인해주시기 바랍니다.)
								</td>
                            </tr>
						</tbody>
					</table>
				</div>
			</div>
	</div>
    <p>
        <br />
    </p>
</div>
            </div>][clickTab]}
      </div>
  )
    
}
export default Concertdetailbody;

const Location=()=>{
    let state = useSelector((state) => state);
    let find = state.concertinfo[localStorage.getItem('performanceId')]

    const {kakao} = window;

    useEffect(()=>{
      var container = document.getElementById('map');
      var options = {
        center: new kakao.maps.LatLng(find.latitude, find.longitude),
        level: 3
      };

      var map = new kakao.maps.Map(container, options);
      var markerPosition  = new kakao.maps.LatLng(find.latitude, find.longitude); 
      var marker = new kakao.maps.Marker({
        position: markerPosition
    });
    marker.setMap(map);
  
      }, [])
  
  
      return (
          <div>
          <div id="map" style={{width:"1200px", height:"700px"}}></div>
         
          </div>
      )
  }