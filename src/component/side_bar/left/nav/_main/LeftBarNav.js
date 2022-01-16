import React from 'react';
import PropTypes from 'prop-types';
//
import LeftBarNavItem from '../item/LeftBarNavItem';

//
LeftBarNav.propTypes = {
    nav_arr: PropTypes.arrayOf(
        PropTypes.shape({
            ...LeftBarNavItem.propTypes,
        })
    ),
};

//
function LeftBarNav({ nav_arr }) {
    //
    return (
        <div className="LeftBarNav">
            {nav_arr.map((item, ix) => (
                <div key={ix}>
                    <LeftBarNavItem item={item} />
                </div>
            ))}
        </div>
    );
}

export default LeftBarNav;
