import React from 'react';
import PropTypes from 'prop-types';

//
CmtActionItem.propTypes = {};

//
function CmtActionItem({ name, title, handleClick }) {
    //
    function onClick() {
        handleClick(name);
    }

    //
    return (
        <div
            className="CmtActionItem padding-5px brs-6px cursor-pointer hv-bg-fb"
            onClick={onClick}
        >
            {title}
        </div>
    );
}

export default CmtActionItem;
