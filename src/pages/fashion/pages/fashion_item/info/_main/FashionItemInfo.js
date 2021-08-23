import React from 'react';
import PropTypes from 'prop-types';
//
import FashionItemInfoLeft from '../left/_main/FashionItemInfoLeft';
import FashionItemInfoRight from '../right/_main/FashionItemInfoRight';
//
import './FashionItemInfo.scss';

//
FashionItemInfo.propTypes = {};

//
function FashionItemInfo({}) {
    //
    return (
        <div className="FashionItemInfo bg-primary">
            <div className="FashionItemInfo_row display-flex">
                <div className="FashionItemInfo_left flex-shrink-0 padding-16px">
                    <FashionItemInfoLeft />
                </div>

                <div className="FashionItemInfo_right flex-grow-1 padding-16px">
                    <FashionItemInfoRight />
                </div>
            </div>
        </div>
    );
}

export default FashionItemInfo;
