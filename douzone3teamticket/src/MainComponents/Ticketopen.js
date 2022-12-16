import React from "react";
import Slider from "react-slick";

import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import '../store'

import '../css/etcCss.css'

export default function CenterMode() {

    let navigate = useNavigate();
    let state = useSelector( (state) => { return state });

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 400,
        vertical: true,
        verticalSwiping: true,
        autoplay: true,
        autoplaySpeed: 3000
    };
    return (
        <div className={"upload"}>
            <Slider {...settings}>
                <div style={{width: 320}} onClick={ ()=>{
                    localStorage.setItem('performanceId', 0);
                    navigate('/theater/detail/0');
                } }>
                    <img src={state.theater[0].imageadr}/>
                </div>
                <div style={{width: 320}} onClick={ ()=>{
                    localStorage.setItem('performanceId', 1);
                    navigate('/musical/detail/1');
                } }>
                    <img src={state.musical[1].imageadr}/>
                </div>
                <div style={{width: 320}} onClick={ ()=>{
                    localStorage.setItem('performanceId', 2);
                    navigate('/classic/detail/2');
                } }>
                    <img src={state.classic[2].imageadr}/>
                </div>
                <div style={{width: 320}} onClick={ ()=>{
                    localStorage.setItem('performanceId', 3);
                    navigate('/concert/detail/3');
                } }>
                    <img src={state.concert[3].imageadr}/>
                </div>
                <div style={{width: 320}} onClick={ ()=>{
                    localStorage.setItem('performanceId', 4);
                    navigate('/theater/detail/4');
                } }>
                    <img src={state.theater[4].imageadr}/>
                </div>
                <div style={{width: 320}} onClick={ ()=>{
                    localStorage.setItem('performanceId', 5);
                    navigate('/musical/detail/5');
                } }>
                    <img src={state.musical[5].imageadr}/>
                </div>
            </Slider>
        </div>
    );
}
