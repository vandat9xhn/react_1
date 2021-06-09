import React from 'react';
import PropTypes from 'prop-types';
//
import IconsFlower from '../../../_icons_svg/icons_flower/IconsFlower';
//
import NatureDrop from '../_nature/NatureDrop';

// 
const num_turn = 4;
const num_arr = Array.from({ length: num_turn }, (_, k) => k + 1);

const flower_arr = Array(8).fill(<IconsFlower />);

//
FlowerDrop.propTypes = {};

//
function FlowerDrop() {
    //
    function callbackNatureDrop(elm, i) {
        elm.style.width = Math.random() * 0.5 + 1 + 'rem';
        elm.style.height = Math.random() * 0.5 + 1 + 'rem';
    }

    //
    return (
        <NatureDrop
            nature_arr={flower_arr}
            num_arr={num_arr}
            callbackNatureDrop={callbackNatureDrop}
        />
    );
}

export default FlowerDrop;
