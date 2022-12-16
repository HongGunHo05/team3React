import { useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'

import '../css/SearchBar.css'

function SearchBar() {
    let state = useSelector((state) => state)
    let navigate = useNavigate()
    const [search, setSearch] = useState('')

    let data = [];
    let temp = [];

    state.concert.map((data1) => {
        temp.push(data1)
    })

    data.push(temp)
    temp = [];

    state.musical.map((data2) => {
        temp.push(data2)
    })

    data.push(temp);
    temp = [];


    state.classic.map((data3) => {
        temp.push(data3)
    })

    data.push(temp)
    temp = [];

    state.theater.map((data4) => {
        temp.push(data4)
    })

    data.push(temp)
    temp = [];

    const onReset = () => {
        setSearch("");
    };

    return (

        <div div >
            <div className="success" onClick={() => { onReset() }}>

                <input className="searchInput" type="text" value={search} placeholder="Search..." onChange={event => {
                    setSearch(event.target.value)
                    // localStorage.setItem('searchtitle', JSON.parse(search))
                }} />
                {

                    data.map((item, i) =>

                        item.map((item2, j) =>
                            [item2].filter((val) => {
                                if (search == "") {
                                    return
                                }
                                else if
                                    (item2.title.toLowerCase().includes(search.toLowerCase())) {
                                    return val
                                }
                            }).map((val, k) => {

                                if (i == 0) {
                                    return (

                                        <div className="searchResult" onClick={() => {
                                            onReset(); localStorage.setItem('performanceId', j); navigate('concert/detail/' + j);
                                        }}>

                                            <div className="searchBox">
                                                <div className="search1"><img src={data[i][j].imageadr}></img></div>
                                                <div className="search2">{data[i][j].title}</div>
                                            </div>
                                        </div>
                                    )
                                }
                                else if (i == 1) {
                                    return (

                                        <div className="searchResult" onClick={() => {
                                            onReset(); localStorage.setItem('performanceId', j); navigate('musical/detail/' + j);
                                        }}>

                                            <div className="searchBox">
                                                <div className="search1"><img src={data[i][j].imageadr}></img></div>
                                                <div className="search2">{data[i][j].title}</div>
                                            </div>
                                        </div>
                                    )
                                }
                                else if (i == 2) {
                                    return (

                                        <div className="searchResult" onClick={() => {
                                            onReset(); localStorage.setItem('performanceId', j); navigate('classic/detail/' + j);
                                        }}>

                                            <div className="searchBox">
                                                <div className="search1"><img src={data[i][j].imageadr}></img></div>
                                                <div className="search2">{data[i][j].title}</div>
                                            </div>
                                        </div>
                                    )
                                }
                                else if (i == 3) {
                                    return (

                                        <div className="searchResult" onClick={() => {
                                            onReset(); localStorage.setItem('performanceId', j); navigate('theater/detail/' + j);
                                        }
                                        }>
                                            <div className="searchBox">
                                                <div className="search1"><img src={data[i][j].imageadr}></img></div>
                                                <div className="search2">{data[i][j].title}</div>
                                            </div>
                                        </div>
                                    )
                                }

                            }
                            )
                        ) //item2 map end
                    )
                    // ) //map end
                }

            </div>


        </div>
    )
}

export default SearchBar;