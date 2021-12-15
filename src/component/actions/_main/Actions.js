import React from 'react';
import PropTypes from 'prop-types';
//
import { IS_MOBILE } from '../../../_constant/Constant';
//
import './ActionsCommon.scss';
//
import ActionsPc from '../pc/_main/ActionsPc';
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
    class_action_contain,
    class_action_contain_mb,

    title_action,
    use_title,
    use_own_title,
    is_show,
    children,

    scroll_elm,
    pos_orientation,
    is_at_body = true,
    header_head,

    getActionsScrollElms,

    x_always,
    transform_x_more,
    y_always,
    transform_y_more,

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
                class_action_contain_mb={class_action_contain_mb}
                title_action={title_action}
                use_own_title={use_own_title}
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
            use_own_title={use_own_title}
            is_show={is_show}
            class_action_contain={class_action_contain}
            children={children}
            //
            scroll_elm={scroll_elm}
            pos_orientation={pos_orientation}
            is_at_body={is_at_body}
            header_head={header_head}
            //
            getActionsScrollElms={getActionsScrollElms}
            //
            x_always={x_always}
            transform_x_more={transform_x_more}
            y_always={y_always}
            transform_y_more={transform_y_more}
            //
            toggleShow={toggleShow}
            callbackOpen={callbackOpen}
            callbackClose={callbackClose}
        />
    );
}

export default Actions;
