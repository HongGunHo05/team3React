import { useSelector } from "react-redux";
import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom'

import '../css/Main.css'
import '../css/Category.css'
import styles from "../css/Category.module.css";

import {ConcertSlide} from "./CatrgoryImgSlide";
import {ConcertSort} from "./PerformanceSort";

function Concert() {
    const [visibleList, setVisibleList] = useState(true);
    const [visibleAlbum, setVisibleAlbum] = useState(false);

    return (
        <div className={styles.categoryCont}>
        
        <ConcertSlide/>
        
        <ConcertSort/>

        <div>
            <button className={styles.switchBtn}
                onClick={() => { setVisibleAlbum(!visibleAlbum); setVisibleList(!visibleList); }}>
                {visibleList
                    ? <div className="switchListImg"><img src="https://raw.githubusercontent.com/sunhyung2007/team3React/01b1f300b90409ee59de5605fd510fa4c282e03c/douzone3teamticket/src/image/Category/switchListImg.jpg"></img></div>
                    : <div className="switchListImg"><img src="https://raw.githubusercontent.com/sunhyung2007/team3React/01b1f300b90409ee59de5605fd510fa4c282e03c/douzone3teamticket/src/image/Category/switchAlbumImg.jpg"></img></div>
                }
            </button>

            {visibleList && <Concert_list />}
            {visibleAlbum && <Concert_album />}

        </div>
        </div>
    );
}

function Concert_list() {

    let state = useSelector((state) => state)
    let naviate = useNavigate()
    const [search, setSearch] = useState('')
    return (
        <div>
            <input className={styles.searchInput} type="text" placeholder="Search..." onChange={event => { setSearch(event.target.value) }} />
            <table className={styles.categoryTable}>
                <thead>
                    <tr className={styles.categoryTableTitle}>
                        <th scope="col"></th>
                        <th scope="col">공연명</th>
                        <th scope="col">출연진</th>
                        <th scope="col">공연일</th>
                        <th scope="col">상영시간</th>
                        <th scope="col">가격 (S석 기준)</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        state.concert.map((item, i) => [item].filter((val) => {
                            if (search == "") {
                                return val
                            }
                            else if
                                (item.title.toLowerCase().includes(search.toLowerCase())) {
                                return val
                            }
                        }).map((val, k) =>
                            <tr key={{ i }} className={styles.categoryContent}>
                                <td>
                                    <span onClick={ ()=>{localStorage.setItem('performanceId', state.concert[i].id); naviate('/concert/detail/' + state.concert[i].id);} }>
                                          <img className={styles.categoryImg} src={state.concert[i].imageadr}></img>
                                    </span>
                                </td>
                                <td>{state.concert[i].title}</td>
                                <td>{state.concert[i].cast}</td>
                                <td>{state.concert[i].showyear}-{state.concert[i].showmonth}-{state.concert[i].showday}</td>
                                <td>{state.concert[i].showtime}</td>
                                <td>{state.concert[i].priceS}원</td>
                            </tr>

                        )
                        )
                    }

                </tbody>
            </table>
            {/* <input type="text" placeholder="Search..." onChange={event => { setSearch(event.target.value) }} /> */}
        </div >
    );

}

function Concert_album() {

    let state = useSelector((state) => state)
    let naviate = useNavigate()
    const [search, setSearch] = useState('')
    return (
        <div>
            <input className={styles.searchInput} type="text" placeholder="Search..." onChange={event => { setSearch(event.target.value) }} />
            <div className="mu">
                {
                    state.concert.map((item, i) => [item].filter((val) => {

                        if (search == "") {
                            return val
                        }
                        else if
                            (item.title.toLowerCase().includes(search.toLowerCase())) {
                            return val
                        }
                    }).map((val, k) => {
                        return (
                            <div className="stuff" key={{ i }}>
                                <span className="stuff_img" onClick={() => { localStorage.setItem('performanceId', state.concert[i].id); naviate('/concert/detail/' + state.concert[i].id); }}>
                                    <img src={state.concert[i].imageadr}></img>
                                </span>
                                <div className="stuff_content">
                                    <span className="stuff_title">{state.concert[i].title}</span><br />
                                    <span>{state.concert[i].showyear}-{state.concert[i].showmonth}-{state.concert[i].showday} </span><br />
                                    <span>{state.concert[i].showtime}</span><br />
                                    <span>{state.concert[i].priceS}원</span><br />
                                </div>
                            </div>

                        )
                    }))
                }

            </div>
        </div>

    );
}

export default Concert;