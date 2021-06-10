import React from 'react';
import PropTypes from 'prop-types';
//
import image_loading from '../../../../../../../image/image_loading.svg';
import './FashionBCR.scss';

//
FashionBCR.propTypes = {};

//
function FashionBCR(props) {
    return (
        <div className="FashionBCR padding-8px">
            <div>
                <img src={image_loading} alt="" width="300" height="200" />
            </div>
        </div>
    );
}

export default FashionBCR;
