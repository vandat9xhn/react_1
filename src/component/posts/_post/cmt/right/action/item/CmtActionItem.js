import React from 'react';
import PropTypes from 'prop-types';
// 
import './CmtActionItem.scss';

//
CmtActionItem.propTypes = {};

//
function CmtActionItem({ name, title, handleClose, handleClick }) {
    //
    function onClick() {
        handleClick(name);
        handleClose()
    }

    //
    return (
        <div
            className="CmtActionItem padding-8px brs-6px cursor-pointer hv-bg-fb"
            onClick={onClick}
        >
            <div className="width-max-content">{title}</div>
        </div>
    );
}

export default CmtActionItem;
