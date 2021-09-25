import React from 'react';
import PropTypes from 'prop-types';
// 
import './PLDPromotionItem.scss';

//
PLDPromotionItem.propTypes = {};

//
function PLDPromotionItem({ ix, info }) {
    //
    return (
        <div className="PLDPromotionItem padding-10px">
            <div className="PLDPromotionItem_row display-flex">
                <div className="margin-right-10px padding-top-4px">
                    <div className="PLDPromotionItem_number display-flex-center brs-50 bg-blue text-white font-11px">
                        {ix + 1}
                    </div>
                </div>

                <div className="flex-grow-1">{info}</div>
            </div>
        </div>
    );
}

export default PLDPromotionItem;
