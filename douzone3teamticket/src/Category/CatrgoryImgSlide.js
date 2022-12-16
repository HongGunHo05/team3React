import React from "react";
import Slider from "react-slick";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

import '../css/CategoryImgSlide.css'

// 콘서트 이미지슬라이드
const ConcertSlide = () => {

    let state = useSelector((state) => {
        return state;
    });

    let navigate = useNavigate();

    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "70px",
        slidesToShow: 2,
        speed: 900,
        variableWidth: true,
        dots: true,
        autoplay: true,
        autoplaySpeed: 1000
    };

    return (
            <div>
                <div className={'slideTitle'}><span className="slideTitleColor">ㅡ</span> CONCERT <span className="slideTitleColor">ㅡ</span></div>
                <br/>
                <div className={'slideImg'}>
                    <Slider {...settings}>

                        <div style={{width: 320}} onClick={ ()=>{
                            localStorage.setItem('performanceId', 0);
                            navigate('/concert/detail/0');
                        } }>
                            {/* <img src={state.concert[0].imageadr}/> */}
                            <img src="http://tkfile.yes24.com/upload2/PerfBlog/202211/20221118/20221118-44117.jpg"/>
                        </div>

                        <div style={{width: 320}} onClick={ ()=>{
                            localStorage.setItem('performanceId', 1);
                            navigate('/concert/detail/1');
                        } }>
                            {/* <img src={state.concert[1].imageadr}/> */}
                            <img src="http://tkfile.yes24.com/upload2/PerfBlog/202212/20221202/20221202-44323.jpg"/>
                        </div>

                        <div style={{width: 320}} onClick={ ()=>{
                            localStorage.setItem('performanceId', 2);
                            navigate('/concert/detail/2');
                        } }>
                            {/* <img src={state.concert[2].imageadr}/> */}
                            <img src="http://tkfile.yes24.com/upload2/PerfBlog/202210/20221024/20221024-43889.jpg"/>
                        </div>

                        <div style={{width: 320}} onClick={ ()=>{
                            localStorage.setItem('performanceId', 3);
                            navigate('/concert/detail/3');
                        } }>
                            {/* <img src={state.concert[3].imageadr}/> */}
                            <img src="http://tkfile.yes24.com/upload2/PerfBlog/202211/20221107/20221107-44018.jpg"/>
                        </div>

                        <div style={{width: 320}} onClick={ ()=>{
                            localStorage.setItem('performanceId', 4);
                            navigate('/concert/detail/4');
                        } }>
                            {/* <img src={state.concert[4].imageadr}/> */}
                            <img src="http://tkfile.yes24.com/upload2/PerfBlog/202211/20221116/20221116-44112.jpg"/>
                        </div>

                        <div style={{width: 320}} onClick={ ()=>{
                            localStorage.setItem('performanceId', 5);
                            navigate('/concert/detail/5');
                        } }>
                            {/* <img src={state.concert[5].imageadr}/> */}
                            <img src="http://tkfile.yes24.com/upload2/PerfBlog/202211/20221128/20221128-44299.jpg"/>
                        </div>
                        
                    </Slider>
                </div>
            </div>
    );
}

// 뮤지컬 이미지슬라이드
const MusicalSlide = () => {

    let state = useSelector((state) => {
        return state;
    });

    let navigate = useNavigate();

    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "70px",
        slidesToShow: 2,
        speed: 900,
        variableWidth: true,
        dots: true,
        autoplay: true,
        autoplaySpeed: 1000
    };

    return (
            <div>
                <div className={'slideTitle'}><span className="slideTitleColor">ㅡ</span> MUSICAL <span className="slideTitleColor">ㅡ</span></div>
                <br/>
                <div className={'slideImg'}>
                    <Slider {...settings}>

                        <div style={{width: 320}} onClick={ ()=>{
                            localStorage.setItem('performanceId', 0);
                            navigate('/musical/detail/0');
                        } }>
                            {/* <img src={state.musical[0].imageadr}/> */}
                            <img src="http://tkfile.yes24.com/upload2/PerfBlog/202212/20221205/20221205-43815.jpg"/>
                        </div>

                        <div style={{width: 320}} onClick={ ()=>{
                            localStorage.setItem('performanceId', 1);
                            navigate('/musical/detail/1');
                        } }>
                            {/* <img src={state.musical[1].imageadr}/> */}
                            <img src="http://tkfile.yes24.com/upload2/PerfBlog/202211/20221108/20221108-43998.jpg"/>
                        </div>

                        <div style={{width: 320}} onClick={ ()=>{
                            localStorage.setItem('performanceId', 2);
                            navigate('/musical/detail/2');
                        } }>
                            {/* <img src={state.musical[2].imageadr}/> */}
                            <img src="http://tkfile.yes24.com/upload2/PerfBlog/202209/20220922/20220922-43616.jpg"/>
                        </div>

                        <div style={{width: 320}} onClick={ ()=>{
                            localStorage.setItem('performanceId', 3);
                            navigate('/musical/detail/3');
                        } }>
                            {/* <img src={state.musical[3].imageadr}/> */}
                            <img src="http://tkfile.yes24.com/upload2/PerfBlog/202212/20221205/20221205-43293.jpg"/>
                        </div>

                        <div style={{width: 320}} onClick={ ()=>{
                            localStorage.setItem('performanceId', 4);
                            navigate('/musical/detail/4');
                        } }>
                            {/* <img src={state.musical[4].imageadr}/> */}
                            <img src="http://tkfile.yes24.com/upload2/PerfBlog/202211/20221117/20221117-44155.jpg"/>
                        </div>

                        <div style={{width: 320}} onClick={ ()=>{
                            localStorage.setItem('performanceId', 5);
                            navigate('/musical/detail/5');
                        } }>
                            {/* <img src={state.musical[5].imageadr}/> */}
                            <img src="http://tkfile.yes24.com/upload2/PerfBlog/202211/20221128/20221128-43451.jpg"/>
                        </div>
                        
                    </Slider>
                </div>
            </div>
    );
}

// 연극 이미지슬라이드
const TheaterSlide = () => {

    let state = useSelector((state) => {
        return state;
    });

    let navigate = useNavigate();

    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "70px",
        slidesToShow: 2,
        speed: 900,
        variableWidth: true,
        dots: true,
        autoplay: true,
        autoplaySpeed: 1000
    };

    return (
            <div>
                <div className={'slideTitle'}><span className="slideTitleColor">ㅡ</span> THEATER <span className="slideTitleColor">ㅡ</span></div>
                <br/>
                <div className={'slideImg'}>
                    <Slider {...settings}>

                        <div style={{width: 320}} onClick={ ()=>{
                            localStorage.setItem('performanceId', 0);
                            navigate('/theater/detail/0');
                        } }>
                            {/* <img src={state.theater[0].imageadr}/> */}
                            <img src="http://tkfile.yes24.com/upload2/PerfBlog/202211/20221121/20221121-44220.jpg"/>
                        </div>

                        <div style={{width: 320}} onClick={ ()=>{
                            localStorage.setItem('performanceId', 1);
                            navigate('/theater/detail/1');
                        } }>
                            {/* <img src={state.theater[1].imageadr}/> */}
                            <img src="http://tkfile.yes24.com/upload2/PerfBlog/202202/20220203/20220203-40226.jpg"/>
                        </div>

                        <div style={{width: 320}} onClick={ ()=>{
                            localStorage.setItem('performanceId', 2);
                            navigate('/theater/detail/2');
                        } }>
                            {/* <img src={state.theater[2].imageadr}/> */}
                            <img src="http://tkfile.yes24.com/upload2/PerfBlog/202110/20211001/20211001-40181.jpg"/>
                        </div>

                        <div style={{width: 320}} onClick={ ()=>{
                            localStorage.setItem('performanceId', 3);
                            navigate('/theater/detail/3');
                        } }>
                            {/* <img src={state.theater[3].imageadr}/> */}
                            <img src="http://tkfile.yes24.com/upload2/PerfBlog/202212/20221205/20221205-43981.jpg"/>
                        </div>

                        <div style={{width: 320}} onClick={ ()=>{
                            localStorage.setItem('performanceId', 4);
                            navigate('/theater/detail/4');
                        } }>
                            {/* <img src={state.theater[4].imageadr}/> */}
                            <img src="http://tkfile.yes24.com/upload2/PerfBlog/202201/20220113/20220113-41225.jpg"/>
                        </div>

                        <div style={{width: 320}} onClick={ ()=>{
                            localStorage.setItem('performanceId', 5);
                            navigate('/theater/detail/5');
                        } }>
                            {/* <img src={state.theater[5].imageadr}/> */}
                            <img src="http://tkfile.yes24.com/upload2/PerfBlog/202212/20221206/20221206-43999.jpg"/>
                        </div>
                        
                    </Slider>
                </div>
            </div>
    );
}

// 클래식 이미지슬라이드
const ClassicSlide = () => {

    let state = useSelector((state) => {
        return state;
    });

    let navigate = useNavigate();

    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "70px",
        slidesToShow: 2,
        speed: 900,
        variableWidth: true,
        dots: true,
        autoplay: true,
        autoplaySpeed: 1000
    };

    return (
            <div>
                <div className={'slideTitle'}><span className="slideTitleColor">ㅡ</span> CLASSIC <span className="slideTitleColor">ㅡ</span></div>
                <br/>
                <div className={'slideImg'}>
                    <Slider {...settings}>

                        <div style={{width: 320}} onClick={ ()=>{
                            localStorage.setItem('performanceId', 0);
                            navigate('/classic/detail/0');
                        } }>
                            {/* <img src={state.classic[0].imageadr}/> */}
                            <img src="http://tkfile.yes24.com/upload2/PerfBlog/202211/20221121/20221121-44182.jpg"/>
                        </div>

                        <div style={{width: 320}} onClick={ ()=>{
                            localStorage.setItem('performanceId', 1);
                            navigate('/classic/detail/1');
                        } }>
                            {/* <img src={state.classic[1].imageadr}/> */}
                            <img src="http://tkfile.yes24.com/upload2/PerfBlog/202211/20221107/20221107-44033.jpg"/>
                        </div>

                        <div style={{width: 320}} onClick={ ()=>{
                            localStorage.setItem('performanceId', 2);
                            navigate('/classic/detail/2');
                        } }>
                            {/* <img src={state.classic[2].imageadr}/> */}
                            <img src="http://tkfile.yes24.com/upload2/PerfBlog/202211/20221108/20221108-44028.jpg"/>
                        </div>

                        <div style={{width: 320}} onClick={ ()=>{
                            localStorage.setItem('performanceId', 3);
                            navigate('/classic/detail/3');
                        } }>
                            {/* <img src={state.classic[3].imageadr}/> */}
                            <img src="http://tkfile.yes24.com/upload2/PerfBlog/202207/20220727/20220727-43026.jpg"/>
                        </div>

                        <div style={{width: 320}} onClick={ ()=>{
                            localStorage.setItem('performanceId', 4);
                            navigate('/classic/detail/4');
                        } }>
                            {/* <img src={state.classic[4].imageadr}/> */}
                            <img src="http://tkfile.yes24.com/upload2/PerfBlog/202211/20221107/20221107-44043.jpg"/>
                        </div>

                        <div style={{width: 320}} onClick={ ()=>{
                            localStorage.setItem('performanceId', 5);
                            navigate('/classic/detail/5');
                        } }>
                            {/* <img src={state.classic[5].imageadr}/> */}
                            <img src="http://tkfile.yes24.com/upload2/PerfBlog/202211/20221107/20221107-44031.jpg"/>
                        </div>
                        
                    </Slider>
                </div>
            </div>
    );
}

export {ConcertSlide, MusicalSlide, TheaterSlide, ClassicSlide};