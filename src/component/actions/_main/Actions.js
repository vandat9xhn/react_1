import React, { useRef } from 'react';
import PropTypes from 'prop-types';
//
import { IS_MOBILE } from '../../../_constant/Constant';
//
import IconThreeDot from '../../../_icons_svg/icon_three_dot/IconThreeDot';
//
import './ActionsCommon.scss';
//
import ActionsPc from '../pc/ActionsPc';
import ActionsMb from '../mobile/_main/ActionsMb';
//
import './Actions.scss';

//
Actions.propTypes = {
    title_action: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    children: PropTypes.element,

    callbackOpen: PropTypes.func,
};

Actions.defaultProps = {};

//
function Actions({
    class_actions,
    title_action,
    use_title,
    is_show,
    children,

    scroll_elm,
    is_at_body = true,
    header_head,

    toggleShow,
    handleClose,
    callbackOpen,
    callbackClose,
}) {
    //
    if (IS_MOBILE) {
        return (
            <ActionsMb
                class_actions={class_actions}
                title_action={title_action}
                use_title={use_title}
                is_show={is_show}
                children={children}
                //
                handleClose={handleClose}
                callbackOpen={callbackOpen}
                toggleShow={toggleShow}
            />
        );
    }

    //
    return (
        <ActionsPc
            title_action={title_action}
            is_show={is_show}
            children={children}
            scroll_elm={scroll_elm}
            is_at_body={is_at_body}
            header_head={header_head}
            toggleShow={toggleShow}
            callbackOpen={callbackOpen}
            callbackClose={callbackClose}
        />
    );
}

export default Actions;
