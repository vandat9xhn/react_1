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
        <div>
            <div className="width-fit-content margin-auto">
                <CircleLoading is_fetching={is_fetching} />
            </div>

            <div>Buying...</div>
        </div>
    );
}

export default BuyFetching;
