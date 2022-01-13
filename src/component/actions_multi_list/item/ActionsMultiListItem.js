import React from 'react';
import PropTypes from 'prop-types';
//
import './ActionsMultiListItem.scss';

//
ActionsMultiListItem.propTypes = {};

//
function ActionsMultiListItem({
    name,
    Icon,
    title,
    info,

    stop_propagation = true,

    handleAction,
    handleClose,
}) {
    //
    function onClick(e) {
        stop_propagation && e.stopPropagation();

        handleClose();
        handleAction(name);
    }

    //
    return (
        <div
            className="ActionsMultiListItem padding-x-10px padding-y-8px brs-6px cursor-pointer hv-bg-blur"
            onClick={onClick}
        >
            <div className="display-flex align-items-center">
                {Icon}

                <div>
                    <div className="font-500">{title}</div>

                    <div
                        className={`text-third font-13px line-height-initial ${
                            info ? '' : 'display-none'
                        }`}
                    >
                        {info}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ActionsMultiListItem;
