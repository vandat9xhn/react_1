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
            <div className="FashionBC_row flex-between-center">
                <div className="FashionBC_carousel">
                    <div className="FashionBC_carousel_contain pos-rel">
                        <div className="pos-abs-100 overflow-hidden">
                            <Carousel
                                vid_pics={images}
                                has_fetched={has_fetched}
                                // disabled_btn_when_trans={false}
                            />
                        </div>
                    </div>
                </div>

                <div className="FashionBC_right">
                    <div className="FashionBC_right_contain pos-rel">
                        <div className="pos-abs-100 overflow-hidden">
                            <FashionBCR />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FashionBC;
