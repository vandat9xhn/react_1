import React, { useRef } from 'react';
import PropTypes from 'prop-types';
//
import IconThreeDot from '../../../_icons_svg/icon_three_dot/IconThreeDot';
//
import PortalAtBody from '../../portal/at_body/PortalAtBody';
//
import './ActionsCommon.scss';
//
import ActionsContain from '../contain/ActionsContain';
//
import './Actions.scss';
//

//
Actions.propTypes = {
    title_action: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    symbol_post: PropTypes.bool,
    children: PropTypes.element,

    callbackOpen: PropTypes.func,
};

Actions.defaultProps = {
    symbol_post: true,
    title_action: (
        <div className="Actions_symbol_contain display-flex-center brs-50 hv-opacity hv-bg-s-through font-700 user-select-none cursor-pointer">
            <IconThreeDot size_icon="1.25rem" color="var(--md-color-third)" />
        </div>
    ),
};

//
function Actions({
    title_action,
    is_show,
    children,
    
    scroll_elm,
    is_at_body = true,
    header_head,
    
    toggleShow,
    callbackOpen,
    callbackClose,
}) {
    //
    const ref_btn_elm = useRef(null);

    //
    function onCallbackClose() {
        is_show && toggleShow();
        callbackClose && callbackClose();
    }

    // ------

    const Contain = (
        <ActionsContain
            ref_btn_elm={ref_btn_elm}
            children={children}
            scroll_elm={scroll_elm}
            is_at_body={is_at_body}
            header_head={header_head}
            //
            callbackOpen={callbackOpen}
            callbackClose={onCallbackClose}
        />
    );

    //
    return (
        <div
            className={`Actions ${is_at_body ? 'pos-rel' : ''} ${
                is_show ? 'Actions-show' : 'Actions-hidden'
            }`}
        >
            <div
                ref={ref_btn_elm}
                className="Actions_symbol"
                onClick={toggleShow}
            >
                {title_action}
            </div>

            {is_show &&
                (is_at_body ? <PortalAtBody>{Contain}</PortalAtBody> : Contain)}
        </div>
    );
}

export default Actions;
