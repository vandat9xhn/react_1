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
function FashionBC({ images, has_fetched }) {
    //
    return (
        <div className="FashionBC user-select-none">
            <div className="FashionBC_row flex-between-center flex-wrap">
                <div className="FashionBC_carousel">
                    <Carousel
                        vid_pics={images}
                        has_fetched={has_fetched}
                        // disabled_btn_when_trans={false}
                    />
                </div>

                <div className="FashionBC_right">
                    <FashionBCR />
                </div>
            </div>
        </div>
    );
}

export default FashionBC;
