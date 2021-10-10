import React from 'react';
import PropTypes from 'prop-types';
import IconSent from '../../../../../../_icons_svg/icons_status_message/icon_sent/IconSent';

//
CUPostMoreInputItem.propTypes = {};

//
function CUPostMoreInputItem({ title, icon, checked, handleMoreInput }) {
    //
    return (
        <div
            className={`CUPostMoreInputItem pos-rel padding-10px brs-6px cursor-pointer ${
                checked ? 'CUPostMoreInputItem-active bg-fb-active' : 'hv-bg-hv'
            }`}
            onClick={handleMoreInput}
        >
            <div className="display-flex align-items-center">
                <div>{icon}</div>

                <div className="margin-left-10px">{title}</div>
            </div>

            <div
                className={`pos-abs right-0 y-center padding-right-5px ${
                    checked ? '' : 'display-none'
                }`}
            >
                <IconSent stroke="var(--blue)" size_icon="24px" />
            </div>
        </div>
    );
}

export default CUPostMoreInputItem;
