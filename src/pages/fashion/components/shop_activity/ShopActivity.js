import React from 'react';
import PropTypes from 'prop-types';
//
import './ShopActivity.scss';

//
ShopActivity.propTypes = {};

//
function ShopActivity({ owner_info }) {
    //
    return (
        <div className="ShopActivity">
            <div className="ShopActivity_row display-flex flex-wrap">
                {owner_info.map((info, info_ix) => (
                    <div key={`${info_ix}`} className="ShopActivity_col padding-8px">
                        <span className="ShopActivity_col-title">
                            {info.title}:
                        </span>

                        <span className="text-red">{info.value}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ShopActivity;
