import React, {useState} from "react";
import Modal from 'react-bootstrap/Modal';

import '../css/etcCss.css'

export default function VarietyInfo(){

    let [show, setShow] = useState(false);
    let [useInfo, setUseInfo] = useState(false);
    let [faq, setFaq] = useState(false);

    return(
        <div className="cont">
            <div className="con-left">
                <p className="tell"><img src="http://tkfile.yes24.com/imgNew/main/tell.png" alt=""/></p>
                <dl>
                    <dt>평일</dt>
                    <dd>09:00~18:00</dd>
                    <dt>토요일</dt>
                    <dd>09:00~17:00<span>(일요일 및 공휴일 휴무)</span></dd>
                </dl>
            </div>
            <div className={'v-line'}></div>

            <div className="infoCenter">
                <button type="button" className="btn btn-dark" onClick={() => setShow(true)}>공지사항</button>
                <button type="button" className="btn btn-dark" onClick={() => setUseInfo(true)}>이용안내</button>
                <button type="button" className="btn btn-dark" onClick={() => setFaq(true)}>FAQ</button>
            </div>

            <div className={'v-line'}></div>

            <div className="con-right">
                <div className={'socialappdown'}>
                    <div className="social">
                        <a href="https://www.facebook.com/YES24Play" className="soc1"><img
                            src="http://tkfile.yes24.com/imgNew/main/social1.png" alt=""/></a>
                        <a href="https://www.instagram.com/yes24ticket" className="soc2"/><img
                        src="http://tkfile.yes24.com/imgNew/main/social2.png" alt=""/>
                        <a href="https://pf.kakao.com/_vRvxcV" className="soc3"><img
                            src="http://tkfile.yes24.com/imgNew/main/social3.png" alt=""/></a>
                    </div>

                    <div className="appdown">
                        <a href="https://play.google.com/store/apps/details?id=com.yes24.ticket"><img
                            src="http://tkfile.yes24.com/imgNew/main/appdown1.png" alt=""/></a>
                        <a href="https://itunes.apple.com/kr/app/yeseu24-gong-yeon-yemae/id937042887?l=en&amp;mt=8"><img
                            src="http://tkfile.yes24.com/imgNew/main/appdown2.png" alt=""/></a>
                    </div>
                </div>
                <a href="https://www.culture.go.kr/deduction/main.do" className="deduction" target="_blank"><img
                    src="http://tkfile.yes24.com/imgNew/main/deduction.png" alt=""/></a>
            </div>

            {/*////////////////////////////////////////////////////////////////////////*/}
            {/*공지사항*/}
            <Modal
                show={show}
                onHide={() => setShow(false)}
                dialogClassName="modal-90w"
                aria-labelledby="example-custom-modal-styling-title"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-custom-modal-styling-title">
                        공지사항
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="accordion" id="accordionExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingOne">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    뮤지컬 〈미드나잇 : 앤틀러스〉 프리뷰 티켓오픈 안내
                                </button>
                            </h2>
                            <div id="collapseOne" className="accordion-collapse collapse show"
                                 aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <img src={'http://tkfile.yes24.com/upload2/BoardNotice/202212/20221209/20221209-13cc53ff-c204-4903-b1ea-379a3ecd8da1.jpg'}/>
                                    <br/>
                                    <strong>공연 개요</strong><br/>

                                    공연 일정: 2023년 1월 31일(화)~2023년 4월 23(일)<br/>
                                    공연 시간: 평일 8시 / 주말, 공휴일 3시, 6시 30분(월 공연없음)<br/>
                                    공연 장소: 플러스씨어터<br/>
                                    티켓 가격: R석 66,000원, 앤틀러스석 55,000원, 비지터석 50,000원, S석 44,000원<br/>
                                    공연 시간: 90분(인터미션 없음)<br/>
                                    관람 등급: 14세 이상(2023년 기준 2010년 포함 이전 출생자 관람 가능)<br/><br/>

                                    뮤지컬 - 미드나잇 : 앤틀러스 프리뷰 티켓오픈 - 두드리다!<br/>
                                    ※ 티켓 오픈일자: 2022년 12월 15일(목) 오후 3시<br/>
                                    ※ 티켓 오픈기간: 2023년 1월 31일(화)~2월 9일(목)<br/><br/>

                                    ※ 비지터 역의 에녹 배우는 2023년 3월 공연부터 합류 예정입니다. 예매 시 참고 부탁드립니다.
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingTwo">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    정동원콘서트 2nd 음학회 ‘音學會’
                                </button>
                            </h2>
                            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"
                                 data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <img src={'http://tkfile.yes24.com/upload2/BoardNotice/202212/20221209/20221209-7f53e1eb-a243-454f-aa66-0783855c27ca.jpg'}/>
                                    <br/>
                                    <strong>공연 개요</strong><br/>

                                    공 연 명 : 정동원콘서트 2nd 음학회 ‘音學會’ (2nd JEONG DONG WON’S ORCHESTRA CONCERT) - 부산<br/>
                                    공연일정 : 2023년 1월 28일(토) ~ 2023년 1월 29일(일)<br/>
                                    공연시간 : 1월 28일(토) 6PM / 1월 29일(일) 4PM<br/>
                                    공연장소 : 부산 KBS홀<br/>
                                    티켓가격 : VIP석 143,000원, R석 132,000원, S석 121,000원<br/>
                                    관람연령 : 만 7세 이상 관람가<br/>
                                    관람시간 : 120분<br/>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingThree">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseThree" aria-expanded="false"
                                        aria-controls="collapseThree">
                                    TOUR 2023 아시니코 내한공연 티켓오픈안내
                                </button>
                            </h2>
                            <div id="collapseThree" className="accordion-collapse collapse"
                                 aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <img src={'http://tkfile.yes24.com/upload2/BoardNotice/202212/20221206/20221206-f9f9db88-680f-461a-8a5c-56efc235fcd8.jpg'}/>
                                    <br/>
                                    <strong>공연 개요</strong><br/>

                                    공연명 : TOUR 2023 아시니코 내한공연<br/>
                                    공연일시 : 2023년 3월 29일(수) 8PM<br/>
                                    공연장소 : 왓챠홀<br/>
                                    티켓가격 : 전석 88,000원<br/>
                                    관람등급 : 18세 이상<br/>
                                    러닝타임 : 약 90분<br/>
                                    1인 4매 예매 가능 (한 개의 ID로 4매까지 예매 가능)
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
            {/*////////////////////////////////////////////////////////////////////////*/}


            {/*////////////////////////////////////////////////////////////////////////*/}
            {/*이용안내*/}
            <Modal
                show={useInfo}
                onHide={() => setUseInfo(false)}
                dialogClassName="modal-90w"
                aria-labelledby="example-custom-modal-styling-title"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-custom-modal-styling-title">
                        이용안내
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="accordion" id="accordionExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingOne">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    예매방법
                                </button>
                            </h2>
                            <div id="collapseOne" className="accordion-collapse collapse show"
                                 aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <strong>1. 본인인증/로그인</strong><br/>
                                    빠른 예매를 위해 로그인을 먼저 해주세요.<br/>
                                    예매는 본인인증된 ID로만 가능합니다.<br/>
                                    개인 정보 보호 및 관리를 위해 예매 전 가입된 회원 정보를 확인해주시기 바라며, 주기적으로 비밀번호를 변경해주시기 바랍니다.<br/>

                                    <br/>
                                    <strong>2. 공연 및 관람일시 선택</strong><br/>
                                    관람 원하는 공연 선택 > [예매하기] 버튼 클릭 > 관람하실 날짜와 시간을 선택합니다.<br/>
                                    (공연 상세페이지에서 관람일 및 회차를 선택 한 경우 이후 단계에 자동 적용 됩니다.)<br/>

                                    <br/>
                                    <strong>3. 좌석 선택</strong><br/>
                                    좌석도에서 원하는 좌석을 선택합니다. 좌석 선택 시 티켓 결제 가격이 자동 적용 됩니다.<br/>
                                    규모가 큰 공연장은 미니맵을 이용하여 구역, 층을 이동하여 다른 좌석을 선택할 수 있습니다.<br/>
                                    다른 일시로의 변경을 원하는 경우 좌석도 상단에서 관람일/회차 변경을 선택해주세요.<br/>

                                    <br/>
                                    <strong>4. 할인/쿠폰 선택</strong><br/>
                                    적용 받고자 하는 할인 종류와 매수를 선택합니다.<br/>
                                    장애인, 국가유공자 할인 등 증빙이 필요한 할인이 있을 수 있으니 반드시<br/>
                                    유의사항을 확인해주시기 바랍니다.<br/>
                                    신용카드 할인을 선택한 경우 해당 카드로만 결제가 가능합니다.<br/>

                                    <br/>
                                    <strong>5. 수령방법 선택</strong><br/>
                                    현장수령, 배송 중 원하는 수령 방법을 선택합니다.(상품의 특성에 따라 수령<br/>
                                    방법 선택이 제한될 수 있습니다.)<br/>

                                    <br/>
                                    <strong>6. 결제방법 선택</strong><br/>
                                    원하는 결제 수단을 선택합니다.<br/>
                                    상품별로 사용 가능한 결제 수단에 제한이 있을 수 있습니다.<br/>

                                    <br/>
                                    <strong>7. 정책 동의</strong><br/>
                                    취소 마감 시간 및 취소 수수료 정책을 확인하고 이에 동의합니다.<br/>
                                    예매/관람 서비스 제공을 위한 제3자 정보 제공을 확인하고 이에 동의합니다.<br/>

                                    <br/>
                                    <strong>8. 예매내역 확인</strong><br/>
                                    결제 완료 후 예매 내역은 회원 정보 상의 이메일 또는 카카오톡 알림톡/SMS 로 발송되며, MY티켓의 [예매확인/취소] 에서도 확인 가능합니다.<br/>

                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingTwo">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    취소 / 환불
                                </button>
                            </h2>
                            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"
                                 data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <strong>취소 마감 기한</strong><br/><br/>
                                    <table>
                                        <th>관람일</th>
                                        <th>취소 마감 기한</th>

                                        <tr>
                                            <td>화요일 ~ 토요일</td>
                                            <td>관람일 전일 평일 오후 5시</td>
                                        </tr>
                                        <tr>
                                            <td>일요일 ~ 월요일</td>
                                            <td>토요일 오전 11시</td>
                                        </tr>
                                        <tr>
                                            <td>공휴일 및 공휴일 익일</td>
                                            <td>공휴일 전일이 평일인 경우 오후 5시<br/>
                                                공휴일 전일이 토요일, 일요일인 경우 토요일 오전 11시</td>
                                        </tr>
                                    </table>

                                    <strong>취소수수료</strong><br/>
                                    <table>
                                        <th>취소알</th>
                                        <th>취소수수료</th>

                                        <tr>
                                            <td>예매 후 7일 이내</td>
                                            <td>없음</td>
                                        </tr>
                                        <tr>
                                            <td>예매 후 8일 ~ 관람일 10일 전까지</td>
                                            <td>뮤지컬, 콘서트, 클래식 : 장당 4,000원 / <br/>
                                                연극, 전시 : 장당 2,000원(단, 티켓 금액의 10% 이내)</td>
                                        </tr>
                                        <tr>
                                            <td>관람일 9일 전 ~ 관람일 7일 전까지	</td>
                                            <td>티켓 금액의 10%</td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingThree">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseThree" aria-expanded="false"
                                        aria-controls="collapseThree">
                                    티켓 수령
                                </button>
                            </h2>
                            <div id="collapseThree" className="accordion-collapse collapse"
                                 aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <strong>현장 수령</strong><br/>
                                    공연 당일 매표소에서 예매자 본인 신분증, 예매내역서(예약번호) 로 본인 확인 후 티켓을 수령합니다.<br/>
                                    장애인, 국가유공자 등의 할인 혜택을 받아 예매하신 경우 관련 증빙 서류를 꼭 지참해주시기 바랍니다.<br/>
                                    상품에 따라 예매자 본인 외 티켓 수령이 불가할 수 있습니다.<br/>
                                    상품에 따라 현장 수령에 제한이 있을 수 있으니 각 상품별 상세 정보를 확인해주시기 바랍니다.<br/>

                                    <br/>
                                    <strong>배송</strong><br/>
                                    배송비는 예매 건당 3,000원으로, 묶음 배송이 불가합니다.<br/>
                                    공연일 기준 12일 전까지 예매된 건에 한해 배송이 가능합니다.<br/>
                                    일반적으로예매완료(결제완료 후 익일) 후 4~5일 이내에 수령이 가능합니다(영업일 기준).<br/>
                                    단 일괄배송 상품의 경우 배송 시작일이 지정되어 있으니 상세 정보를 확인해주시기 바랍니다.<br/>
                                    배송 선택 시 수령자 정보를 정확히 입력해주시기 바랍니다.<br/>
                                    오기입/미기입에 따른 배송 문제에 대해서는 회원 본인에게 책임이 있습니다.<br/>
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
            {/*////////////////////////////////////////////////////////////////////////*/}

            {/*////////////////////////////////////////////////////////////////////////*/}
            {/*FAQ*/}
            <Modal
                show={faq}
                onHide={() => setFaq(false)}
                dialogClassName="modal-90w"
                aria-labelledby="example-custom-modal-styling-title"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-custom-modal-styling-title">
                        FAQ
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="accordion" id="accordionExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingOne">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    결제 완료 메시지를 받았는데 예매 내역이 없어요
                                </button>
                            </h2>
                            <div id="collapseOne" className="accordion-collapse collapse show"
                                 aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    동시 접속 수가 많을 경우 좌석 선택 중복건이 다수 발생할 수 있습니다.<br/><br/>

                                    이런 경우에는 결제를 먼저 완료하신 고객님의 예매가 완료됩니다.<br/><br/>

                                    또한, 결제 완료 메시지를 받으셨더라도 예매번호가 생성 되지 않은 경우 정상 예매건이 아니므로<br/>
                                    [MY티켓>예매확인/취소]에서 예매내역을 꼭 확인해 주시기 바랍니다.<br/><br/>

                                    만약, 예매 내역 없이 결제만 완료가 되었다면 자동으로 취소가 진행되나,<br/>
                                    빠른 취소를 원하신다면 예매자 본인께서 고객센터 1544-6399 또는 1:1문의하기로<br/>
                                    연락해 주시기 바랍니다.
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingTwo">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    본인인증된 ID로만 예매 할 수 있나요?
                                </button>
                            </h2>
                            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"
                                 data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    공연 예매는 본인 인증된 ID로만 예매 가능합니다.<br/><br/>

                                    비회원 또는 간편 가입 회원 예매는 불가하오니,<br/>
                                    예매 전 휴대폰 또는 I-PIN 으로 본인 인증을 하신 후 재로그인 해주시기 바랍니다.
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingThree">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseThree" aria-expanded="false"
                                        aria-controls="collapseThree">
                                    공연 예매 시 예매수수료가 부과되나요?
                                </button>
                            </h2>
                            <div id="collapseThree" className="accordion-collapse collapse"
                                 aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    장르 및 예매 채널에 따라 예매수수료가 부과됩니다. <br/><br/>

                                    <table className={'reserFAQ'}>
                                        <th></th>
                                        <th>공연</th>
                                        <th>연극 / 전시</th>
                                        <th>체험 / 행사</th>
                                        <tr>
                                            <td>PC/모바일</td>
                                            <td>장당 1,000원</td>
                                            <td>장당 5,000원</td>
                                            <td>장당 300원</td>
                                        </tr>
                                        <tr>
                                            <td>고객센터</td>
                                            <td colSpan={3}>장당 2,000원</td>
                                        </tr>
                                    </table>


                                </div>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    );
}