import React from 'react';
import PropTypes from 'prop-types';
//
import IconsNature from '../../../_icons_svg/icons_nature/IconsNature';
//
import NatureDrop from '../_nature/NatureDrop';

//
const num_turn = 4;
const num_arr = Array.from({ length: num_turn }, (_, k) => k + 1);

const snow_num_left = 5;
const snow_num_right = 2;
const snow_arr = [
    ...Array(snow_num_left).fill(''),
    <IconsNature />,
    ...Array(snow_num_right).fill(''),
];

//
SnowDrop.propTypes = {};

//
function SnowDrop() {
    //
    function callbackNatureDrop(elm, i) {
        if (i == snow_num_left) {
            elm.style.width = Math.random() * 0.5 + 1 + 'rem';
            elm.style.height = Math.random() * 0.5 + 1 + 'rem';
        } else {
            elm.style.padding = Math.random() * 8 + 1 + 'px';
            elm.style.backgroundColor = '#f0e9e9';
            elm.style.boxShadow = '0 0 0.6rem 0.05rem #f0ebeb';
        }
    }

    //
    return (
        <NatureDrop
            nature_arr={snow_arr}
            num_arr={num_arr}
            callbackNatureDrop={callbackNatureDrop}
        />
    );
}

export default SnowDrop;
