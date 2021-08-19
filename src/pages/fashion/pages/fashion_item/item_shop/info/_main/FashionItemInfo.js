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
function FashionItemInfo({
    id,
    vid_pic_arr,
    info_right,
    has_fetched,

    wait_add_cart,
    addToCart,
}) {

    //
    return (
        <div className="FashionItemInfo bg-primary">
            <div className="FashionItemInfo_row display-flex">
                <div className="FashionItemInfo_left flex-shrink-0 padding-16px">
                    <FashionItemInfoLeft
                        vid_pic_arr={vid_pic_arr}
                        has_fetched={has_fetched}
                    />
                </div>

                <div className="FashionItemInfo_right flex-grow-1 padding-16px">
                    <FashionItemInfoRight
                        id={id}
                        info_right={info_right}
                        wait_add_cart={wait_add_cart}
                        has_fetched={has_fetched}
                        addToCart={addToCart}
                    />
                </div>
            </div>
        </div>
    );
}

export default FashionItemInfo;
