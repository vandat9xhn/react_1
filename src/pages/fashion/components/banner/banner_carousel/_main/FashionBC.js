import React from 'react';
import PropTypes from 'prop-types';
//
import Carousel from '../../../../../../component/carousel/_main/Carousel';
//
import './FashionBC.scss';
//
import FashionBCR from '../right/FashionBCR';

//
FashionBC.propTypes = {};

//
function FashionBC({ images }) {
    //
    return (
        <div className="FashionBC">
            <div className="FashionBC_row display-flex align-items-center flex-wrap">
                <div className="FashionBC_carousel">
                    <Carousel vid_pics={images} />
                </div>

                <div>
                    <FashionBCR />
                </div>
            </div>
        </div>
    );
}

export default FashionBC;
