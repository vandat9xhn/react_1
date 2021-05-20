import React from 'react';
import PropTypes from 'prop-types';
// 
import CircleLoading from '../../../../../component/waiting/circle_loading/CircleLoading';

// 
BuyFetching.propTypes = {
    open_fetching: PropTypes.bool,
};

// 
function BuyFetching(props) {
    const {open_fetching} = props;

    // 
    return (
        <div>
            <div className="width-fit-content margin-auto">
                <CircleLoading open_fetching={open_fetching} />
            </div>

            <div>Buying...</div>
        </div>
    );
}

export default BuyFetching;
