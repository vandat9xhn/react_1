import React from 'react';
import PropTypes from 'prop-types';

//
PLDGroupItem.propTypes = {};

//
function PLDGroupItem({ group_ix, item_ix, title, is_active, handleClick }) {
    //
    function onClick() {
        !is_active &&
            handleClick({
                group_ix: group_ix,
                item_ix: item_ix,
            });
    }

    //
    return (
        <button
            className={`PLDGroupItem padding-x-20px padding-y-10px brs-3px btn-active border-blur cursor-pointer ${
                is_active ? 'text-blue border-cl-current' : ''
            }`}
            type="button"
            onClick={onClick}
        >
            {title}
        </button>
    );
}

export default PLDGroupItem;
