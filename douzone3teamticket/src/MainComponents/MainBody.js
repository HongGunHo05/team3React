import React, { useState } from "react";
import Slider from "react-slick";

import ImgSlide from "../MainComponents/ImgSlide";
import VarietyInfo from "./varietyInfo";

import { useDispatch, useSelector } from "react-redux";
import CenterMode from "./Ticketopen";
import { useNavigate } from "react-router-dom";


import SearchBar from "./SearchBar";
import '../css/Main.css'

function MainBody() {

    let state = useSelector((state) => {
        return state;
    });

    let dispatch = useDispatch();

    let navigate = useNavigate();

    const [search, setSearch] = useState("");
    const onChange = (e) => {
        setSearch(e.target.value)
    }


    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "-70px",
        slidesToShow: 4,
        speed: 700,
        variableWidth: true,
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000
    };

    return (
        <div className={'bodyStart'} {...settings}>

            <div className={'Mainbody'}>
                <ImgSlide></ImgSlide>
            </div>

            <div>
                <div className={'divtitle'}>WHAT'S HOT</div>
                <br />
                <div className={'hotImg'}>
                    <Slider {...settings}>
                        <div style={{ width: 320 }} onClick={() => {
                            localStorage.setItem('performanceId', 0);
                            navigate('/classic/detail/0');
                        }}>
                            <img src={state.classic[0].imageadr} />
                        </div>
                        <div style={{ width: 320 }} onClick={() => {
                            localStorage.setItem('performanceId', 1);
                            navigate('/concert/detail/1');
                        }}>
                            <img src={state.concert[1].imageadr} />
                        </div>
                        <div style={{ width: 320 }} onClick={() => {
                            localStorage.setItem('performanceId', 2);
                            navigate('/theater/detail/2');
                        }}>
                            <img src={state.theater[2].imageadr} />
                        </div>
                        <div style={{ width: 320 }} onClick={() => {
                            localStorage.setItem('performanceId', 3);
                            navigate('/musical/detail/3');
                        }}>
                            <img src={state.musical[3].imageadr} />
                        </div>
                        <div style={{ width: 320 }} onClick={() => {
                            localStorage.setItem('performanceId', 4);
                            navigate('/classic/detail/4');
                        }}>
                            <img src={state.classic[4].imageadr} />
                        </div>
                        <div style={{ width: 320 }} onClick={() => {
                            localStorage.setItem('performanceId', 5);
                            navigate('/concert/detail/5');
                        }}>
                            <img src={state.concert[5].imageadr} />
                        </div>
                    </Slider>
                </div>
            </div>

            {/* ///////////////////////////// */}

            {/* 티켓 오픈 */}
            <div className={'ticketopen'}>
                <div className={'divtitle'}>TICKET OPEN</div>
                <CenterMode></CenterMode>
            </div>


            {/* 각종 정보 */}
            <VarietyInfo></VarietyInfo>

        </div>
    );
}

export default MainBody;