import React from 'react';
import PropTypes from 'prop-types';
//
import CircleLoading from '../../../../../component/waiting/circle_loading/CircleLoading';

//
BuyFetching.propTypes = {
    is_fetching: PropTypes.bool,
};

//
function BuyFetching({ is_fetching }) {
    //
    return (
        <div className="BuyFetching">
            <div className="width-fit-content margin-auto">
                <CircleLoading is_fetching={is_fetching} />
            </div>

            <div className="padding-top-10px font-16px font-400 color-fashion">
                Ordering...
            </div>
        </div>
    );
}

export default BuyFetching;
