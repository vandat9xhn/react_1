import React from 'react';
import PropTypes from 'prop-types';

//
FsPPOrderProcessHead.propTypes = {};

//
function FsPPOrderProcessHead({ trans_name, trans_id }) {
    //
    return (
        <div className="FsPPOrderProcessHead padding-bottom-12px">
            <div className="flex-between-center">
                <div className="text-cap font-20px text-555">
                    Địa chỉ nhận hàng
                </div>

                <div className="font-12px text-align-end text-third">
                    <div className="text-cap">{trans_name}</div>

                    <div className="text-upper">{trans_id}</div>
                </div>
            </div>
        </div>
    );
}

export default FsPPOrderProcessHead;
