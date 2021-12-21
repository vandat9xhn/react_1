import React, { useRef } from 'react';
import PropTypes from 'prop-types';
//
import { usePosFollowBodyOrElm } from '../../../../../_hooks/usePosFollowBodyOrElm';
//
import CloseDiv from '../../../../some_div/close_div/CloseDiv';
//
import HeaderMessContain from '../contain/_main/HeaderMessContain';
import HeaderMessBtnToggle from '../btn_toggle/HeaderMessBtnToggle';
//
import './HeaderMessage.scss';

//
HeaderMessage.propTypes = {};

//
function HeaderMessage() {
    //
    const ref_child_elm = useRef(null);
    const ref_btn_elm = useRef(null);
    const ref_scroll_elm = useRef(null);

    //
    const {
        ref_is_open,
        ref_starting,
        ref_pos,

        handleOpen,
        handleClose,
    } = usePosFollowBodyOrElm({
        // getScrollElms: getScrollElms,
        ref_base_elm: ref_btn_elm,
        getChildWidth: getChildWidth,

        is_at_body: false,
        use_scroll: false,
        use_resize: true,
    });

    const { left_or_right, position_x, transform_x } = ref_pos.current;

    // ---------

    //
    function getChildWidth() {
        return ref_child_elm.current.getBoundingClientRect().width;
    }

    //
    function closeZoom() {
        ref_is_open.current && handleClose({});
    }

    //
    function toggleOpenZoom() {
        if (ref_is_open.current) {
            closeZoom();
        } else {
            handleOpen({});
        }
    }

    // ------

    //
    function hasReceiveListZooms() {}

    //
    return (
        <div
            ref={ref_btn_elm}
            className={`HeaderMessage h-100per ${
                ref_is_open.current ? 'nav-active' : ''
            }`}
            onClick={hasReceiveListZooms}
        >
            <HeaderMessBtnToggle toggleOpenZoom={toggleOpenZoom} />

            <CloseDiv refs_target={[ref_btn_elm]} makeDivHidden={closeZoom}>
                <div
                    ref={ref_child_elm}
                    className="HeaderMessage_list header_hidden"
                    style={{
                        [left_or_right]: position_x,
                        transform: `translateX(${transform_x}) translateX(-10px)`,
                    }}
                >
                    <div
                        className={`${
                            ref_is_open.current ? '' : 'display-none'
                        } ${ref_starting.current ? 'opacity-0' : ''}`}
                    >
                        <div
                            ref={ref_scroll_elm}
                            className="RightHeader_hidden_contain header_hidden_contain border-top-blur"
                        >
                            <HeaderMessContain
                                ref_scroll_elm={ref_scroll_elm}
                                closeZoom={closeZoom}
                            />
                        </div>
                    </div>
                </div>
            </CloseDiv>
        </div>
    );
}

export default HeaderMessage;
