import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import * as ColorThief from 'colorthief';
//
import img from '../../../../image/banner_laptop_phone.jpg';

//
LearnColorThief.propTypes = {};

//
function LearnColorThief(props) {
    //
    const ref_img = useRef(null);

    //
    useEffect(() => {
        getDominantColor()
    }, []);

    // 
    async function getDominantColor() {
        const result = await ColorThief.getColor(ref_img.current, 25);

        console.log(result);
    }

    //
    return (
        <div>
            <img ref={ref_img} src={img} alt="" width="200" height="200" />
        </div>
    );
}

export default LearnColorThief;
