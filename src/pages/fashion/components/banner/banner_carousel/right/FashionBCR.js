import React from 'react';
import PropTypes from 'prop-types';
//
import banner_laptop from '../../../../../../../image/banner_laptop.png';
import banner_laptop_phone from '../../../../../../../image/banner_laptop_phone.jpg';
import './FashionBCR.scss';

//
FashionBCR.propTypes = {};

//
function FashionBCR(props) {
    //
    return (
        <div className="FashionBCR display-flex flex-col space-between">
            <div className="FashionBCR_part">
                <img className="wh-100" src={banner_laptop} alt="" />
            </div>

            <div className="FashionBCR_part">
                <img className="wh-100" src={banner_laptop_phone} alt="" />
            </div>
        </div>
    );
}

export default FashionBCR;
