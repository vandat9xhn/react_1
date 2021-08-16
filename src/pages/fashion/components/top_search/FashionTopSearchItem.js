import React from 'react';
import PropTypes from 'prop-types';
//
import TopSymbol from '../../../../component/symbol/top/TopSymbol';

//
FashionTopSearchItem.propTypes = {};

//
function FashionTopSearchItem({ name, img, sold_month }) {
    //
    return (
        <div className="FashionTopSearchItem pos-rel wh-100">
            <div className="FashionTopSearchItem_head pos-rel">
                <img src={img} alt="" />

                <div className="pos-abs bottom-0 left-0 w-100per">
                    <div className="FashionTopSearchItem_sold_contain text-align-center">
                        <span className="text-white label-field">
                            Bán {sold_month}+ / tháng
                        </span>
                    </div>
                </div>
            </div>

            <div>
                <div>
                    <span className="font-18px label-field">{name}</span>
                </div>
            </div>

            <div className="pos-abs left-0 top-0">
                <TopSymbol />
            </div>
        </div>
    );
}

export default FashionTopSearchItem;
