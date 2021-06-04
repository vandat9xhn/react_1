import React from 'react';
import PropTypes from 'prop-types';

//
NoItem.propTypes = {
    no_item: PropTypes.bool,
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};

//
NoItem.defaultProps = {
    no_item: true,
    title: 'Nothing to show'
};

//
function NoItem({ no_item, title }) {
    //
    return (
        <div>
            <div className={`${no_item ? '' : 'display-none'}`}>
                <div>{title}</div>
            </div>
        </div>
    );
}

export default NoItem;
