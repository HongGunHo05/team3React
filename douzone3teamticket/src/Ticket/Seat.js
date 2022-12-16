import React, { useState } from 'react';

import SeatAllocationComponent from "./SeatAllocationComponent";
import {useNavigate} from "react-router-dom";

import Seattop from "./Seattop";
import Seatbottom from "./Seatbottom";
import '../css/SeatTB.css'
import '../css/Seat.css'

export default function Seat() {

    let [show, setShow] = useState(false);
    let [useInfo, setUseInfo] = useState(false);
    let [faq, setFaq] = useState(false);

    let navigate = useNavigate();

    return (
        <div className="Seatmap">
            <div>
                <Seattop></Seattop>
            </div>

            <div>
                <SeatAllocationComponent />
            </div>

        </div>
    );
}