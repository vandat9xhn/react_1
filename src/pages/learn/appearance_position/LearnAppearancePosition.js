import React, { useRef } from 'react';
import PropTypes from 'prop-types';
//
import { usePositionXY } from '../../../_hooks/usePositionXY';
//
import './LearnAppearancePosition.scss';

//
LearnAppearancePosition.propTypes = {};

//
function LearnAppearancePosition(props) {
    //
    const ref_child_elm = useRef(null);
    const ref_btn_elm = useRef(null);

    //
    const { position_state, handleOpen, handleClose } = usePositionXY({
        ref_btn_elm: ref_btn_elm,
        ref_child_elm: ref_child_elm,
        extra_transform_x: 2,
    });

    const { is_open, position_x, transform_x, position_y } = position_state;

    //
    function handleToggleOpen(e) {
        is_open && handleClose(e);
        !is_open && handleOpen(e);
    }

    //
    return (
        <div className="LearnAppearancePosition">
            <div className="pos-rel" ref={ref_btn_elm}>
                <div>
                    <div
                        className="LearnAppearancePosition_menu"
                        onClick={handleToggleOpen}
                    >
                        usePositionXY
                    </div>
                </div>

                <div
                    className={`LearnAppearancePosition_hidden ${
                        is_open ? 'visibility-visible' : 'visibility-hidden'
                    } ${position_y == 'top' ? 'bottom-100per' : 'top-100per'}
                    ${position_x}`}
                    style={{
                        transform: `translateX(${transform_x}px)`,
                    }}
                >
                    <div
                        ref={ref_child_elm}
                        className="LearnAppearancePosition_hidden-contain bg-green"
                    >
                        1 asda asd asd
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LearnAppearancePosition;
