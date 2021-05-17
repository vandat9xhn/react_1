import React from 'react';
import PropTypes from 'prop-types';
// 
import UnitTime from '../../../../../../../_some_function/UnitTime';
// 
import './ShopPersonalRight.scss';

// 
ShopPersonalRight.propTypes = {};

// 
function ShopPersonalRight(props) {
    const {count_product, count_sold, created_time, count_follow, count_rate, avg_rate} = props;
    //
    const time_joined = UnitTime(
        new Date().getTime() - new Date(created_time).getTime()
    );

    //
    return (
        <div className="ShopPersonalRight brs-5px">
            <div className="ShopPersonalRight_row display-flex">
                <div className="ShopPersonalRight_col">
                    <div className="ShopPersonalRight_block">
                        <span className="ShopPersonalRight__elm label-field">Products:</span>
                        <span className="text-red">{count_product}</span>
                    </div>

                    <div className="ShopPersonalRight_block">
                        <span className="ShopPersonalRight__elm label-field">Sold:</span>
                        <span className="text-red">{count_sold}</span>
                    </div>

                    <div className="ShopPersonalRight_block">
                        <span className="ShopPersonalRight__elm label-field">Time:</span>
                        <span className="text-red">{time_joined}</span>
                    </div>
                </div>

                <div className="ShopPersonalRight_col">
                    <div className="ShopPersonalRight_block">
                        <span className="ShopPersonalRight__elm label-field">Follow:</span>
                        <span className="text-red">{count_follow}</span>
                    </div>

                    <div className="ShopPersonalRight_block">
                        <span className="ShopPersonalRight__elm label-field">Rate: </span>
                        <span className="text-red">
                            {avg_rate} ({count_rate} rates)
                        </span>
                    </div>

                    <div className="ShopPersonalRight_block">
                        <span className="ShopPersonalRight__elm label-field">Chat:</span>
                        <span className="text-red">100%</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ShopPersonalRight;
