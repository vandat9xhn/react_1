import React from 'react';
import PropTypes from 'prop-types';
//
import fashion_month_top from '../../../../../../../image/fashion_month_top.jpg';
import fashion_month_body from '../../../../../../../image/fashion_month_body.jpg';
import fashion_month_foot from '../../../../../../../image/fashion_month_foot.jpg';

//
FashionMonth.propTypes = {};

//
function FashionMonth(props) {
    //
    return (
        <div>
            <div>
                <img className="w-100per" src={fashion_month_top} alt="" />
            </div>

            <div
                className="w-100per"
                style={{
                    backgroundImage: `url(${fashion_month_body})`,
                    backgroundSize: '100%',
                    height: '15rem',
                }}
            >
                <div className="display-flex">
                    <div></div>

                    <div></div>
                </div>
            </div>

            {/* <div> */}
                <img className="w-100per" src={fashion_month_foot} alt="" />
            {/* </div> */}
        </div>
    );
}

export default FashionMonth;
