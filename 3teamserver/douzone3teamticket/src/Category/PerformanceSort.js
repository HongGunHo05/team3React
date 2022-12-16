import { useSelector, useDispatch } from "react-redux";
import React, { useEffect } from "react";
import { sortConcert } from "../store";
import { sortMusical } from "../store";
import { sortTheater } from "../store";
import { sortClassic } from "../store";
import styles from "../css/Category.module.css";

//Concert 정렬
const ConcertSort = () => {
    let state = useSelector((state) => state)
    let dispatch = useDispatch();

    //첫 렌더링 후 한번 실행, 그 후에는 []<-안의 값이 없데이트 될 때만 실행
    useEffect( () => { 
    },[state])

    return (
        <div className={styles.sort_performance}> 
                <p onClick={ () => 
                    {dispatch(sortConcert("sortHighPrice"));}
                }>높은 금액순 |</p> &nbsp;&nbsp;&nbsp;

                <p onClick={ () => 
                    {dispatch(sortConcert("sortLowPrice"))}
                }>낮은 금액순 |</p> &nbsp;&nbsp;&nbsp;

                <p onClick={ () => 
                    {dispatch(sortConcert("sortTitle"))}
                }>공연 이름순</p>
        </div>
    )
}

//Musical 정렬
const MusicalSort = () => {
    let state = useSelector((state) => state)
    let dispatch = useDispatch(); 

    //첫 렌더링 후 한번 실행, 그 후에는 []<-안의 값이 없데이트 될 때만 실행
    useEffect( () => { 
    },[state])

    return (
        <div className={styles.sort_performance}> 
                <p onClick={ () => 
                    {dispatch(sortMusical("sortHighPrice"));}
                }>높은 금액순 |</p> &nbsp;&nbsp;&nbsp;

                <p onClick={ () => 
                    {dispatch(sortMusical("sortLowPrice"))}
                }>낮은 금액순 |</p> &nbsp;&nbsp;&nbsp;

                <p onClick={ () => 
                    {dispatch(sortMusical("sortTitle"))}
                }>공연 이름순</p>
        </div>
    )
}

//Theater 정렬
const TheaterSort = () => {
    let state = useSelector((state) => state)
    let dispatch = useDispatch(); 

    //첫 렌더링 후 한번 실행, 그 후에는 []<-안의 값이 없데이트 될 때만 실행
    useEffect( () => { 
    },[state])

    return (
        <div className={styles.sort_performance}> 
                <p onClick={ () => 
                    {dispatch(sortTheater("sortHighPrice"));}
                }>높은 금액순 |</p> &nbsp;&nbsp;&nbsp;

                <p onClick={ () => 
                    {dispatch(sortTheater("sortLowPrice"))}
                }>낮은 금액순 |</p> &nbsp;&nbsp;&nbsp;

                <p onClick={ () => 
                    {dispatch(sortTheater("sortTitle"))}
                }>공연 이름순</p>
        </div>
    )
}

//Classic 정렬
const ClassicSort = () => {
    let state = useSelector((state) => state)
    let dispatch = useDispatch(); 

    //첫 렌더링 후 한번 실행, 그 후에는 []<-안의 값이 없데이트 될 때만 실행
    useEffect( () => { 
    },[state])

    return (
        <div className={styles.sort_performance}> 
                <p onClick={ () => 
                    {dispatch(sortClassic("sortHighPrice"));
                    }
                }>높은 금액순 |</p> &nbsp;&nbsp;&nbsp;

                <p onClick={ () => 
                    {dispatch(sortClassic("sortLowPrice"))}
                }>낮은 금액순 |</p> &nbsp;&nbsp;&nbsp;

                <p onClick={ () => 
                    {dispatch(sortClassic("sortTitle"))}
                }>공연 이름순</p>
        </div>
    )
}

export {ConcertSort, MusicalSort, TheaterSort, ClassicSort};