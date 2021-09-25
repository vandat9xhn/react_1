import React from 'react';
import PropTypes from 'prop-types';

import './PhoneLaptopBuying.scss';
//
PhoneLaptopBuying.propTypes = {};

//
function PhoneLaptopBuying({ openTypeBuy }) {
    //
    return (
        <div className="PhoneLaptopBuying">
            <div className="PhoneLaptopBuying_row-btn">
                <div
                    className="PhoneLaptopBuying_btn brs-5px"
                    onClick={openTypeBuy}
                >
                    Buy now
                </div>
                <div className="font-italic">
                    Delivery or receive at supermarket
                </div>
            </div>
        </div>
    );
}

export default PhoneLaptopBuying;
