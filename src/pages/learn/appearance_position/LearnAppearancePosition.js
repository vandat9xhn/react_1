import React, { useRef } from 'react';
import PropTypes from 'prop-types';
//
import { useAppearancePosition } from '../../../_hooks/useAppearancePosition';
//
import './LearnAppearancePosition.scss';

//
LearnAppearancePosition.propTypes = {};

//
function LearnAppearancePosition(props) {
    //
    const ref_child_elm = useRef(null);
    const ref_parent_elm = useRef(null);

    //
    const { is_open, transform_x, position_y, handleOpen, handleClose } =
        useAppearancePosition({
            ref_parent_elm: ref_parent_elm,
            ref_child_elm: ref_child_elm,
            extra_transform_x: 2,
        });

    //
    function handleToggleOpen(e) {
        is_open && handleClose(e);
        !is_open && handleOpen(e);
    }

    //
    return (
        <div className="LearnAppearancePosition">
            <div className="position-rel" ref={ref_parent_elm}>
                <div>
                    <div
                        className="LearnAppearancePosition_menu"
                        onClick={handleToggleOpen}
                    >
                        useAppearancePosition
                    </div>
                </div>

                <div
                    className={`LearnAppearancePosition_hidden ${
                        is_open ? 'visibility-visible' : 'visibility-hidden'
                    } ${position_y == 'top' ? 'bottom-100per' : 'top-100per'}`}
                    style={{
                        transform: `translateX(-50%) translateX(${transform_x}px)`,
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
