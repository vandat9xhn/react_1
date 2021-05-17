import React from 'react';
import PropTypes from 'prop-types';
// 
import Carousel from '../../../../../../component/carousel/_main/Carousel';
// 
import FashionBCR from '../right/FashionBCR';
// 
import './FashionBC.scss';

//
FashionBC.propTypes = {
    
};

//
function FashionBC(props) {
    const {images} = props;

    return (
        <div className="FashionBC">
            <div className="FashionBC_contain">
                <div className="FashionBC_row">
                    <div className="FashionBC_carousel">
                        <Carousel vid_pics={images}/>
                    </div>

                    <div>
                        <FashionBCR />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FashionBC;