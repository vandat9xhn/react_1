import React from 'react';
import PropTypes from 'prop-types';

//
NoItem.propTypes = {
    no_item: PropTypes.bool,
};

//
NoItem.defaultProps = {
    no_item: true,
};

//
function NoItem({ no_item }) {
    // 
    return (
        <div>
            <div className={`${no_item ? '' : 'display-none'}`}>
                <div>No Friend</div>
            </div>
        </div>
    );
}

export default NoItem;
