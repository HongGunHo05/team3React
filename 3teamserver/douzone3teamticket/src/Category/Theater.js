import { useSelector } from "react-redux";
import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom'

import '../css/Category.css'
import styles from "../css/Category.module.css";

import {TheaterSlide} from "./CatrgoryImgSlide";
import {TheaterSort} from "./PerformanceSort";

function Theater() {
    const [visibleList, setVisibleList] = useState(true);
    const [visibleAlbum, setVisibleAlbum] = useState(false);

    return (
        <div className={styles.categoryCont}>

        <TheaterSlide/>

        <TheaterSort/>
        
        <div>
            <button className={styles.switchBtn}
                onClick={() => { setVisibleAlbum(!visibleAlbum); setVisibleList(!visibleList); }}>
                {visibleList
                    ? <div className="switchListImg"><img src="https://raw.githubusercontent.com/sunhyung2007/team3React/01b1f300b90409ee59de5605fd510fa4c282e03c/douzone3teamticket/src/image/Category/switchListImg.jpg"></img></div>
                    : <div className="switchListImg"><img src="https://raw.githubusercontent.com/sunhyung2007/team3React/01b1f300b90409ee59de5605fd510fa4c282e03c/douzone3teamticket/src/image/Category/switchAlbumImg.jpg"></img></div>
                }
            </button>

            {visibleList && <Theater_list />}
            {visibleAlbum && <Theater_album />}

        </div >
        </div>
    );
}

function Theater_list() {
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
                        state.theater.map((item, i) => [item].filter((val) => {

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
                                    <span onClick={() => { localStorage.setItem('performanceId', state.theater[i].id); naviate('/theater/detail/' + state.theater[i].id); }}>
                                        <img className={styles.categoryImg} src={state.theater[i].imageadr}></img>
                                    </span>
                                </td>
                                <td >{state.theater[i].title}</td>
                                <td>{state.theater[i].cast}</td>
                                <td>{state.theater[i].showyear}-{state.theater[i].showmonth}-{state.theater[i].showday}</td>
                                <td>{state.theater[i].showtime}</td>
                                <td>{state.theater[i].priceS}원</td>
                            </tr>

                        )
                        )
                    }

                </tbody>
            </table>
        </div>
    );

}

function Theater_album() {

    let state = useSelector((state) => state)
    let naviate = useNavigate()
    const [search, setSearch] = useState('')
    return (
        < div >
            <input className={styles.searchInput} type="text" placeholder="Search..." onChange={event => { setSearch(event.target.value) }} />
            <div className="mu">
                {
                    state.theater.map((item, i) => [item].filter((val) => {

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
                                <span className="stuff_img" onClick={() => { localStorage.setItem('performanceId', state.theater[i].id); naviate('/theater/detail/' + state.theater[i].id); }}>
                                    <img src={state.theater[i].imageadr}></img>
                                </span>
                                <div className="stuff_content">
                                    <span className="stuff_title">{state.theater[i].title}</span><br />
                                    <span>{state.theater[i].showyear}-{state.theater[i].showmonth}-{state.theater[i].showday} </span><br />
                                    <span>{state.theater[i].showtime}</span><br />
                                    <span>{state.theater[i].priceS}원</span><br />
                                </div>
                            </div>

                        )
                    }))
                }

            </div>
        </div>

    );
}

export default Theater;