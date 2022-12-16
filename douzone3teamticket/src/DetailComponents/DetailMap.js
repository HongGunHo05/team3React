import React, { useEffect } from 'react'
import '../css/Detailbody.css'
import { useSelector } from 'react-redux';
const Location=()=>{
  let state = useSelector((state) => state)
  let find = state.classicinfo[state.performanceId]
    const {kakao} = window;
  useEffect(()=>{
    var container = document.getElementById('map');
    var options = {
      center: new kakao.maps.LatLng(37.365264512305174, 127.10676860117488),
      level: 3
    };

    var map = new kakao.maps.Map(container, options);
    var markerPosition  = new kakao.maps.LatLng(37.365264512305174, 127.10676860117488); 
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

export default Location;